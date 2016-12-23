$(document).ready(function() {

  //indexedDB.deleteDatabase('babyTest');

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


    $('.feedForm').submit(function(e) {
      e.preventDefault();

        //przerobić na bardziej feng shui
        var type = this.dataset.type;
        var feedStartDate = $('[name="feedStartDate"]').val();
        var feedStartTime = $('[name="feedStartTime"]').val();
        var feedStopDate = $('[name="feedStopDate"]').val();
        var feedStopTime = $('[name="feedStopTime"]').val();
        var feedMilliliters = $('[name="feedMilliliters"]').val();
        var feedComments = $('[name="feedComments"]').val();
        
        var transaction = db.transaction(["babyData"],'readwrite');

        transaction.oncomplete = function(event) {
            console.log('Success :)');
        };

        transaction.onerror = function(event) {
            console.log('Error :(');
        };
        var objectStore = transaction.objectStore('babyData');
        if (feedStartDate.length != 0) {
          objectStore.add({
            type: type,
            date: feedStartDate, //feedStartDate jest w tym przypadku date
            feedStartTime: feedStartTime,
            feedStopDate: feedStopDate,
            feedStopTime: feedStopTime,
            feedMilliliters: feedMilliliters,
            feedComments: feedComments
          });
          alert('Zapisano');
        } else {
          alert('Błąd! Dane nie zostały zapisane');
        }
    });

    $('.weightForm').submit(function(e) {
      e.preventDefault();

        //przerobić na bardziej feng shui
        var type = this.dataset.type;
        var weightDate = $('[name="weightDate"]').val();
        var weightSize = $('[name="weightSize"]').val();

        var transaction = db.transaction(["babyData"],'readwrite');

        transaction.oncomplete = function(event) {
            console.log('Success :)');
        };

        transaction.onerror = function(event) {
            console.log('Error :(');
        };
        var objectStore = transaction.objectStore('babyData');
        if (weightDate.length != 0) {
          objectStore.add({
            type: type,
            date: weightDate,
            weightSize: weightSize,
          });
          alert('Zapisano');
        } else {
          alert('Błąd! Dane nie zostały zapisane');
        }
    });


    //czyszczenie bazy danych
    $('[name="deleteDb"]').click(function(e) {
      e.preventDefault();
      indexedDB.deleteDatabase('babyTest');
    })


  }

})
