$(function() {

  function feedInfo(feed) {
    var $body = $('body')
    var $listbox = $body.find('.listbox');
    var $listDate = '';
    var $rowOrient = '';
    var len = feed.length;
    var feedTitleArr = [];
    var feedArr = [[],[],[],[],[],[],[]];

    for (var i = 0; i < len; i++) {
      if (feed[i].startdate !== '') {
        feedTitleArr.push(feed[i].startdate);
        feedArr[0].push(feed[i].startdate);
        feedArr[1].push(feed[i].starttime);
        feedArr[2].push(feed[i].stopdate);
        feedArr[3].push(feed[i].stoptime);
        feedArr[4].push(feed[i].breast);
        feedArr[5].push(feed[i].milk);
        feedArr[6].push(feed[i].comment);
      }
    }

    feedTitleArr = feedTitleArr.filter (function (value, index, array) {
      return array.indexOf (value) == index;
    });

    for (var i = 0; i < feedTitleArr.length; i++) {
      var time = '';
      $listDate = $('<p class="list-date">' + feedTitleArr[i] + '</p>');
      $listbox.append($listDate);
      for (var j = 0; j <= feedArr[i].length; j++) {
        if (feedArr[3][j] !== '') {
          var diff = ( new Date("1970-1-1 " + feedArr[3][j]) - new Date("1970-1-1 " + feedArr[1][j]) ) / 1000 / 60;
          if (diff < 0) {
            time = '';
          } else if (diff === 0 || diff > 4 && diff < 22 || diff > 24 && diff < 32 || diff > 34 && diff < 42 || diff > 44 && diff < 52 || diff > 54 && diff < 60) {
            time = diff + ' minut';
          } else if (diff === 1) {
            time = diff + ' minuta';
          } else if (diff > 1 && diff < 5 || diff > 21 && diff < 25 || diff > 31 && diff < 35 || diff > 41 && diff < 45 || diff > 51 && diff < 55) {
            time = diff + ' minuty';
          } else if (diff >= 60) {
            time = 'ponad godzinę';
          }
        } else {
          time = '';
        }
        if (feedArr[0][j] === feedTitleArr[i]) {
          var breast;
          var milk;
          var commentInSpan;
          if (feedArr[4][j] !== null) {
            breast = '<div class="feed-breast-icon">' + feedArr[4][j] + '</div>';
          } else {
            breast = '';
          }
          if (feedArr[5][j] !== '') {
            milk = '<span>' + feedArr[5][j] + 'ml</span>';
          } else {
            milk = '';
          }
          if (feedArr[6][j] !== '') {
            commentInSpan = '<div class="feed-commentbox"><span>' + feedArr[6][j] + '</span></div>';
          } else {
            commentInSpan = '<div class="feed-commentbox"></div>';
          }

          $rowOrient = $('<div class="list-table"><div class="list-row"><div class="feed-hourbox"><img class="clock clock-list" src="img/time-b.png" alt="clock" /><span>' + feedArr[1][j] + '</span></div><div class="feed-timebox"><span>' + time + '</span></div><div class="feed-breastbox">' + breast + '</div><div class="feed-bottlebox">' + milk + '</div></div>' + commentInSpan + '</div>');
          $listbox.append($rowOrient);
        }
      }
    }
  }

  function loadFeed() {
        $.ajax({
            	url: './dbFeed.php'
        }).done(function(response){
          var data = jQuery.parseJSON(response);
          feedInfo(data.Feed);
    	 }).fail(function(error) {
           console.log(error)
       })
  }

  loadFeed();

});
