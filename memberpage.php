<?php require('includes/config.php');

//if not logged in redirect to login page
if(!$user->is_logged_in()){ header('Location: index.php'); }

//define page title
$title = 'BabyApp';
$breadcrumbs = 'Strona główna';

$me =  $_SESSION['username'];
$feedStartDate = $_POST['feed-start-date'];
$feedStartTime = $_POST['feed-start-time'];
$feedStopDate = $_POST['feed-stop-date'];
$feedStopTime = $_POST['feed-stop-time'];
$breastSide = $_POST['breast-rbcl'];
$feedMilliliters = $_POST['milliliters'];
$feedComments = $_POST['feed-comments'];

$weightDate = $_POST['weight-date'];
$grams = $_POST['grams'];

$diaperDate = $_POST['diaper-date'];
$diaperTime = $_POST['diaper-time'];
$pooSize = $_POST['poo-rbcl'];

$bathDate = $_POST['bath-date'];
$bathComments = $_POST['bath-comments'];

$doctorDate = $_POST['doctor-date'];
$doctorTime = $_POST['doctor-time'];
$doctorName = $_POST['doctor-name'];
$doctorLocation = $_POST['doctor-location'];
$doctorComments = $_POST['doctor-comments'];

$diaryDate = $_POST['diary-date'];
$diaryComments = $_POST['diary-comments'];

