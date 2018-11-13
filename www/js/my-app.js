// If we need it in place where we don't have access to app instance or before we init the app

// Initialize app
var app = new Framework7();

var deviceOn;

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

var myPhotoBrowserPopup = app.photoBrowser({
    photos : [
        'img/bing1.jpg',
		'img/bing2.jpg',
		'img/bing3.jpg',
		'img/bing4.jpg',
		'img/bing5.jpg',
    ],
    type: 'popup'
});

$$('.pb-popup').on('click', function () {
    myPhotoBrowserPopup.open();
});

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
app.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;
	
    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        app.alert('Here comes About page');
		if(deviceOn === "?"){
			app.alert('It is an unknown device');
		}
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    app.alert('Here comes About page');
})