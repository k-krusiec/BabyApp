$(document).ready(function() {

  var request;
  var db;

  window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

  // sprawdzenie czy przeglądarka obsługuje bazę indexedDB
  if (!window.indexedDB) {
    console.log('Your browser does not support IndexedDB');
  } else {
    /*żądane otwarcia bazy

      parametry:
      babyApp - nazwa bazy danych
      1 - wersja bazy danych
    */
    request = window.indexedDB.open('babyTest', 1);

    /*
      onupgradeneeded - jest odpalane zawsze, przy pierwszym odpaleniu na przeglądarce klienta,
      lub przy podniesieniu wersji bazy
    */
    request.onerror = function(event) {
      console.log('Error opening DB', event);
    }
    request.onupgradeneeded = function(event) {
      console.log('Upgrading');
      db = event.target.result;
      //Próba autoincrementacji klucza id w bazie danych
      var objectStore = db.createObjectStore('babyData', {keyPath: 'id', autoIncrement: true});
    };
    request.onsuccess = function(event) {
      console.log('Success opening DB');
      db = event.target.result;
    }

    $("#getBtn").click(function(e){
      e.preventDefault();

      var objectStore = db.transaction("babyData").objectStore("babyData");


      objectStore.openCursor().onsuccess = function(event) {
          var cursor = event.target.result;
          //console.log(cursor);

          if (cursor.value.time === "00:01") {
                console.log('wpyte');
                cursor.continue();
          } else {
            console.log('nototyle');
          }

          // if (cursor) {
          //       console.log("Name for id " + cursor.key + " is " + cursor.value.time);
          //       cursor.continue();
          // }
          // else {
          //       alert("No more entries!");
          // }
        };


    });
  }

})
