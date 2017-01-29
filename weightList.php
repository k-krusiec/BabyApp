<?php require('includes/config.php');

//if not logged in redirect to login page
if(!$user->is_logged_in()){ header('Location: index.php'); }

//define page title
$title = 'BabyApp';
$breadcrumbs = 'Ważenia - lista';

//include header template
require('layout/header.php');
require('layout/menu.php');
?>
          <section class="main-content opt-lists">
            <div class="list">
              <div class="listbox">
                <p class="list-title">Ważenia - lista</p>

                <!-- tabela z nagłówkiem -->
                <!-- generowane z js
                <div class="row-orient">
                  <div class="weight-datebox">
                    <img class="calendar calendar-list" src="img/date-b.png" alt="calendar" />
                    <span>26.12.2016</span>
                  </div>
                  <div class="weight-infobox">
                    <span>7 400g</span>
                  </div>
                  <div class="weight-differencebox weight-green">
                    <span>(+15g)</span>
                  </div>
                </div>-->
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
    <script type="text/javascript" src="js/weightInfo.js"></script>

  </body>
</html>
