


function validDateCheck(startDate, endDate){
	
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
		if(dd<10){
	dd = '0'+dd
	}
	if (mm<10) {
		mm = '0'+mm
	}
	today = yyyy + '-' + mm + '-' + dd;
	if(endDate == ""){
		if(startDate < today){
		return false;
	}
	return true;
	
}	
if(startDate < today || endDate == today || endDate == startDate || startDate > endDate){
	return false;
}
	else{
		return true;
	}
	
}


function dateInput(){
	var startDate = document.getElementById("startDate").value;
	var endDate = document.getElementById("endDate").value;
	var ETA = document.getElementById("ETA");
	var ETALabel = document.getElementById("ETALabel");

	if(startDate != ""){
		var validDate = validDateCheck(startDate, endDate);
		
		if(!validDate) {
			document.getElementById("errorMessage").style.display = "block";
			ETA.style.opacity = "0";
			ETALabel.style.opacity = "0";
		}
		else{
			document.getElementById("errorMessage").style.display ="none";
		}
		
		if(endDate != ""){
			validDate = validDateCheck(startDate, endDate);
			if(validDate){
				document.getElementById("errorMessage").style.display = "none";
				ETA.style.opacity = "100";
				ETALabel.style.opacity = "100";
		
			}
			
		else{
			document.getElementById("errorMessage").style.display = "block";
			ETA.style.opacity = "0";
			ETALabel.style.opacity = "0";
			
			}
		}	
	}
}

function updatePrice(){
	var roomType = document.getElementById("roomType").value;
	var noRooms = document.getElementById("noRooms").value;
	var startDate = document.getElementById("startDate").value;
	var endDate = document.getElementById("endDate").value;
	var noAdults = document.getElementById("noAdults").value;
	var noChildren = document.getElementById("noChildren").value;
	var breakfast = document.getElementById("breakfast").checked;
	var price = 0;
	var breakfastPrice = 20;
	
	if(startDate == "" || endDate == "" || roomType == "") { return; }
	
	startDate = new Date(startDate);
	endDate = new Date(endDate);
	
	var dayDiff = endDate.getTime() - startDate.getTime();
	dayDiff /= 1000;
	dayDiff /= 60;
	dayDiff /= 60;
	dayDiff /= 24;
	
	price = roomType;
	
	price*=parseInt(noRooms)
	
	var tmpPrice = price;
	var tmpPrice1 = price;
	var totalBreakfastPrice = 0;
	var totaltmpprice = 0;
	
	if(breakfast){
		totalBreakfastPrice = breakfastPrice*parseInt(noAdults);
		totalBreakfastPrice += breakfastPrice*parseInt(noChildren);
		price += totalBreakfastPrice;}
	else{ price = tmpPrice; }
	
	totaltmpprice = tmpPrice1 * parseInt(noAdults);
	totaltmpprice+= tmpPrice1 * parseInt(noChildren);
	price += totaltmpprice;
	
	price *= dayDiff;
	
		document.getElementById("yourStayPrice").textContent = '$' + price.toString();
}


function resetInfo(){
	if (confirm("Are you sure you want to reset all information?")) {
		document.getElementById("startDate").value = "";
		document.getElementById("endDate").value = "";
		document.getElementById("ETA").style.opacity = "0";
		document.getElementById("ETA").value = "16:00:00";
		document.getElementById("ETALabel").style.opacity = "0";
		document.getElementById("errorMessage").style.display = "none";
		document.getElementById("roomType").value = "";
		document.getElementById("noRooms").value = "1";
		document.getElementById("noAdults").value = "1";
		document.getElementById("noChildren").value = "0";
		document.getElementById("breakfast").checked = false;
		document.getElementById("yourStayPrice").textContent = 'NZD $';
		
		document.getElementById("titleDropList").value= "ms";
		
		var i;
		var textboxes = document.getElementsByClassName("guestInfoTextBox");
		for(i = 0; i < textboxes.length; i++){
			textboxes[i].value = "";
		}
	}
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}



/*

const init = function(){
	document.getElementById('button-reset').addEventListener('click', reset);
	document.getElementById('button-submit').addEventListener('click', send);
}

const reset = function(ev){
	ev.preventDefault();
	document.getElementByID('booking-form').reset();
}

const send = function(ev){
	ev.preventDefault();
	ev.stopPropagation();
	
	let ret = validate();
	
	if(ret){
		document.getElementById('booking-form').submit();
		
	}else{
		let err = document.querySelector('.error');
		let input = err.querySelector('input');
		err.setAttribute('data-errormsg', `...Missing ${input.placeholder}`);
	}
}
const validate = function(ev){
	let valid = false;
	
	let chk = document.getElementById('option');
	
	let first = document.getElementById('fname');
	let last = document.getElementById('lname');
	let email = document.getElementById('email');
	
	return true;
	
}


document.addEventListener('DOMContentloaded', init);


function total(n){
	var room = document.getElementById('roomtype');
	var numofroom = document.getElementById('norooms');
	var adults = document.getElementById('numofAdults');
	var childern = document.getElementById('NoOfChildren');

	var breakfast = document.getElementById('option');
	

	}
}*/
