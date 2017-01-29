<?php require('includes/config.php');

//if not logged in redirect to login page
if(!$user->is_logged_in()){ header('Location: index.php'); }

//define page title
$title = 'BabyApp';
$breadcrumbs = 'Zmiany pieluszek - lista';

//include header template
require('layout/header.php');
require('layout/menu.php');
?>
          <section class="main-content opt-lists">
            <div class="list">
              <div class="listbox">
                <p class="list-title">Zmiany pieluszek - lista</p>

                <!-- tabela z nagłówkiem -->
                <!-- generowane z js -->
                  <!-- <p class="list-date">26.12.2016</p> -->
                  <!-- tabela tylko z danymi -->
                  <!-- <div class="list-table">
                    <div class="list-row">
                      <div class="diaper-hourbox">
                        <img class="clock clock-list" src="img/time-b.png" alt="clock" />
                        <span>16:00</span>
                      </div>
                      <div class="diaper-peebox">
                        <span>Siusiu</span>
                      </div>
                      <div class="diaper-poobox">
                        <span>+</span>
                        <div class="diaper-poo-icon">
                          3
                        </div>
                      </div>
                    </div>
                  </div> -->
                  <!-- tabela tylko z danymi -->
                  <!-- tabela z nagłówkiem -->

              </div>
              <div class="legendbox legend-lists">
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
    <script type="text/javascript" src="js/diaperInfo.js"></script>

  </body>
</html>
