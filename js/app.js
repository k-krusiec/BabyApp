$(document).ready(function() {

  var $body = $('body');
  var $optionBtns = $body.find('.option-btn');
  var $formPanels = $body.find('.formbox');
  var $breastRadios = $body.find('.breast-radio');
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
  var breastSide;
  var pooSize;

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

  function hideForms() {
    $optionBtns.each(function() {
      $(this).css(btnIconReset).parent().css(btnBgReset);
    });

    $formPanels.each(function() {
      $(this).slideUp('50');
    })
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
          'background': 'url("../img/feed-w.png") ' + deviceSize(),
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
          'background': 'url("../img/weight-w.png") ' + deviceSize(),
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
          'background': 'url("../img/diaper-w.png") ' + deviceSize(),
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
          'background': 'url("../img/bath-w.png") ' + deviceSize(),
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
          'background': 'url("../img/doctor-w.png") ' + deviceSize(),
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
          'background': 'url("../img/diary-w.png") ' + deviceSize(),
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
  function breastRadioChecker() {
    $breastRadios.on('click', function() {
      if(!($(this).hasClass('breast-checked'))) {
        $breastRadios.each(function() {
          $(this).removeClass('breast-checked');
        })
        $(this).addClass('breast-checked');
        breastSide = $(this).data('side');
      } else {
        $(this).removeClass('breast-checked');
        breastSide = '';
      }
    })
  }
  breastRadioChecker();

  function pooRadioChecker() {
    $pooRadios.on('click', function() {
      if(!($(this).hasClass('poo-checked'))) {
        $pooRadios.each(function() {
          $(this).removeClass('poo-checked');
        })
        $(this).addClass('poo-checked');
        pooSize = $(this).data('size');
      } else {
        $(this).removeClass('poo-checked');
        pooSize = '';
      }
    })
  }
  pooRadioChecker();
  //obsługa fake radiobuttonów end

  function cancelForm() {
    $cancelBtns.on('click', function() {
      hideForms();
    })
  }
  cancelForm();


})