try {
	if(isset($_POST["feed-submit"]) && $_SERVER['REQUEST_METHOD'] === "POST") {

		$stmt = $db->prepare("INSERT INTO feed (username, startdate, starttime, stopdate, stoptime, breast, milk, comment) VALUES (:username, :startdate, :starttime, :stopdate, :stoptime, :breast, :milliliters, :comment)");
		$stmt->bindParam(':username', $me);
		$stmt->bindParam(':startdate', $feedStartDate);
		$stmt->bindParam(':starttime', $feedStartTime);
		$stmt->bindParam(':stopdate', $feedStopDate);
		$stmt->bindParam(':stoptime', $feedStopTime);
		$stmt->bindParam(':breast', $breastSide);
		$stmt->bindParam(':milliliters', $feedMilliliters);
		$stmt->bindParam(':comment', $feedComments);
		$stmt->execute();

		unset($_POST);
		unset($_REQUEST);
		header('Location: memberpage.php');

	}
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

try {
	if(isset($_POST["weight-submit"]) && $_SERVER['REQUEST_METHOD'] === "POST") {

		$stmt = $db->prepare("INSERT INTO weight (username, weightdate, grams) VALUES (:username, :weightdate, :grams)");
		$stmt->bindParam(':username', $me);
		$stmt->bindParam(':weightdate', $weightDate);
		$stmt->bindParam(':grams', $grams);
		$stmt->execute();

		unset($_POST);
		unset($_REQUEST);
		header('Location: memberpage.php');

	}
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

try {
	if(isset($_POST["diaper-submit"]) && $_SERVER['REQUEST_METHOD'] === "POST") {

		$stmt = $db->prepare("INSERT INTO diaper (username, diaperdate, diapertime, poosize) VALUES (:username, :diaperdate, :diapertime, :poosize)");
		$stmt->bindParam(':username', $me);
		$stmt->bindParam(':diaperdate', $diaperDate);
		$stmt->bindParam(':diapertime', $diaperTime);
		$stmt->bindParam(':poosize', $pooSize);
		$stmt->execute();

		unset($_POST);
		unset($_REQUEST);
		header('Location: memberpage.php');

	}
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

try {
	if(isset($_POST["bath-submit"]) && $_SERVER['REQUEST_METHOD'] === "POST") {

		$stmt = $db->prepare("INSERT INTO bath (username, bathdate, comment) VALUES (:username, :bathdate, :comment)");
		$stmt->bindParam(':username', $me);
		$stmt->bindParam(':bathdate', $bathDate);
		$stmt->bindParam(':comment', $bathComments);
		$stmt->execute();

		unset($_POST);
		unset($_REQUEST);
		header('Location: memberpage.php');

	}
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

try {
	if(isset($_POST["doctor-submit"]) && $_SERVER['REQUEST_METHOD'] === "POST") {

		$stmt = $db->prepare("INSERT INTO doctor (username, doctordate, doctortime, doctorname, doctorlocation, comment) VALUES (:username, :doctordate, :doctortime, :doctorname, :doctorlocation, :comment)");
		$stmt->bindParam(':username', $me);
		$stmt->bindParam(':doctordate', $doctorDate);
		$stmt->bindParam(':doctortime', $doctorTime);
		$stmt->bindParam(':doctorname', $doctorName);
		$stmt->bindParam(':doctorlocation', $doctorLocation);
		$stmt->bindParam(':comment', $doctorComments);
		$stmt->execute();

		unset($_POST);
		unset($_REQUEST);
		header('Location: memberpage.php');

	}
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

try {
	if(isset($_POST["diary-submit"]) && $_SERVER['REQUEST_METHOD'] === "POST") {

		$stmt = $db->prepare("INSERT INTO diary (username, diarydate, comment) VALUES (:username, :diarydate, :comment)");
		$stmt->bindParam(':username', $me);
		$stmt->bindParam(':diarydate', $diaryDate);
		$stmt->bindParam(':comment', $diaryComments);
		$stmt->execute();

		unset($_POST);
		unset($_REQUEST);
		header('Location: memberpage.php');

	}
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

//include header template
require('layout/header.php');
require('layout/menu.php');
?>

          <section class="main-content">
            <div class="row">
              <div class="tile feed-opt">
                <div class="feed-btn option-btn">
                  <span>Karmienie</span>
                </div>
              </div>
              <div class="tile weight-opt">
                <div class="weight-btn option-btn">
                  <span>Ważenie</span>
                </div>
              </div>
            </div>

            <!--Feed form-->
            <div class="feed-formbox formbox">
              <div class="formbox-in-left">
                <form method="POST" class="form feed-form">
                  <div class="feed-start">
                    <label class="required" for="feed-start-date">Start</label>
                    <div class="databox">
                      <img class="calendar" src="img/date-b.png" alt="calendar" />
                      <input class="hp-date feed-start-date" type="date" name="feed-start-date" />
                    </div>
                    <div class="databox">
                      <img class="clock" src="img/time-b.png" alt="clock" />
                      <input class="feed-start-time" type="time" name="feed-start-time" />
                    </div>
                  </div>
                  <div class="feed-stop">
                      <label for="feed-stop-date">Koniec</label>
                    <div class="databox">
                      <img class="calendar" src="img/date-b.png" alt="calendar" />
                      <input class="hp-date feed-stop-date" type="date" name="feed-stop-date" />
                    </div>
                    <div class="databox">
                      <img class="clock" src="img/time-b.png" alt="clock" />
                      <input class="feed-stop-time" type="time" name="feed-stop-time" />
                    </div>
                  </div>
                  <div class="feed-breast">
                    <label for="breast">Pierś</label>

										<div class="breast-rbcl">
								  		<input type="radio" value="L" id="breast-chk1" class="breast-rb" name="breast-rbcl"/>
									  	<label for="breast-chk1"></label>
											<span class="breast-rbcl-text">L</span>
								  	</div>

										<div class="breast-rbcl rbcl-margin">
								  		<input type="radio" value="P" id="breast-chk2" class="breast-rb" name="breast-rbcl" />
									  	<label for="breast-chk2"></label>
											<span class="breast-rbcl-text">P</span>
								  	</div>

                  </div>
                  <div class="feed-ml">
                    <label for="milliliters">Wypite mleko</label>
                    <!--<input class="milliliters" type="number" name="milliliters" min="0000" max="9999" placeholder="0000"/>-->
                    <input class="milliliters" type="number" name="milliliters" placeholder="0000"/>
                    <span>ml</span>
                  </div>
                  <div class="commentbox">
                    <label for="comments">Uwagi</label>
                    <textarea class="feed-comment" name="feed-comments"></textarea>
                  </div>
                  <div class="submitbox">
                    <input class="submit-btn" type="submit" name="feed-submit" value="Zapisz">
                    <button class="cancel-btn" type="button" name="feed-cancel">Anuluj</button>
                  </div>
                </form>
                <div class="legendbox">
                  <span class="legend-title">Legenda</span>
                  <div class="legend-set">
                    <div class="legend-ico">L</div>
                    <span class="breast-name">LEWA pierś</span>
                  </div>
                  <div class="legend-set">
                    <div class="legend-ico">P</div>
                    <span class="breast-name">PRAWA pierś</span>
                  </div>
                </div>
              </div>
            </div>
            <!--Feed form end-->

            <!--Weight form-->
            <div class="weight-formbox formbox">
              <div class="formbox-in-right">
                <form method="POST" class="form weight-form">
                  <div class="weight-start">
                    <label class="required" for="weight-date">Kiedy</label>
                    <img class="calendar" src="img/date-b.png" alt="calendar" />
                    <input class="hp-date weight-date" type="date" name="weight-date" />
                  </div>
                  <div class="weight-g">
                    <label class="required" for="grams">Waga</label>
                    <!--<input class="grams" type="number" name="grams" min="00000" max="99999" placeholder="00000" />-->
                    <input class="grams" type="number" name="grams" placeholder="00000" />
                    <span>g</span>
                  </div>
                  <div class="submitbox">
                    <input class="submit-btn" type="submit" name="weight-submit" value="Zapisz">
                    <button class="cancel-btn" type="button" name="weight-cancel">Anuluj</button>
                  </div>
                </form>
              </div>
            </div>
            <!--Weight form end-->

            <div class="row">
              <div class="tile diaper-opt">
                <div class="diaper-btn option-btn">
                  <span>Zmiana pieluszki</span>
                </div>
              </div>
              <div class="tile bath-opt">
                <div class="bath-btn option-btn">
                  <span>Kąpiel</span>
                </div>
              </div>
            </div>

            <!--diaper form-->
            <div class="diaper-formbox formbox">
              <div class="formbox-in-left">
                <form method="POST" class="form diaper-form">
                  <div class="diaper-start">
                    <label class="required" for="diaper-date">Kiedy</label>
                    <div class="databox">
                      <img class="calendar" src="img/date-b.png" alt="calendar" />
                      <input class="hp-date diaper-date" type="date" name="diaper-date" />
                    </div>
                    <div class="databox">
                      <img class="clock" src="img/time-b.png" alt="clock" />
                      <input class="diaper-time" type="time" name="diaper-time" />
                    </div>
                  </div>
                  <div class="diaper-pee">
                    <label for="pee">Siusiu</label>
                    <div class="pee-radio pee-checked"></div>
                  </div>
                  <div class="diaper-poo">
                    <label for="poo">Kupka</label>

										<div class="poo-rbcl">
								  		<input type="radio" value="1" id="poo-chk1" class="poo-rb" name="poo-rbcl"/>
									  	<label for="poo-chk1"></label>
											<span class="poo-rbcl-text">1</span>
								  	</div>

										<div class="poo-rbcl rbcl-margin">
								  		<input type="radio" value="2" id="poo-chk2" class="poo-rb" name="poo-rbcl" />
									  	<label for="poo-chk2"></label>
											<span class="poo-rbcl-text poorbcl2">2</span>
								  	</div>

										<div class="poo-rbcl rbcl-margin">
								  		<input type="radio" value="3" id="poo-chk3" class="poo-rb" name="poo-rbcl" />
									  	<label for="poo-chk3"></label>
											<span class="poo-rbcl-text poorbcl3">3</span>
								  	</div>

                  </div>
                  <div class="submitbox">
                    <input class="submit-btn" type="submit" name="diaper-submit" value="Zapisz">
                    <button class="cancel-btn" type="button" name="diaper-cancel">Anuluj</button>
                  </div>
                </form>
                <div class="legendbox">
                  <span class="legend-title">Legenda</span>
                  <div class="legend-set">
                    <div class="legend-ico">1</div>
                    <span class="poo-name">MAŁA kupka</span>
                  </div>
                  <div class="legend-set">
                    <div class="legend-ico">2</div>
                    <span class="poo-name">ŚREDNIA kupka</span>
                  </div>
                  <div class="legend-set">
                    <div class="legend-ico">3</div>
                    <span class="poo-name">DUŻA kupka</span>
                  </div>
                </div>
              </div>
            </div>
            <!--diaper form end-->

            <!--bath form-->
            <div class="bath-formbox formbox">
              <div class="formbox-in-right">
                <form method="POST" class="form bath-form">
                  <div class="bath-start">
                    <label class="required" for="bath-date">Kiedy</label>
                    <img class="calendar" src="img/date-b.png" alt="calendar" />
                    <input class="hp-date bath-date" type="date" name="bath-date" />
                  </div>
                  <div class="commentbox">
                    <label for="comments">Uwagi</label>
                    <textarea class="bath-comment" name="bath-comments"></textarea>
                  </div>
                  <div class="submitbox">
                    <input class="submit-btn" type="submit" name="bath-submit" value="Zapisz">
                    <button class="cancel-btn" type="button" name="bath-cancel">Anuluj</button>
                  </div>
                </form>
              </div>
            </div>
            <!--bath form end-->

            <div class="row">
              <div class="tile doctor-opt">
                <div class="doctor-btn option-btn">
                  <span>Wizyta lekarska</span>
                </div>
              </div>
              <div class="tile diary-opt">
                <div class="diary-btn option-btn">
                  <span>Wpis w&nbsp;dzienniku</span>
                </div>
              </div>
            </div>

            <!--doctor form-->
            <div class="doctor-formbox formbox">
              <div class="formbox-in-left">
                <form method="POST" class="form doctor-form">
                  <div class="doctor-start">
                    <label class="required" for="doctor-date">Kiedy</label>
                    <div class="databox">
                      <img class="calendar" src="img/date-b.png" alt="calendar" />
                      <input class="hp-date doctor-date" type="date" name="doctor-date" />
                    </div>
                    <div class="databox">
                      <img class="clock" src="img/time-b.png" alt="clock" />
                      <input class="doctor-time" type="time" name="doctor-time" />
                    </div>
                  </div>
                  <div class="doctor-who">
                    <label class="required" for="doctor-name">Kto</label>
                    <input class="doctor-name" type="text" name="doctor-name" placeholder="np. Anna Kowalska" />
                  </div>
                  <div class="doctor-where">
                    <label for="doctor-location">Gdzie</label>
                    <input class="doctor-location" type="text" name="doctor-location" placeholder="np. Warszawa, Marszałkowska 1" />
                  </div>
                  <div class="commentbox">
                    <label for="comments">Uwagi</label>
                    <textarea class="doctor-comment" name="doctor-comments"></textarea>
                  </div>
                  <div class="submitbox">
                    <input class="submit-btn" type="submit" name="doctor-submit" value="Zapisz">
                    <button class="cancel-btn" type="button" name="doctor-cancel">Anuluj</button>
                  </div>
                </form>
              </div>
            </div>
            <!--doctor form end-->

            <!--diary form-->
            <div class="diary-formbox formbox">
              <div class="formbox-in-right">
                <form method="POST" class="form diary-form">
                  <div class="diary-start">
                    <label class="required" for="diary-date">Kiedy</label>
                    <img class="calendar" src="img/date-b.png" alt="calendar" />
                    <input class="hp-date diary-date" type="date" name="diary-date" />
                  </div>
                  <div class="commentbox diary-ta">
                    <label class="required" for="comments">Opis</label>
                    <textarea class="diary-comment" name="diary-comments"></textarea>
                  </div>
                  <div class="diary-photo">
                    <img class="photo" src="img/photo-t.png" alt="photo" />
                    <span>dodaj zdięcie</span>
                  </div>
                  <div class="diary-video">
                    <img class="video" src="img/video-t.png" alt="video" />
                    <span>dodaj video</span>
                  </div>
                  <div class="submitbox">
                    <input class="submit-btn" type="submit" name="diary-submit" value="Zapisz">
                    <button class="cancel-btn" type="button" name="diary-cancel">Anuluj</button>
                  </div>
                </form>
              </div>
            </div>
            <!--diary form end-->

          </section>
        </div>
      </div>
    </main>
		<footer>
	    <div class="main-width">
	      <p class="footText">&copy; 2016 Karol Krusiec</p>
	    </div>
	  </footer>

	  <script type="text/javascript" src="lib/jquery-3.1.1.min.js"></script>
	  <script type="text/javascript" src="js/homePage.js"></script>
	  <script type="text/javascript" src="js/babyInfo.js"></script>

	  </body>
	</html>
