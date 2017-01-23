<?php
//include config
require_once('includes/config.php');

//check if already logged in move to home page
if( $user->is_logged_in() ){ header('Location: memberpage.php'); }

//process login form if submitted
if(isset($_POST['submit'])){

	$username = $_POST['username'];
	$password = $_POST['password'];

	if($user->login($username,$password)){
		$_SESSION['username'] = $username;
		header('Location: memberpage.php');
		exit;

	} else {
		$error[] = 'Błędny login lub hasło. Upewnij się, że aktywowałeś konto.';
	}

}//end if submit

//define page title
$title = 'Login';

//include header template
require('layout/reglogheader.php');
?>


<div class="reg-container">

	<div class="reglog-width">

			<img class="reglog-logo" src="img/babyapp-logo-180x80.png" alt="logo babyapp">

			<form role="form" method="post" action="" autocomplete="off">
				<div class="reglog-header">
					<h2>Zaloguj się</h2>
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
							case 'resetAccount':
								echo "<h2 class='bg-success'>Hasło zostało zmienione. Możesz się zalogować.</h2>";
								break;
						}

					}


					?>

					<div class="logIn-row">
						<div class="lcol">
							<label for="username">Login:</label>
						</div>
						<div class="rcol">
							<input type="text" name="username" value="<?php if(isset($error)){ echo $_POST['username']; } ?>" tabindex="1">
						</div>
					</div>

					<div class="logIn-row">
						<div class="lcol">
							<label for="username">Hasło:</label>
						</div>
						<div class="rcol">
							<input type="password" name="password" tabindex="2">
						</div>
					</div>

					<div>
				 		<a class="reglog-link" href='reset.php'>Zapomniałeś hasła?</a>
					</div>

					<input class="logFormBtn" type="submit" name="submit" value="Zaloguj" tabindex="3">

				</div>
				<p class="orText">lub</p>

			</form>

			<a class="reglog-link" href='register.php'>Przejdź do strony rejestracji.</a>

	</div>



</div>


<?php
//include header template
require('layout/footer.php');
?>
