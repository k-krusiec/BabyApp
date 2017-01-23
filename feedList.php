<?php require('includes/config.php');

//if not logged in redirect to login page
if(!$user->is_logged_in()){ header('Location: index.php'); }

//define page title
$title = 'BabyApp';
$breadcrumbs = 'Karmienia - lista';

//include header template
require('layout/header.php');
require('layout/menu.php');
?>
          <section class="main-content opt-lists">
            <div class="list">
              <div class="listbox">
                <p class="list-title">Karmienia - lista</p>

                <!-- tabela z nagłówkiem -->
                  <!-- <p class="list-date">26.12.2016</p> -->
                  <!-- tabela tylko z danymi -->
                  <!-- <div class="list-table">
                    <div class="list-row">
                      <div class="feed-hourbox">
                        <img class="clock clock-list" src="img/time-b.png" alt="clock" />
                        <span>12:00</span>
                      </div>
                      <div class="feed-timebox">
                        <span>ponad godzinę</span>
                      </div>
                      <div class="feed-breastbox">
                        <div class="feed-breast-icon">
                          P
                        </div>
                      </div>
                      <div class="feed-bottlebox">
                        <span>100ml</span>
                      </div>
                    </div>
                    <div class="feed-commentbox">
                      <span>na leżąco</span>
                    </div>
                  </div> -->
                  <!-- tabela tylko z danymi -->
                  <!-- tabela z nagłówkiem -->

              </div>
              <div class="legendbox legend-lists">
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
    <script type="text/javascript" src="js/babyInfo.js"></script>
    <script type="text/javascript" src="js/feedInfo.js"></script>

  </body>
</html>
