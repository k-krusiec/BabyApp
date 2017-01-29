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
