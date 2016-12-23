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


    $('.feedForm').submit(function(e){
      e.preventDefault();

        var startDate = $('[name="date"]').val();
        var startTime = $('[name="time"]').val();
        var firstName = $('[name="firstName"]').val();
        var lastName = $('[name="lastName"]').val();
        var type = this.dataset.type;

        var transaction = db.transaction(['babyData'],'readwrite');
        transaction.oncomplete = function(event) {
            console.log('Success :)');
        };

        transaction.onerror = function(event) {
            console.log('Error :(');
        };
        var objectStore = transaction.objectStore('babyData');
        if (firstName.length != 0) {
          objectStore.add({
            type: type,
            startDate: startDate,
            startTime: startTime,
            firstName: firstName,
            lastName: lastName
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
