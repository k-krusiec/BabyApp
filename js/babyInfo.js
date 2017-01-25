$(function() {

  function babyInfo(user) {
    var $body = $('body');
    var $babyName = $body.find('.baby-name');
    var $babyAge = $body.find('.baby-age');
    var ageText = '';
    var months = {
      'negative': 'jest jeszcze w brzuszku ;)',
      'one': 'miesiąc',
      'two': 'miesiące',
      'five': 'miesięcy',
      'years': 'ponad 2 latka'
    }
    if (user[0].name !== '') {
      $babyName.text(user[0].name);
    }

    if (user[0].birth !== '0000-00-00') {
      function currentDate() {
        var d = new Date();
        var month = d.getMonth()+1;
        var day = d.getDate();
        return d.getFullYear() + '-' + (month<10 ? '0' : '') + month + '-' + (day<10 ? '0' : '') + day;
      }

      function getPeriod() {
        //tablice z rozdzielonych dat - rok miesiąc dzień
        var cDate = currentDate().split('-');
        var bDate = user[0].birth.split('-');

        //przekształcenie tablic w obiekt Date
        cDate = new Date(cDate[0], cDate[1], cDate[2]);
        bDate = new Date(bDate[0], bDate[1], bDate[2]);
        // getTime() daje czas w milisekundach, /1000 przekształca ms na sekundy
        cDateSec = parseInt(cDate.getTime() / 1000);
        bDateSec = parseInt(bDate.getTime() / 1000);
        // różnica czasu w sekundach/minutach/godzinach/dniach/miesiącach (w przybliżeniu)
        var numOfMonths = Math.floor((cDateSec - bDateSec) / 60 / 60 / 24 / 30);
        return numOfMonths;
      }

      if (getPeriod() === 1) {
        ageText = getPeriod().toString() + ' ' + months.one;
      } else if (getPeriod() > 1 && getPeriod() <= 4 || getPeriod() > 21 && getPeriod() <= 24) {
        ageText = getPeriod().toString() + ' ' + months.two;
      } else if (getPeriod() === 0 || getPeriod() > 4 && getPeriod() <= 21) {
        ageText = getPeriod().toString() + ' ' + months.five;
      } else if (getPeriod() < 0) {
        ageText = months.negative;
      } else {
        ageText = months.years;
      }
      $babyAge.text(ageText);
    }
  }

  function loadData() {
        $.ajax({
            	url: './dbUser.php'
        }).done(function(response){
          var data = jQuery.parseJSON(response);
          babyInfo(data.User);
    	 }).fail(function(error) {
           console.log(error)
       })
  }

  loadData();

});
