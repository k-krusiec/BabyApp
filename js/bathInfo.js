$(function() {

  function bathInfo(bath) {
    var $body = $('body')
    var $listbox = $body.find('.listbox');
    var $rowOrient = '';
    var len = bath.length;

    for (var i = 0; i < len; i++) {
      $rowOrient = $('<div class="row-orient"><div class="bath-datebox"><img class="calendar calendar-list" src="img/date-b.png" alt="calendar" /><span>' + bath[i].bathdate + '</span></div><div class="bath-commentbox"><span>' + bath[i].comment + '</span></div></div>');
      $listbox.append($rowOrient);
    }
  }

  function loadBath() {
        $.ajax({
            	url: '../dbBath.php'
        }).done(function(response){
          var data = jQuery.parseJSON(response);
          bathInfo(data.Bath);
    	 }).fail(function(error) {
           console.log(error)
       })
  }

  loadBath();

});
