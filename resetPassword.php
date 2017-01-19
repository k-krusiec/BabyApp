<?php require('includes/config.php');

//if logged in redirect to members page
if( $user->is_logged_in() ){ header('Location: memberpage.php'); }

$stmt = $db->prepare('SELECT resetToken, resetComplete FROM members WHERE resetToken = :token');
$stmt->execute(array(':token' => $_GET['key']));
$row = $stmt->fetch(PDO::FETCH_ASSOC);

//if no token from db then kill the page
if(empty($row['resetToken'])){
	$stop = 'Użyj linka resetującego hasło.';
} elseif($row['resetComplete'] == 'Yes') {
	$stop = 'Twoje hasło zostało zmienione.';
}

//if form has been submitted process it
if(isset($_POST['submit'])){

	//basic validation
	if(strlen($_POST['password']) < 3){
		$error[] = 'Podane hasło jest za krótkie.';
	}

	if(strlen($_POST['passwordConfirm']) < 3){
		$error[] = 'Potwierdzenie hasła jest za krótkie.';
	}

	if($_POST['password'] != $_POST['passwordConfirm']){
		$error[] = 'Hasła nie zgadzają się.';
	}

	//if no errors have been created carry on
	if(!isset($error)){

		//hash the password
		$hashedpassword = $user->password_hash($_POST['password'], PASSWORD_BCRYPT);

		try {

			$stmt = $db->prepare("UPDATE members SET password = :hashedpassword, resetComplete = 'Yes'  WHERE resetToken = :token");
			$stmt->execute(array(
				':hashedpassword' => $hashedpassword,
				':token' => $row['resetToken']
			));

			//redirect to index page
			header('Location: index.php?action=resetAccount');
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



	    	<?php if(isset($stop)){

	    		echo "<p class='bg-danger'>$stop</p>";

	    	} else { ?>

				<form role="form" method="post" action="" autocomplete="off">
					<div class="reglog-header">
						<h2>Zmiań hasło</h2>
					</div>

					<div class="form-inputs reset-pass-form">
					<?php
					//check for any errors
					if(isset($error)){
						foreach($error as $error){
							echo '<p class="bg-danger">'.$error.'</p>';
						}
					}

					//check the action
					switch ($_GET['action']) {
						case 'active':
							echo "<h2 class='bg-success'>Twoje konto jest już aktywne. Możesz się zalogować.</h2>";
							break;
						case 'reset':
							echo "<h2 class='bg-success'>Sprawdź skrzynkę mailową. Powinieneś dostać maila z resetem hasła.</h2>";
							break;
					}
					?>

						<div class="logIn-row">
							<div class="lcol">
								<label for="username">Nowe hasło:</label>
							</div>
							<div class="rcol">
								<input type="password" name="password" tabindex="1">
							</div>
						</div>

						<div class="logIn-row">
							<div class="lcol">
								<label for="username">Potwierdź hasło:</label>
							</div>
							<div class="rcol">
								<input type="password" name="passwordConfirm" tabindex="2">
							</div>
						</div>

						<input class="logFormBtn btn-custom-margin" type="submit" name="submit" value="Zmień hasło" tabindex="3">

					</div>

		</form>

			<?php } ?>

	</div>


</div>

<?php
//include header template
require('layout/footer.php');
?>
