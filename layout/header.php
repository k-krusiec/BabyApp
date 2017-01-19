<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="utf-8" />
  <meta name="description" content="BabyApp" />
  <meta name="keywords" content="happiness, useful, easy, parenting, baby, clear" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php if(isset($title)){ echo $title; }?></title>
    <!--<link href="//netdna.bootstrapcdn.com/bootstrap/3.1.0/css/bootstrap.min.css" rel="stylesheet">-->
    <!--<link rel="stylesheet" href="style/main.css">-->
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>

  <header class="header">
    <div class="main-width">
      <nav class="mobile-menu">
        <ul>
          <li class="mob-home"><a href="homePage.html">Strona główna</a></li>
          <li class="mob-feed"><a href="feedList.html">Karmienia</a></li>
          <li class="mob-weight"><a href="weightList.html">Ważenia</a></li>
          <li class="mob-diaper"><a href="diaperList.html">Zmiany pieluszek</a></li>
          <li class="mob-bath"><a href="bathList.html">Kąpiele</a></li>
          <li class="mob-doctor"><a href="doctorList.html">Wizyty lekarskie</a></li>
          <li class="mob-diary"><a href="diaryList.html">Dziennik</a></li>
          <li class="mob-set"><a href="logout.php">Wyloguj</a></li>
        </ul>
      </nav>
      <div class="main-header">
        <a href="#">
          <img class="hp-logo" src="img/babyapp-logo-180x80.png" alt="BabyApp logo" />
        </a>
        <img class="foto" src="img/fake-baby-78x78.png" alt="baby" />
        <div class="baby-info">
          <p class="baby-name">Imię</p>
          <p class="baby-age">Wiek</p>
        </div>
        <a class="settings" href="logout.php">
          Wyloguj
        </a>
        <div class="ham-menu ham-icon">
          <span class="ham-menu-title">Menu</span>
        </div>
      </div>
    </div>
    <section class="breadcrumbs">
      <div class="main-width">
        <span class="home-page-bc"><a href="homePage.html">BabyApp</a></span>
        <img class="right-arrow" src="img/rarrow-dg.png" alt="right arrow" />
        <span><?php if(isset($breadcrumbs)){ echo $breadcrumbs; }?></span>
      </div>
    </section>
  </header>
