$(document).ready(function() {
  //forms
  var $feedBtn = $('.feed-btn');
  var $feedForm = $('.feed-formbox');

  var $weightBtn = $('.weight-btn');
  var $weightForm = $('.weight-formbox');

  var $diaperBtn = $('.diaper-btn');
  var $diaperForm = $('.diaper-formbox');

  var $bathBtn = $('.bath-btn');
  var $bathForm = $('.bath-formbox');

  var $doctorBtn = $('.doctor-btn');
  var $doctorForm = $('.doctor-formbox');

  var $diaryBtn = $('.diary-btn');
  var $diaryForm = $('.diary-formbox');

  var btnIconReset = {
    'background': '',
    'background-size': '',
    'color': ''
  };
  var btnBgReset = {
    'background': ''
  };

  function hideForms() {
    if (($feedForm.css('display') !== 'none') || ($weightForm.css('display') !== 'none') ||
        ($diaperForm.css('display') !== 'none') || ($bathForm.css('display') !== 'none') ||
        ($doctorForm.css('display') !== 'none') || ($diaryForm.css('display') !== 'none')) {

      $feedBtn.css(btnIconReset).parent().css(btnBgReset);
      $weightBtn.css(btnIconReset).parent().css(btnBgReset);
      $diaperBtn.css(btnIconReset).parent().css(btnBgReset);
      $bathBtn.css(btnIconReset).parent().css(btnBgReset);
      $doctorBtn.css(btnIconReset).parent().css(btnBgReset);
      $diaryBtn.css(btnIconReset).parent().css(btnBgReset);

      $feedForm.slideUp('50');
      $weightForm.slideUp('50');
      $diaperForm.slideUp('50');
      $bathForm.slideUp('50');
      $doctorForm.slideUp('50');
      $diaryForm.slideUp('50');
    }
  }

  function showFeedForm() {
    $feedBtn.on('click', function(e) {
      e.preventDefault();

      hideForms();
      if($feedForm.css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $feedForm.slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("../img/feed-w.png") no-repeat 25px center transparent',
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $feedForm.slideDown('slow');
      }
    })
  }
  showFeedForm();

  function showWeightForm() {
    $weightBtn.on('click', function(e) {
      e.preventDefault();
      hideForms();

      if($weightForm.css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $weightForm.slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("../img/weight-w.png") no-repeat 25px center transparent',
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $weightForm.slideDown('slow');
      }
    })
  }
  showWeightForm();

  function showDiaperForm() {
    $diaperBtn.on('click', function(e) {
      e.preventDefault();

      hideForms();
      if($diaperForm.css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $diaperForm.slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("../img/diaper-w.png") no-repeat 25px center transparent',
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $diaperForm.slideDown('slow');
      }
    })
  }
  showDiaperForm();

  function showBathForm() {
    $bathBtn.on('click', function(e) {
      e.preventDefault();

      hideForms();
      if($bathForm.css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $bathForm.slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("../img/bath-w.png") no-repeat 25px center transparent',
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $bathForm.slideDown('slow');
      }
    })
  }
  showBathForm();

  function showDoctorForm() {
    $doctorBtn.on('click', function(e) {
      e.preventDefault();

      hideForms();
      if($doctorForm.css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $doctorForm.slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("../img/doctor-w.png") no-repeat 25px center transparent',
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $doctorForm.slideDown('slow');
      }
    })
  }
  showDoctorForm();

  function showDiaryForm() {
    $diaryBtn.on('click', function(e) {
      e.preventDefault();

      hideForms();
      if($diaryForm.css('display') !== 'none') {
        $(this).css(btnIconReset).parent().css(btnBgReset);
        $diaryForm.slideUp('slow');
      } else {
        $(this).css({
          'background': 'url("../img/diary-w.png") no-repeat 25px center transparent',
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
        $diaryForm.slideDown('slow');
      }
    })
  }
  showDiaryForm();
  //forms end

  //mobile-menu
  function mobileMenuHendling() {
    var $hamMenuBtn = $('.ham-menu');
    var $mobileMenu = $('.mobile-menu');
    if (matchMedia) {
      var mq = window.matchMedia("(min-width: 960px)");
      mq.addListener(WidthChange);
      WidthChange(mq);
    }

    function WidthChange(mq) {
      if (mq.matches) {
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

})
