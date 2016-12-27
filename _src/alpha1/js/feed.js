$(document).ready(function() {

  var request;
  var db;
  var myArr = [];
  var whatType = 'feed';//"weight";
  var $show = $('.show');

  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

  // sprawdzenie czy przeglądarka obsługuje bazę indexedDB
  if (!window.indexedDB) {
    console.log('Your browser does not support IndexedDB');
  } else {
    request = window.indexedDB.open('babyTest', 1);
    request.onerror = function(event) {
      console.log('Error opening DB', event);
    }
    request.onsuccess = function(event) {
      console.log('Success opening DB');
      db = event.target.result;
      loadData();
    }

    function loadData() {
      var objectStore = db.transaction("babyData").objectStore("babyData");

      objectStore.openCursor().onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {
          if(cursor.value.type === whatType) {
            console.log('wpyte');
            myArr.push(cursor.value);
          }
          cursor.continue();
        } else {
          console.log('nototyle');
          var viewArr = [];

          for (var i = 0; i < myArr.length; i++) {
            
          }
          // for (var i = 0; i < myArr.length; i++) {
          //   $show.prepend('<tr><td>' + myArr[i].date + ' | </td><td>' + myArr[i].feedStartTime + ' | </td><td>' + myArr[i].feedStopDate + ' | </td><td>' + myArr[i].feedStopTime + ' | </td><td>' + myArr[i].feedMilliliters + ' | </td><td>' + myArr[i].feedComments + ' | </td></tr>');
          //
          // }

        }

      };


    }

  }


  // setTimeout(function() {
  //   console.log(myArr);
  // }, 500);



})
