$(function() {

  function doctorInfo(doctor) {
    var $body = $('body')
    var $listbox = $body.find('.listbox');
    var $rowOrient = '';
    var len = doctor.length;

    for (var i = 0; i < len; i++) {
      var d = new Date();
      var today = (d.getFullYear() + ('0'+(d.getMonth()+1)).slice(-2) + ('0' + d.getDate()).slice(-2) + ('0' + d.getHours()).slice(-2) + ('0' + d.getMinutes()).slice(-2));
      var visitDate = doctor[i].doctordate.split('-').join('') + doctor[i].doctortime.split(':').join('');
      var delVisit = doctor[i].deleteVisit;
      var canceled;
      var calIcon;
      var clockIcon;
      var wasOrNot;
      var docLocation;
      var docComment;
      var cancelBtn;

      //delVisit = 'true';

      if (delVisit === 'false') {
        canceled = 'doc-row';
        calIcon = '<img class="calendar calendar-list" src="img/date-b.png" alt="calendar" />';
        clockIcon = '<img class="clock clock-list" src="img/time-b.png" alt="clock" />';
        //cancelBtn = '<div class="deletebox"><form><input class="del-btn" data-id="' + doctor[i].id + '" type="submit" name="del-submit" value="x"><form></div>';
        cancelBtn = '<div class="deletebox"><img class="fail-list del-btn" src="img/fail-b.png" alt="fail" /></div>';
        if (visitDate < today) {
          wasOrNot = '<img class="was-list" src="img/success-b.png" alt="success" />';
        } else if (visitDate >= today) {
          wasOrNot = '';
        }
      } else {
        canceled = 'canceled';
        wasOrNot = '<img class="was-list" src="img/fail-lg.png" alt="success" />';
        calIcon = '<img class="calendar calendar-list" src="img/date-lg.png" alt="calendar" />';
        clockIcon = '<img class="clock clock-list" src="img/time-lg.png" alt="clock" />';
        cancelBtn = '';
      }

      if (doctor[i].doctorlocation !== '') {
        docLocation = '<span>' + doctor[i].doctorlocation + '</span>';
      } else {
        docLocation = '';
      }
      if (doctor[i].comment !== '') {
        docComment = '<span>' + doctor[i].comment + '</span>';
      } else {
        docComment = '';
      }

      $rowOrient = $('<div class="row-orient ' + canceled + '"><div class="was-or-not">' + wasOrNot + '</div><div class="doc-visit"><div class="doctor-datebox">' + calIcon + '<span>' + doctor[i].doctordate + '</span></div><div class="doctor-hourbox">' + clockIcon + '<span>' + doctor[i].doctortime + '</span></div><div class="doctor-infobox"><span>' + doctor[i].doctorname + '</span>' + docLocation + docComment + '</div></div>' + cancelBtn + '</div>');
      $listbox.append($rowOrient);
    }
  }



  function loadDoctor() {
        $.ajax({
            	url: './dbDoctor.php'
        }).done(function(response){
          var data = jQuery.parseJSON(response);
          doctorInfo(data.Doctor);
    	 }).fail(function(error) {
           console.log(error)
       })
  }

  loadDoctor();

});
