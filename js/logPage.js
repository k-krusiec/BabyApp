document.addEventListener('DOMContentLoaded', function() {

  var form = document.querySelector('.startForm');
  var inputs = document.querySelectorAll('input');

  function setBirthDate() {
    inputs[1].valueAsDate = new Date();
  }

  setBirthDate();

})
