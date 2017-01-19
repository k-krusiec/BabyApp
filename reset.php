<?php require('includes/config.php');

//if logged in redirect to members page
if( $user->is_logged_in() ){ header('Location: memberpage.php'); }

//if form has been submitted process it
if(isset($_POST['submit'])){

	//email validation
	if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
	    $error[] = 'Podaj prawidłowy adres e-mail.';
	} else {
		$stmt = $db->prepare('SELECT email FROM members WHERE email = :email');
		$stmt->execute(array(':email' => $_POST['email']));
		$row = $stmt->fetch(PDO::FETCH_ASSOC);

		if(empty($row['email'])){
			$error[] = 'Nie mamy takiego e-maila w bazie.';
		}

	}

	//if no errors have been created carry on
	if(!isset($error)){

		//create the activasion code
		$token = md5(uniqid(rand(),true));

		try {

			$stmt = $db->prepare("UPDATE members SET resetToken = :token, resetComplete='No' WHERE email = :email");
			$stmt->execute(array(
				':email' => $row['email'],
				':token' => $token
			));

			//send email
			$to = $row['email'];
			$subject = "Reset hasła";
			$body = "<p>Dostaliśmy prośbę o reset hasła do aplikacji BabyApp.</p>
			<p>Jeżeli nie prosiłeś o reset hasła, zignoruj tego e-maila.</p>
			<p>Kliknij w ten link: <a href='".DIR."resetPassword.php?key=$token'>".DIR."resetPassword.php?key=$token</a>, aby zresetować hasło.</p>";

			$mail = new Mail();
			$mail->setFrom(SITEEMAIL);
			$mail->addAddress($to);
			$mail->subject($subject);
			$mail->body($body);
			$mail->send();

			//redirect to index page
			header('Location: index.php?action=reset');
			exit;

		//else catch the exception and show the error.
		} catch(PDOException $e) {
		    $error[] = $e->getMessage();
		}

	}

}

//define page title
$title = 'Reset Hasła';

//include header template
require('layout/reglogheader.php');
?>

<div class="reg-container">

	<div class="reglog-width">

			<img class="reglog-logo" src="img/babyapp-logo-180x80.png" alt="logo babyapp">
			<form role="form" method="post" action="" autocomplete="off">
				<div class="reglog-header">
					<h2>Reset hasła</h2>
				</div>

				<div class="form-inputs">
					<?php
					//check for any errors
					if(isset($error)){
						foreach($error as $error){
							echo '<p class="bg-danger">'.$error.'</p>';
						}
					}

					if(isset($_GET['action'])){

						//check the action
						switch ($_GET['action']) {
							case 'active':
								echo "<h2 class='bg-success'>Twoje konto jest już aktywne. Możesz się zalogować.</h2>";
								break;
							case 'reset':
								echo "<h2 class='bg-success'>Sprawdź skrzynkę mailową. Powinieneś dostać maila z resetem hasła.</h2>";
								break;
						}
					}
					?>

				<div class="logIn-row reset-pass">
					<label for="username">Email:</label>
					<input type="email" name="email" value="" tabindex="1">
				</div>

				<input class="logFormBtn btn-custom-margin" type="submit" name="submit" value="Reset hasła" tabindex="2">

			</div>

			<p class="orText">lub</p>

		</form>

		<a class="reglog-link" href='./'>Wróć do strony logowania</a>

	</div>

</div>

<?php
//include header template
require('layout/footer.php');
?>
