$(function() {

  function weightInfo(weight) {
    var $body = $('body')
    var $listbox = $body.find('.listbox');
    var $rowOrient = '';
    var len = weight.length;
    var classes = {
      'negative': 'weight-red',
      'neutral': 'weight-neutral',
      'positive': 'weight-green'
    }

    for (var i = 0; i < len - 1; i++) {
      var temp = weight[i].grams - weight[i+1].grams;
      var classTemp;
      if (temp < 0) {
        classTemp = classes.negative;
      } else if (temp > 0) {
        temp = '+' + temp;
        classTemp = classes.positive;
      } else {
        classTemp = classes.neutral;
      }

      $rowOrient = $('<div class="row-orient"><div class="weight-datebox"><img class="calendar calendar-list" src="img/date-b.png" alt="calendar" /><span>' + weight[i].weightdate + '</span></div><div class="weight-infobox"><span>' + weight[i].grams + 'g</span></div><div class="weight-differencebox ' + classTemp + '"><span>(' + temp + 'g)</span></div></div>');
      $listbox.append($rowOrient);
    }

    $rowOrient = $('<div class="row-orient"><div class="weight-datebox"><img class="calendar calendar-list" src="img/date-b.png" alt="calendar" /><span>' + weight[len - 1].weightdate + '</span></div><div class="weight-infobox"><span>' + weight[len - 1].grams + 'g</span></div><div class="weight-differencebox classes.neutral"><span>(0g)</span></div></div>');
    $listbox.append($rowOrient);
  }

  function loadWeight() {
        $.ajax({
            	url: './dbWeight.php'
        }).done(function(response){
          var data = jQuery.parseJSON(response);
          weightInfo(data.Weight);
    	 }).fail(function(error) {
           console.log(error)
       })
  }

  loadWeight();

});
