document.addEventListener('DOMContentLoaded', function() {


  var obj = {"nissan": "sentra", "color": "green"};

  var button = document.querySelector('.sendVarData');
  var button2 = document.querySelector('.sendAnotherValue');
  var button3 = document.querySelector('.clear');

  button.addEventListener('click', function() {

    console.log('ready');
    localStorage.setItem('myStorage', JSON.stringify(obj));

  })



  button2.addEventListener('click', function() {

    var obj = JSON.parse(localStorage.getItem('myStorage'));
    console.log(obj);
    obj['kupa'] = "dupa";
    console.log(obj);

    localStorage.setItem('myStorage', JSON.stringify(obj));


  })

  button3.addEventListener('click', function() {
    localStorage.clear();
    //window.localStorage.removeItem("item_name");
  })



})
