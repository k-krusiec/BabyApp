document.addEventListener('DOMContentLoaded', function() {

  var obj = JSON.parse(localStorage.getItem('myStorage'));
  var h1 = document.querySelector('h1').textContent = obj.kupa;
  console.log(obj.nissan);
  //h1.innerHTML(obj.nissan);

})
