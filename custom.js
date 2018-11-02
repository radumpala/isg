(function() {
'use strict';
window.addEventListener('load', function() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      form.classList.add('was-validated');
    }, false);
  }); 
  $('#myForm').on('submit', function(e){
    if($('#myForm').valid()){
    $('#myModal').toggle();
      e.preventDefault();
    }     
  });
}, false);
})();
$('#rate1').shieldRating({
          max: 7,
          step: 0.1,
          value: 0,
          markPreset: false
      });

var text_max =(1000);
$('#count_message').html('('+text_max + ' remaining)');
$('#text').keyup(function() {
var text_length = $('#text').val().length;
var text_remaining =(text_max - text_length);
$('#count_message').html('(' + text_remaining + ' remaining)');
});

var text_max =(1000);
$('#count_message_description').html('('+text_max + ' remaining)');
$('#text1').keyup(function() {
var text_length = $('#text1').val().length;
var text_remaining =(text_max- text_length);
$('#count_message_description').html('(' + text_remaining + ' remaining)');
});

var text_max =(1000);
$('#count_message1').html('('+text_max + ' remaining)');
$('#text11').keyup(function() {
var text_length = $('#text11').val().length;
var text_remaining =(text_max - text_length);
$('#count_message1').html('(' + text_remaining + ' remaining)');
});

var text_max =(1000);
$('#count_message_description1').html('('+text_max + ' remaining)');
$('#text12').keyup(function() {
var text_length = $('#text12').val().length;
var text_remaining =(text_max- text_length);
$('#count_message_description1').html('(' + text_remaining + ' remaining)');
});

var text_max =(1000);
$('#count_message2').html('('+text_max + ' remaining)');
$('#text21').keyup(function() {
var text_length = $('#text21').val().length;
var text_remaining =(text_max - text_length);
$('#count_message2').html('(' + text_remaining + ' remaining)');
});

var text_max =(1000);
$('#count_message_description2').html('('+text_max + ' remaining)');
$('#text22').keyup(function() {
var text_length = $('#text22').val().length;
var text_remaining =(text_max- text_length);
$('#count_message_description2').html('(' + text_remaining + ' remaining)');
});


