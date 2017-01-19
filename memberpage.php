<?php require('includes/config.php');

//if not logged in redirect to login page
if(!$user->is_logged_in()){ header('Location: index.php'); }

//define page title
$title = 'BabyApp';
$me =  $_SESSION['username'];
$feedStartDate = $_POST['feed-start-date'];
$feedStartTime = $_POST['feed-start-time'];
$feedStopDate = $_POST['feed-stop-date'];
$feedStopTime = $_POST['feed-stop-time'];
$feedMilliliters = $_POST['milliliters'];
$feedComments = $_POST['comments'];


try {
	if(isset($_POST["feed-submit"]) && $_SERVER['REQUEST_METHOD'] === "POST") {

		$stmt = $db->prepare("INSERT INTO feed (username, startdate, starttime, stopdate, stoptime, milk, comment) VALUES (:username, :startdate, :starttime, :stopdate, :stoptime, :milliliters, :comment)");
		$stmt->bindParam(':username', $me);
		$stmt->bindParam(':startdate', $feedStartDate);
		$stmt->bindParam(':starttime', $feedStartTime);
		$stmt->bindParam(':stopdate', $feedStopDate);
		$stmt->bindParam(':stoptime', $feedStopTime);
		$stmt->bindParam(':milliliters', $feedMilliliters);
		$stmt->bindParam(':comment', $feedComments);
		$stmt->execute();

	}
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

$breadcrumbs = 'Strona główna';

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
                <form method="POST" class="form">
                  <div class="feed-start">
                    <label class="required" for="feed-start-date">Start</label>
                    <div class="databox">
                      <img class="calendar" src="img/date-b.png" alt="calendar" />
                      <input class="hp-date" type="date" name="feed-start-date" />
                    </div>
                    <div class="databox">
                      <img class="clock" src="img/time-b.png" alt="clock" />
                      <input type="time" name="feed-start-time" />
                    </div>
                  </div>
                  <div class="feed-stop">
                      <label for="feed-stop-date">Koniec</label>
                    <div class="databox">
                      <img class="calendar" src="img/date-b.png" alt="calendar" />
                      <input class="hp-date" type="date" name="feed-stop-date" />
                    </div>
                    <div class="databox">
                      <img class="clock" src="img/time-b.png" alt="clock" />
                      <input type="time" name="feed-stop-time" />
                    </div>
                  </div>
                  <div class="feed-breast">
                    <label for="breast">Pierś</label>
                    <div class="breast-radio" data-side="l">L</div>
                    <div class="breast-radio" data-side="r">P</div>
                  </div>
                  <div class="feed-ml">
                    <label for="milliliters">Wypite mleko</label>
                    <input class="milliliters" type="number" name="milliliters" min="0000" max="9999" placeholder="0000"/>
                    <span>ml</span>
                  </div>
                  <div class="commentbox">
                    <label for="comments">Uwagi</label>
                    <textarea class="feed-comments" name="comments"></textarea>
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
                <form method="POST" class="form">
                  <div class="diaper-start">
                    <label class="required" for="diaper-date">Kiedy</label>
                    <div class="databox">
                      <img class="calendar" src="img/date-b.png" alt="calendar" />
                      <input class="hp-date" type="date" name="diaper-date" />
                    </div>
                    <div class="databox">
                      <img class="clock" src="img/time-b.png" alt="clock" />
                      <input type="time" name="diaper-time" />
                    </div>
                  </div>
                  <div class="diaper-pee">
                    <label for="pee">Siusiu</label>
                    <div class="pee-radio pee-checked"></div>
                  </div>
                  <div class="diaper-poo">
                    <label for="poo">Kupka</label>
                    <div class="poo-radio" data-size="1">1</div>
                    <div class="poo-radio" data-size="2">2</div>
                    <div class="poo-radio" data-size="3">3</div>
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
                    <textarea class="bath-comment" name="comments"></textarea>
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
                    <textarea class="doctor-comment" name="comments"></textarea>
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
                    <textarea class="diary-comment" name="comments"></textarea>
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








<!--<div class="container">

	<div class="row">

	    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
				<h1>to jest strona dostepna po zalogowaniu</h1>

				<h2>Member only page - Welcome <?php echo $_SESSION['username']; ?></h2>
				<p><a href='logout.php'>Logout</a></p>
				<hr>

		</div>
	</div>


</div>-->

<?php
//include header template
require('layout/footer.php');
?>
