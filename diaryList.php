<?php require('includes/config.php');

//if not logged in redirect to login page
if(!$user->is_logged_in()){ header('Location: index.php'); }

//define page title
$title = 'BabyApp';
$breadcrumbs = 'Dziennik';

//include header template
require('layout/header.php');
require('layout/menu.php');
?>
          <section class="main-content opt-lists">
            <div class="list">
              <div class="listbox">
                <p class="list-title">Dziennik</p>

                <!-- tabela z nagłówkiem -->
                <!-- generowane z js
                <div class="row-orient diary-row">
                  <div class="diary-infobox">
                    <div class="diary-datebox">
                      <img class="calendar calendar-list" src="img/date-b.png" alt="calendar" />
                      <span>24.12.2016</span>
                    </div>
                    <div class="diary-photobox">
                      <img src="http://placehold.it/150x100">
                    </div>
                  </div>
                  <div class="diary-text">
                    Pierwszy ząb
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
        <p class="footText">&copy; 2016 Karol Krusiec</p>
      </div>
    </footer>

    <script type="text/javascript" src="lib/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="js/babyInfo.js"></script>
    <script type="text/javascript" src="js/diaryInfo.js"></script>

  </body>
</html>
