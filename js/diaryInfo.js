$(function() {

  function diaryInfo(diary) {
    var $body = $('body')
    var $listbox = $body.find('.listbox');
    var $rowOrient = '';
    var len = diary.length;

    for (var i = 0; i < len; i++) {
      $rowOrient = $('<div class="row-orient diary-row"><div class="diary-infobox"><div class="diary-datebox"><img class="calendar calendar-list" src="img/date-b.png" alt="calendar" /><span>' + diary[i].diarydate + '</span></div><div class="diary-photobox"><img src="http://placehold.it/150x100"></div></div><div class="diary-text">' + diary[i].comment + '</div></div>');
      $listbox.append($rowOrient);
    }
  }

  function loadDiary() {
        $.ajax({
            	url: '../dbDiary.php'
        }).done(function(response){
          var data = jQuery.parseJSON(response);
          diaryInfo(data.Diary);
    	 }).fail(function(error) {
           console.log(error)
       })
  }

  loadDiary();

});
