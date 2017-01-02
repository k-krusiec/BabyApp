$(document).ready(function() {

  function showFeedForm() {
    var $feedBtn = $('.feed-btn');
    var $feedForm = $('.feed-form');
    $feedBtn.on('click', function(e) {
      e.preventDefault();

      if($feedForm.css('display') === "none") {
        $(this).css({
          'background': 'url("../img/feed-w.png") no-repeat 25px center transparent',
          'background-size': '50px',
          'color': 'white'
        }).parent().css({
          'background': '#ff8965'
        });
      } else {
        $(this).css({
          'background': '',
          'background-size': '',
          'color': ''
        }).parent().css({
          'background': ''
        });
      }

      $feedForm.slideToggle('slow');
    })
  }
  showFeedForm();

})
