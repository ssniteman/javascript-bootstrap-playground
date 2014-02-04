$( ".register" ).click(function() {
  $(this).addClass('active');
});



$( ".register" ).click(function() {
  $(".form-horizontal").toggle();
});

$( ".submit" ).click(function() {
	$(".form-horizontal").toggle();
});

$( ".submit" ).click(function() {
var nameValue = $('input[type=full-name]').val();
var emailValue = $('input[type=email]').val();
var phoneValue = $('input[type=phone-number]').val();
var stateValue = $('input[type=state]').val();
var zipValue = $('input[type=zip]').val();
var yearValue = $('input[type=year]').val();
var makeValue = $('input[type=make]').val();
var modelValue = $('input[type=model]').val();
var imageValue = $('input[type=inputimage3').val();

if (yearValue > 1979){
      alert('This a vintage car show. Try again in 20 years.');
      $('.form-horizontal').trigger("reset");
      return false;
}


function signee (name, email, phone, city, state, zip, year, make, model, image) {
	this.name = name;
	this.email = email;
	this.phone = phone;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.year = year;
	this.make = make;
	this.model = model;
	this.image = 'http://placehold.it/350x150';
}

var registrant = new signee (nameValue, emailValue,phoneValue, stateValue, zipValue, yearValue, makeValue, modelValue, imageValue)


var RegistrantTemplate = _.template ($('.RegistrantTemplate').text());


$('.users-container').append(RegistrantTemplate({data: registrant}))

$('.form-horizontal').trigger("reset");
});






















