$(document).ready(function() {
  var $feedBtn = $('.feed-btn');
  var $feedForm = $('.feed-formbox');

  var $weightBtn = $('.weight-btn');
  var $weightForm = $('.weight-formbox');

  function hideForms() {
    if (($feedForm.css('display') !== 'none') || ($weightForm.css('display') !== 'none')) {
      $feedBtn.css({
        'background': '',
        'background-size': '',
        'color': ''
      }).parent().css({
        'background': ''
      });

      $weightBtn.css({
        'background': '',
        'background-size': '',
        'color': ''
      }).parent().css({
        'background': ''
      });

      $feedForm.slideUp('50');
      $weightForm.slideUp('50');
    }
  }

  function showFeedForm() {
    $feedBtn.on('click', function(e) {
      e.preventDefault();

      hideForms();
      if($feedForm.css('display') !== 'none') {
        $(this).css({
          'background': '',
          'background-size': '',
          'color': ''
        }).parent().css({
          'background': ''
        });
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


      //$feedForm.addClass('animate');
    })
  }
  showFeedForm();

  function showWeightForm() {
    $weightBtn.on('click', function(e) {
      e.preventDefault();
      hideForms();

      if($weightForm.css('display') !== 'none') {
        $(this).css({
          'background': '',
          'background-size': '',
          'color': ''
        }).parent().css({
          'background': ''
        });
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


      //$weightForm.addClass('animate');
    })
  }
  showWeightForm();

})
