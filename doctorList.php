<?php require('includes/config.php');

//if not logged in redirect to login page
if(!$user->is_logged_in()){ header('Location: index.php'); }

//define page title
$title = 'BabyApp';
$breadcrumbs = 'Wizyty lekarskie - lista';

//include header template
require('layout/header.php');
require('layout/menu.php');
?>
          <section class="main-content opt-lists">
            <div class="list">
              <div class="listbox">
                <p class="list-title">Wizyty lekarskie - lista</p>

                <!-- tabela z nagłówkiem -->
                <!-- <div class="row-orient doc-row">
                  <div class="was-or-not">

                  </div>
                  <div class="doc-visit">
                    <div class="doctor-datebox">
                      <img class="calendar calendar-list" src="img/date-b.png" alt="calendar" />
                      <span>26.09.2018</span>
                    </div>
                    <div class="doctor-hourbox">
                      <img class="clock clock-list" src="img/time-b.png" alt="clock" />
                      <span>12:00</span>
                    </div>
                    <div class="doctor-infobox">
                      <span>dr Anna Nowak</span>
                      <span>Warszawa, ul. Marszałkowska 1</span>
                      <span>Zabrać wyniki badań!</span>
                    </div>
                  </div>
                  <div class="deletebox">
                    <img class="fail-list" src="img/fail-b.png" alt="fail" />
                  </div>
                </div> -->
                <!-- tabela z nagłówkiem -->

                <!-- tabela z nagłówkiem -->
                <!-- <div class="row-orient">
                  <div class="was-or-not">
                    <img class="was-list" src="img/success-b.png" alt="success" />
                  </div>
                  <div class="doc-visit">
                    <div class="doctor-datebox">
                      <img class="calendar calendar-list" src="img/date-b.png" alt="calendar" />
                      <span>26.12.2016</span>
                    </div>
                    <div class="doctor-hourbox">
                      <img class="clock clock-list" src="img/time-b.png" alt="clock" />
                      <span>12:00</span>
                    </div>
                    <div class="doctor-infobox">
                      <span>dr Anna Nowak</span>
                    </div>
                  </div>
                  <div class="deletebox">
                    <img class="fail-list" src="img/fail-b.png" alt="fail" />
                  </div>
                </div> -->
                <!-- tabela z nagłówkiem -->

                <!-- tabela z nagłówkiem -->
                <!-- <div class="row-orient canceled">
                  <div class="was-or-not">
                    <img class="was-list" src="img/fail-lg.png" alt="success" />
                  </div>
                  <div class="doc-visit">
                    <div class="doctor-datebox">
                      <img class="calendar calendar-list" src="img/date-lg.png" alt="calendar" />
                      <span>26.12.2016</span>
                    </div>
                    <div class="doctor-hourbox">
                      <img class="clock clock-list" src="img/time-lg.png" alt="clock" />
                      <span>12:00</span>
                    </div>
                    <div class="doctor-infobox">
                      <span>dr Anna Nowak</span>
                    </div>
                  </div>
                </div> -->
                <!-- tabela z nagłówkiem -->

              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
    <footer>
      <div class="main-width">
        <p class="footText">&copy; 2016-2017 Karol Krusiec</p>
      </div>
    </footer>

    <script type="text/javascript" src="lib/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="js/mobileMenu.js"></script>
    <script type="text/javascript" src="js/babyInfo.js"></script>
    <script type="text/javascript" src="js/doctorInfo.js"></script>

  </body>
</html>
