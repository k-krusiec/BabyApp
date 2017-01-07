document.addEventListener('DOMContentLoaded', function() {

  // czyszczę localStorage na wjazd, żeby nie było śmieci
  function clearLocalStorage() {
    localStorage.clear();
  }

  function setBirthDate() {
    var date = document.querySelector('.birthDate');
    date.valueAsDate = new Date();
  }

  function saveBabyData() {
    //formularz wysyłany linkiem, ze względu na brak backendu
    // var form = document.querySelector('.startForm');
    var fakeSubmit = document.querySelector('.startFormBtn');
    var inputs = document.querySelectorAll('input');
    var logValidBoxes = document.querySelectorAll('.log-validation-box');
    var babyName = inputs[0];
    var babyBirth = inputs[1];
    var regex = /\d/;

    function validator() {
      for (var i = 0; i < logValidBoxes.length; i++) {
        inputs[i].style.borderBottom = '';
        logValidBoxes[i].textContent = '';
      }

      if (babyName.value.length === 0) {
        babyName.style.borderBottom = '2px solid red';
        logValidBoxes[0].style.display = 'block';
        logValidBoxes[0].textContent = 'Uzupełnij to pole';
      } else if (babyName.value.match(regex)) {
        babyName.style.borderBottom = '2px solid red';
        logValidBoxes[0].style.display = 'block';
        logValidBoxes[0].textContent = 'To pole musi zawierać tylko litery';
      } else if (babyBirth.value.length === 0) {
        babyBirth.style.borderBottom = '2px solid red';
        logValidBoxes[1].style.display = 'block';
        logValidBoxes[1].textContent = 'Uzupełnij to pole';
      } else {
        return true;
      }
    }

    babyName.addEventListener('focusout', validator);
    babyBirth.addEventListener('focusout', validator);

    fakeSubmit.addEventListener('click', function(e) {
      e.preventDefault();
      if (validator()) {
        var babyInfo = {
          'name': babyName.value.charAt(0).toUpperCase() + babyName.value.slice(1).toLowerCase(),
          'birth': babyBirth.value
        }
        localStorage.setItem('myStorage', JSON.stringify(babyInfo));
        location.href = "../homePage.html";
      }
    })
  }

  clearLocalStorage();
  setBirthDate();
  saveBabyData();

})
