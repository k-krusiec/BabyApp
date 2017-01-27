$(function() {

  function diaperInfo(diaper) {
    var $body = $('body')
    var $listbox = $body.find('.listbox');
    var $listDate = '';
    var $rowOrient = '';
    var len = diaper.length;
    var diaperTitleArr = [];
    var diaperArr = [[],[],[]];

    for (var i = 0; i < diaper.length; i++) {
      if (diaper[i].diaperdate !== '') {
        diaperTitleArr.push(diaper[i].diaperdate);
        diaperArr[0].push(diaper[i].diaperdate);
        diaperArr[1].push(diaper[i].diapertime);
        diaperArr[2].push(diaper[i].poosize);
      }
    }

    diaperTitleArr = diaperTitleArr.filter (function (value, index, array) {
      return array.indexOf (value) == index;
    });

    for (var i = 0; i < diaperTitleArr.length; i++) {
      $listDate = $('<p class="list-date">' + diaperTitleArr[i] + '</p>');
      $listbox.append($listDate);
      for (var j = 0; j <= diaperArr[i].length; j++) {
        if (diaperArr[0][j] === diaperTitleArr[i]) {
          var wasPoo = '';
          if (diaperArr[2][j] !== null) {
            wasPoo = '<span>+ </span><div class="diaper-poo-icon">' + diaperArr[2][j] + '</div>';
          } else {
            wasPoo = '';
          }

          $rowOrient = $('<div class="list-table"><div class="list-row"><div class="diaper-hourbox"><img class="clock clock-list" src="img/time-b.png" alt="clock" /><span>' + diaperArr[1][j] + '</span></div><div class="diaper-peebox"><span>Siusiu</span></div><div class="diaper-poobox">' + wasPoo + '</div></div></div>');
          $listDate.after($rowOrient);
        }
      }
    }
  }

  function loadDiaper() {
        $.ajax({
            	url: './dbDiaper.php'
        }).done(function(response){
          var data = jQuery.parseJSON(response);
          diaperInfo(data.Diaper);
    	 }).fail(function(error) {
           console.log(error)
       })
  }

  loadDiaper();

});
