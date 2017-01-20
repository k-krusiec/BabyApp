$(document).ready(function() {

  var $body = $('body');

  var $optionBtns = $body.find('.option-btn');
  var $formPanels = $body.find('.formbox');
  //var $breastRadios = $body.find('.breast-radio');
  var $breastRadios = $body.find('.breast-rbcl');
  var $pooRadios = $body.find('.poo-radio');
  var $cancelBtns = $body.find('.cancel-btn');

  var btnIconReset = {
    'background': '',
    'background-size': '',
    'color': ''
  };

  var btnBgReset = {
    'background': ''
  };

  var tileImgPos = {
    'desktop': 'no-repeat 25px center transparent',
    'phone': 'no-repeat center 25px transparent'
  }

  var errorText = {
    'req': 'Uzupełnij to pole',
    'longComment': 'Możesz wpisać max 500 znaków',
    'notAvailable': 'Ta opcja nie jest dostępna',
    'notANum': 'To pole musi zawierać tylko cyfry', // wywala htmlowy komentarz
    'negNum': 'Wartość nie może być ujemna',
    'toBigNum': 'Wartość nie może być większa niż 99999',
    'longText': 'Możesz wpisać max 50 znaków'
  }

  var breastSide;
  var pooSize;

  // function localStorageHandling() {
  //   var babyInfo = JSON.parse(localStorage.getItem('babyInfo'));
  //   var $babyName = $body.find('.baby-name');
  //   var $babyAge = $body.find('.baby-age');
  //   var birthDate = babyInfo.birth;
  //   var ageText = '';
  //   var months = {
  //     'negative': 'jest jeszcze w brzuszku ;)',
  //     'one': 'miesiąc',
  //     'two': 'miesiące',
  //     'five': 'miesięcy',
  //     'years': 'ponad 2 latka'
  //   }
  //
  //   function currentDate() {
  //     var d = new Date();
  //     var month = d.getMonth()+1;
  //     var day = d.getDate();
  //     return d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;
  //   }
  //
  //   function getPeriod() {
  //     //tablice z rozdzielonych dat - rok miesiąc dzień
  //     var cDate = currentDate().split('-');
  //     var bDate = birthDate.split('-');
  //     //przekształcenie tablic w obiekt Date
  //     cDate = new Date(cDate[0], cDate[1], cDate[2]);
  //     bDate = new Date(bDate[0], bDate[1], bDate[2]);
  //     // getTime() daje czas w milisekundach, /1000 przekształca ms na sekundy
  //     cDateSec = parseInt(cDate.getTime() / 1000);
  //     bDateSec = parseInt(bDate.getTime() / 1000);
  //     // różnica czasu w sekundach/minutach/godzinach/dniach/miesiącach (w przybliżeniu)
  //     var numOfMonths = Math.floor((cDateSec - bDateSec) / 60 / 60 / 24 / 30);
  //     return numOfMonths;
  //   }
  //
  //   if (getPeriod() === 1) {
  //     ageText = getPeriod().toString() + ' ' + months.one;
  //   } else if (getPeriod() > 1 && getPeriod() <= 4 || getPeriod() > 21 && getPeriod() <= 24) {
  //     ageText = getPeriod().toString() + ' ' + months.two;
  //   } else if (getPeriod() === 0 || getPeriod() > 4 && getPeriod() <= 21) {
  //     ageText = getPeriod().toString() + ' ' + months.five;
  //   } else if (getPeriod() < 0) {
  //     ageText = months.negative;
  //   } else {
  //     ageText = months.years;
  //   }
  //   $babyName.text(babyInfo.name);
  //   $babyAge.text(ageText);
  // }
  // function checkIfLocalStorageExists() {
  //   if (localStorage.length) {
  //     localStorageHandling();
  //   }
  // }
  //
  // checkIfLocalStorageExists();

  //mobile-menu
  function mobileMenuHendling() {
    var $hamMenuBtn = $('.ham-menu');
    var $mobileMenu = $('.mobile-menu');
    if (matchMedia) {
      var mqTab = window.matchMedia("(min-width: 960px)");
      mqTab.addListener(WidthChange);
      WidthChange(mqTab);
    }

    function WidthChange(mqTab) {
      if (mqTab.matches) {
        $mobileMenu.css({'display': 'none'});
        $hamMenuBtn.removeClass('ham-close-icon').addClass('ham-icon');
      }
    }

    $hamMenuBtn.on('click', function() {
      if ($mobileMenu.css('display') !== 'none') {
        $mobileMenu.css({'display': 'none'});
        $(this).removeClass('ham-close-icon').addClass('ham-icon');
      } else {
        $mobileMenu.css({'display': 'block'});
        $(this).removeClass('ham-icon').addClass('ham-close-icon');
      }
    })
  }
  mobileMenuHendling();
  //mobile-menu end

  function deviceSize() {
    var tileImgPosVal;
    if (matchMedia) {
      var mqPhone = window.matchMedia("(min-width: 640px)");
      mqPhone.addListener(WidthChange);
      WidthChange(mqPhone);
    }

    function WidthChange(mqPhone) {
      //składam formsy po wykryciu odpowiedniej wielkości ekranu,
      //bo ikony nie chcą się ładnie przestawiać
      hideForms();
      if (mqPhone.matches) {
        tileImgPosVal = tileImgPos.desktop;
      } else {
        tileImgPosVal = tileImgPos.phone;
      }
    }
    return tileImgPosVal;
  }

  function showFeedForm() {
    $optionBtns.eq(0).on('click', function(e) {
      e.preventDefault();

      hideForms();
      if($formPanels.eq(0).css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $formPanels.eq(0).slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("./img/feed-w.png") ' + deviceSize(),
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $formPanels.eq(0).slideDown('slow');
      }
    })
  }
  showFeedForm();

  function showWeightForm() {
    $optionBtns.eq(1).on('click', function(e) {
      e.preventDefault();
      hideForms();

      if($formPanels.eq(1).css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $formPanels.eq(1).slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("./img/weight-w.png") ' + deviceSize(),
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $formPanels.eq(1).slideDown('slow');
      }
    })
  }
  showWeightForm();

  function showDiaperForm() {
    $optionBtns.eq(2).on('click', function(e) {
      e.preventDefault();

      hideForms();
      if($formPanels.eq(2).css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $formPanels.eq(2).slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("./img/diaper-w.png") ' + deviceSize(),
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $formPanels.eq(2).slideDown('slow');
      }
    })
  }
  showDiaperForm();

  function showBathForm() {
    $optionBtns.eq(3).on('click', function(e) {
      e.preventDefault();

      hideForms();
      if($formPanels.eq(3).css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $formPanels.eq(3).slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("./img/bath-w.png") ' + deviceSize(),
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $formPanels.eq(3).slideDown('slow');
      }
    })
  }
  showBathForm();

  function showDoctorForm() {
    $optionBtns.eq(4).on('click', function(e) {
      e.preventDefault();

      hideForms();
      if($formPanels.eq(4).css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $formPanels.eq(4).slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("./img/doctor-w.png") ' + deviceSize(),
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $formPanels.eq(4).slideDown('slow');
      }
    })
  }
  showDoctorForm();

  function showDiaryForm() {
    $optionBtns.eq(5).on('click', function(e) {
      e.preventDefault();

      hideForms();
      if($formPanels.eq(5).css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $formPanels.eq(5).slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("./img/diary-w.png") ' + deviceSize(),
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $formPanels.eq(5).slideDown('slow');
      }
    })
  }
  showDiaryForm();
  //forms end

  //obsługa fake radiobuttonów
  function breastRadioTextHider() {
    //Ta funkcja musi być przed breast radio checkerem
    //inaczej nie chce hasać!!!
    var rb1 = document.querySelector('#breast-chk1');
    var rb2 = document.querySelector('#breast-chk2');
    var rbTexts = document.querySelectorAll('.breast-rbcl-text');

    rb1.addEventListener('click', function() {
      rbTexts[0].classList.add('rbcl-text-hide');
      rbTexts[1].classList.remove('rbcl-text-hide');
    })
    rb2.addEventListener('click', function() {
      rbTexts[0].classList.remove('rbcl-text-hide');
      rbTexts[1].classList.add('rbcl-text-hide');
    })
  }

  breastRadioTextHider();

  function breastRadioChecker() {
    var breastRadios = document.querySelectorAll('.breast-rb');
    var selected;

    for(var i = 0; i < breastRadios.length; i++) {
      breastRadios[i].onclick = function() {

        if(selected == this) {
          this.checked = false;
          this.parentNode.lastElementChild.classList.remove('rbcl-text-hide')
          selected = null;
        } else {
          this.parentNode.lastElementChild.classList.add('rbcl-text-hide')
          selected = this;
        }
      };
    }
  }

  breastRadioChecker();

  function pooRadioTextHider() {
    //Ta funkcja musi być przed poo radio checkerem
    //inaczej nie chce hasać!!!
    var rb1 = document.querySelector('#poo-chk1');
    var rb2 = document.querySelector('#poo-chk2');
    var rb3 = document.querySelector('#poo-chk3');
    var rbTexts = document.querySelectorAll('.poo-rbcl-text');

    rb1.addEventListener('click', function() {
      rbTexts[0].classList.add('rbcl-text-hide');
      rbTexts[1].classList.remove('rbcl-text-hide');
      rbTexts[2].classList.remove('rbcl-text-hide');
    })
    rb2.addEventListener('click', function() {
      rbTexts[0].classList.remove('rbcl-text-hide');
      rbTexts[1].classList.add('rbcl-text-hide');
      rbTexts[2].classList.remove('rbcl-text-hide');
    })
    rb3.addEventListener('click', function() {
      rbTexts[0].classList.remove('rbcl-text-hide');
      rbTexts[1].classList.remove('rbcl-text-hide');
      rbTexts[2].classList.add('rbcl-text-hide');
    })
  }

  pooRadioTextHider();

  function pooRadioChecker() {
    var pooRadios = document.querySelectorAll('.poo-rb');
    var selected;

    for(var i = 0; i < pooRadios.length; i++) {
      pooRadios[i].onclick = function() {

        if(selected == this) {
          this.checked = false;
          this.parentNode.lastElementChild.classList.remove('rbcl-text-hide')
          selected = null;
        } else {
          this.parentNode.lastElementChild.classList.add('rbcl-text-hide')
          selected = this;
        }
      };
    }
  }

  pooRadioChecker();
  //obsługa fake radiobuttonów end

  /* walidacja feedForm*/
  function feedValidator() {
    //zrobić walidację
  }
  /* walidacja feedForm*/

  /* walidacja weightForm*/
  function weightValidator() {
    var $form = $body.find('.weight-form');
    var $date = $form.find('.weight-date');
    var $grams = $form.find('.grams');
    var date;
    var grams;
    var errorDiv;

    function dateValid() {
      var valid = false;
      clearErrors();
      date = $date.val();
      errorDiv = $('<div>').addClass('error-comment neg-t-margin');

      if(!date) {
        $date.addClass('border-error');
        errorDiv.text(errorText.req);
        $('.weight-start').after(errorDiv);
      } else {
        $date.removeClass('border-error');
        valid = true;
      }
      return valid;
    }

    function gramsValid() {
      var valid = false
      clearErrors();
      grams = $grams.val();
      errorDiv = $('<div>').addClass('error-comment neg-t-margin');

      if(!grams) {
        $grams.addClass('border-error');
        errorDiv.text(errorText.req);
        $('.weight-g').after(errorDiv);
      } else if (grams < 0) {
        $grams.addClass('border-error');
        errorDiv.text(errorText.negNum);
        $('.weight-g').after(errorDiv);
      } else if (grams > 99999) {
        $grams.addClass('border-error');
        errorDiv.text(errorText.toBigNum);
        $('.weight-g').after(errorDiv);
      } else {
        $grams.removeClass('border-error');
        valid = true;
      }
      return valid;
    }

    $form.on('submit', function(e) {
      e.preventDefault();
      if (dateValid() && gramsValid()) {
        hideForms();
        clearForms();

        //tu się powinno wyskoczyć okienko z zadowoloną buzią na chwilę
        //formularz powinien się zapisać do bazy
      }
    })
  }

  weightValidator();
  /* walidacja weightForm*/

  /* walidacja diaperForm*/
  function diaperValidator() {
    //zrobić walidację
  }
  /* walidacja diaperForm*/

  /* walidacja bathForm*/
  function bathValidator() {
    var $form = $body.find('.bath-form');
    var $date = $form.find('.bath-date');
    var $comment = $form.find('.bath-comment');
    var date;
    var comment;
    var errorDiv;

    function dateValid() {
      var valid = false;
      clearErrors();
      date = $date.val();
      errorDiv = $('<div>').addClass('error-comment neg-t-margin');

      if(!date) {
        $date.addClass('border-error');
        errorDiv.text(errorText.req);
        $('.bath-start').after(errorDiv);
      } else {
        $date.removeClass('border-error');
        valid = true;
      }
      return valid;
    }

    function commentValid() {
      var valid = false
      clearErrors();
      comment = $comment.val();
      errorDiv = $('<div>').addClass('error-comment neg-t-margin last-form-item');

      if(comment.length > 500) {
        $comment.addClass('border-error');
        errorDiv.text(errorText.longComment);
        $('.commentbox').after(errorDiv);
      } else {
        $comment.removeClass('border-error');
        valid = true;
      }
      return valid;
    }

    $form.on('submit', function(e) {
      e.preventDefault();
      if (dateValid() && commentValid()) {
        hideForms();
        clearForms();

        //tu się powinno wyskoczyć okienko z zadowoloną buzią na chwilę
        //formularz powinien się zapisać do bazy
      }
    })
  }

  bathValidator();
  /* walidacja bathForm*/

  /* walidacja doctorForm*/
  function doctorValidator() {
    var $form = $body.find('.doctor-form');
    var $date = $form.find('.doctor-date');
    var $time = $form.find('.doctor-time');
    var $name = $form.find('.doctor-name');
    var $location = $form.find('.doctor-location');
    var $comment = $form.find('.doctor-comment');
    var date;
    var time;
    var name;
    var location;
    var comment;
    var errorDiv;

    function dateValid() {
      var valid = false;
      clearErrors();
      date = $date.val();
      errorDiv = $('<div>').addClass('error-comment neg-t-margin');

      if(!date) {
        $date.addClass('border-error');
        errorDiv.text(errorText.req);
        $('.doctor-start').after(errorDiv);
      } else {
        $date.removeClass('border-error');
        valid = true;
      }
      return valid;
    }

    function timeValid() {
      var valid = false;
      clearErrors();
      time = $time.val();
      errorDiv = $('<div>').addClass('error-comment max-l-margin');

      if(!time) {
        $time.addClass('border-error');
        errorDiv.text(errorText.req);
        $('.doctor-start').after(errorDiv);
      } else {
        $time.removeClass('border-error');
        valid = true;
      }
      return valid;
    }

    function nameValid() {
      var valid = false;
      clearErrors();
      name = $name.val();
      errorDiv = $('<div>').addClass('error-comment neg-t-margin');

      if(!name) {
        $name.addClass('border-error');
        errorDiv.text(errorText.req);
        $('.doctor-who').after(errorDiv);
      } else if (name.length > 50) {
        $name.addClass('border-error');
        errorDiv.text(errorText.longText);
        $('.doctor-who').after(errorDiv);
      } else {
        $name.removeClass('border-error');
        valid = true;
      }
      return valid;
    }

    function locationValid() {
      var valid = false;
      clearErrors();
      location = $location.val();
      errorDiv = $('<div>').addClass('error-comment neg-t-margin');

      if (location.length > 50) {
        $location.addClass('border-error');
        errorDiv.text(errorText.longText);
        $('.doctor-where').after(errorDiv);
      } else {
        $location.removeClass('border-error');
        valid = true;
      }
      return valid;
    }

    function commentValid() {
      var valid = false
      clearErrors();
      comment = $comment.val();
      errorDiv = $('<div>').addClass('error-comment neg-t-margin last-form-item');

      if(comment.length > 500) {
        $comment.addClass('border-error');
        errorDiv.text(errorText.longComment);
        $('.commentbox').after(errorDiv);
      } else {
        $comment.removeClass('border-error');
        valid = true;
      }
      return valid;
    }

    $form.on('submit', function(e) {
      e.preventDefault();
      if (dateValid() && timeValid() && nameValid() && locationValid() && commentValid()) {
        hideForms();
        clearForms();

        //tu się powinno wyskoczyć okienko z zadowoloną buzią na chwilę
        //formularz powinien się zapisać do bazy
      }
    })
  }

  doctorValidator();
  /* walidacja doctorForm*/

  /* walidacja diaryForm*/
  function diaryValidator() {
    var $form = $body.find('.diary-form');
    var $date = $form.find('.diary-date');
    var $comment = $form.find('.diary-comment');
    var $photo = $form.find('.diary-photo');
    var $video = $form.find('.diary-video');
    var date;
    var comment;
    var errorDiv;

    function dateValid() {
      var valid = false;
      clearErrors();
      date = $date.val();
      errorDiv = $('<div>').addClass('error-comment neg-t-margin');

      if(!date) {
        $date.addClass('border-error');
        errorDiv.text(errorText.req);
        $('.diary-start').after(errorDiv);
      } else {
        $date.removeClass('border-error');
        valid = true;
      }
      return valid;
    }

    function commentValid() {
      var valid = false
      clearErrors();
      comment = $comment.val();
      errorDiv = $('<div>').addClass('error-comment');

      if(!comment) {
        $comment.addClass('border-error');
        errorDiv.text(errorText.req);
        $('.commentbox').after(errorDiv);
      } else if (comment.length > 500) {
        $comment.addClass('border-error');
        errorDiv.text(errorText.longComment);
        $('.commentbox').after(errorDiv);
      } else {
        $comment.removeClass('border-error');
        valid = true;
      }
      return valid;
    }

    $photo.on('click', function(e) {
      e.preventDefault();
      errorDiv = $('<div>').addClass('error-comment not-available');
      errorDiv.text(errorText.notAvailable);
      $photo.after(errorDiv);
      setTimeout(function(){
        $('.not-available').remove();
      }, 1500);
    })

    $video.on('click', function(e) {
      e.preventDefault();
      errorDiv = $('<div>').addClass('error-comment not-available last-form-item');
      errorDiv.text(errorText.notAvailable);
      $video.css({marginBottom: '0px'}).after(errorDiv);
      setTimeout(function(){
        $video.css({marginBottom: '20px'})
        $('.not-available').remove();
      }, 1500);
    })

    $form.on('submit', function(e) {
      e.preventDefault();
      if (dateValid() && commentValid()) {
        hideForms();
        clearForms();

        //tu się powinno wyskoczyć okienko z zadowoloną buzią na chwilę
        //formularz powinien się zapisać do bazy
      }
    })

  }

  diaryValidator();
  /* walidacja diaryForm*/

  /* funkcje czyszczące i zamykające */
  function clearForms() {
    var $date = $body.find('input[type=date]');
    var $time = $body.find('input[type=time]');
    var $number = $body.find('input[type=number]');
    var $text = $body.find('input[type=text]');
    var $textAreas = $body.find('textarea');

    setTimeout(function(){
      clearErrors();
      $date.val('');
      $time.val('');
      $number.val('');
      $text.val('');
      $textAreas.val('');
    }, 1000);
  }

  function clearErrors() {
    $('.border-error').removeClass('border-error');
    $('.error-comment').remove();
  }

  function hideForms() {
    $optionBtns.each(function() {
      $(this).css(btnIconReset).parent().css(btnBgReset);
    });

    $formPanels.each(function() {
      $(this).slideUp('50');
    })

    clearErrors();
  }

  function cancelForm() {
    $cancelBtns.on('click', function() {
      hideForms();
    })
  }
  cancelForm();
  /* funkcje czyszczące i zamykające */


})
