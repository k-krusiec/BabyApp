<?php require('includes/config.php');

//if logged in redirect to members page
if( $user->is_logged_in() ){ header('Location: memberpage.php'); }

//if form has been submitted process it
if(isset($_POST['submit'])){

	//very basic validation
	if(strlen($_POST['username']) < 3){
		$error[] = 'Podany login jest za krótki.';
	} else {
		$stmt = $db->prepare('SELECT username FROM members WHERE username = :username');
		$stmt->execute(array(':username' => $_POST['username']));
		$row = $stmt->fetch(PDO::FETCH_ASSOC);

		if(!empty($row['username'])){
			$error[] = 'Podany login jest już zajęty.';
		}

	}

	if(strlen($_POST['password']) < 3){
		$error[] = 'Podane hasło jest za krótkie.';
	}

	if(strlen($_POST['passwordConfirm']) < 3){
		$error[] = 'Potwierdzenie hasła jest za krótkie.';
	}

	if($_POST['password'] != $_POST['passwordConfirm']){
		$error[] = 'Hasła nie zgadzają się.';
	}

	//email validation
	if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){
	    $error[] = 'Podaj prawidłowy adres e-mail.';
	} else {
		$stmt = $db->prepare('SELECT email FROM members WHERE email = :email');
		$stmt->execute(array(':email' => $_POST['email']));
		$row = $stmt->fetch(PDO::FETCH_ASSOC);

		if(!empty($row['email'])){
			$error[] = 'Podany e-mail jest już zajęty.';
		}

	}

	if(strlen($_POST['name']) < 3){
		$error[] = 'Podane imię jest za krótkie';
	}

	if(strlen($_POST['birth']) < 1){
		$error[] = 'Podaj datę urodzenia dziecka';
	}


	//if no errors have been created carry on
	if(!isset($error)){

		//hash the password
		$hashedpassword = $user->password_hash($_POST['password'], PASSWORD_BCRYPT);

		//create the activasion code
		$activasion = md5(uniqid(rand(),true));

		try {

			//insert into database with a prepared statement
			$stmt = $db->prepare('INSERT INTO members (username,password,email,name,birth,active) VALUES (:username, :password, :email, :name, :birth, :active)');
			$stmt->execute(array(
				':username' => $_POST['username'],
				':password' => $hashedpassword,
				':email' => $_POST['email'],
				':name' => $_POST['name'],
				':birth' => $_POST['birth'],
				':active' => $activasion
			));
			$id = $db->lastInsertId('memberID');

			//send email
			// $to = $_POST['email'];
			// $subject = "Registration Confirmation";
			// $body = "<p>Thank you for registering at demo site.</p>
			// <p>To activate your account, please click on this link: <a href='".DIR."activate.php?x=$id&y=$activasion'>".DIR."activate.php?x=$id&y=$activasion</a></p>
			// <p>Regards Site Admin</p>";

			$to = $_POST['email'];
			$subject = "Potwierdzenie rejestracji";
			$body = "<p>Dziękujemy za rejestrację w BabyApp.</p>
			<p>Kliknij na ten link: <a href='".DIR."activate.php?x=$id&y=$activasion'>".DIR."activate.php?x=$id&y=$activasion</a></p>, żeby aktywować konto.
			<p>Pozdrawiam, BabyApp Admin</p>";

			$mail = new Mail();
			$mail->setFrom(SITEEMAIL);
			$mail->addAddress($to);
			$mail->subject($subject);
			$mail->body($body);
			$mail->send();

			//redirect to index page
			header('Location: register.php?action=joined');
			exit;

		//else catch the exception and show the error.
		} catch(PDOException $e) {
		    $error[] = $e->getMessage();
		}

	}

}

//define page title
$title = 'BabyApp';

//include header template
require('layout/reglogheader.php');
?>

<div class="reg-container">

	<div class="reglog-width">
		<img class="reglog-logo" src="img/babyapp-logo-180x80.png" alt="logo babyapp">

		<form role="form" method="post" action="" autocomplete="off">
			<div class="reglog-header">
				<h2>Zarejestruj się</h2>
			</div>

			<div class="form-inputs">
				<?php
				//check for any errors
				if(isset($error)){
					foreach($error as $error){
						echo '<p class="bg-danger">'.$error.'</p>';
					}
				}

				//if action is joined show sucess
				if(isset($_GET['action']) && $_GET['action'] == 'joined'){
					//echo "<h2 class='bg-success'>Registration successful, please check your email to activate your account.</h2>";
					echo "<h2 class='bg-success'>Rejestracja przebiegła pomyślnie. Za chwilę dostaniesz e-mail z linkiem aktywacyjnym.</h2>";
				}
				?>
				<div class="userInfoForm">
					<div class="labinput-row">
						<div class="lcol lcol-register">
							<label for="username">Login:</label>
						</div>
						<div class="rcol">
							<input type="text" name="username" value="<?php if(isset($error)){ echo $_POST['username']; } ?>" tabindex="1">
						</div>
					</div>

					<div class="labinput-row">
						<div class="lcol lcol-register">
							<label for="email">Email:</label>
						</div>
						<div class="rcol">
							<input type="email" name="email" value="<?php if(isset($error)){ echo $_POST['email']; } ?>" tabindex="2">
						</div>
					</div>

					<div class="labinput-row">
						<div class="lcol lcol-register">
							<label for="password">Hasło:</label>
						</div>
						<div class="rcol">
							<input type="password" name="password" tabindex="3">
						</div>
					</div>

					<div class="labinput-row">
						<div class="lcol lcol-register">
							<label for="passwordConfirm">Potwierdź hasło:</label>
						</div>
						<div class="rcol">
							<input type="password" name="passwordConfirm" tabindex="4">
						</div>
					</div>
				</div>

				<div class="babyInfoForm">
					<div class="labinput-row">
						<div class="lcol lcol-register">
							<label for="babyName">Imię dziecka:</label>
						</div>
						<div class="rcol">
							<input type="text" name="name" placeholder="np. Tradycja ;)" value="<?php if(isset($error)){ echo $_POST['name']; } ?>" tabindex="5">
						</div>
					</div>

					<div class="labinput-row">
						<div class="lcol lcol-register">
							<label for="babyAge">Data urodzenia dziecka:</label>
						</div>
						<div class="rcol">
							<input type="date" name="birth" value="<?php if(isset($error)){ echo $_POST['birth']; } ?>" tabindex="6">
						</div>
					</div>
				</div>

				<input class="logFormBtn" type="submit" name="submit" value="Zapisz" tabindex="7">

			</div>

			<p class="orText">lub</p>

		</form>

			<a class="reglog-link" href='./'>Przejdź do strony logowania</a>

	</div>

</div>

<?php
//include header template
require('layout/footer.php');
?>
