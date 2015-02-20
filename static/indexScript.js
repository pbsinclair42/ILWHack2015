var userLatitude=0;
var userLongitude=0;

$(document).ready(function(){
	getLocation();
	
	$('#visulisationLogo').click(function(){
		window.location.href='visualisation.html';
	});
	$('#logo').click(function(){
		window.location.href='/';
	});
	$("#privateBtn").click(function(){
		alert('Suggestions of bookable tutorial rooms are not included in the alpha version'); //we'll include them when the timetabling department give us access to their data (hint hint pls)
	});
	$('#quietBtn').click(function(){
		window.name='quiet';
		goToMain();
	});
	$('#closeBtn').click(function(){
		window.name='close';
		goToMain();
	});
	$('#lateBtn').click(function(){
		window.name='late';
		goToMain();
	});
});

function goToMain(){
	getLocation();
	if(userLatitude!=0&&userLongitude!=0){
		window.location.href='main.html';
	}else{
		alert('Location service must be allowed to use this website.');
	}
}

// functions to do with getting user location {
function getLocation() {
    if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition( showPosition,showError );
    }
}
function showPosition(position) {
    userLatitude = position.coords.latitude;
	userLongitude =  position.coords.longitude;
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("Geolocation required for this app.")
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
	alert('error');
}
// functions to do with getting user location }
