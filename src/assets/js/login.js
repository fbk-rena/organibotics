var firebase = require('firebase');
var firebaseui = require('firebaseui');

var config = {
    apiKey: "AIzaSyD-edb9LcUW-C-zzPb5hLferKCArMYAd5U",
    authDomain: "organi-botics.firebaseapp.com",
    databaseURL: "https://organi-botics.firebaseio.com",
    projectId: "organi-botics",
    storageBucket: "organi-botics.appspot.com",
    messagingSenderId: "722197372073"
};
firebase.initializeApp(config);


function login(provider){
	firebase.auth().signInWithPopup(provider).then(function(result) {

		var token = result.credential.accessToken;
		var user = result.user;
		localStorage.setItem("email", user.email);
		localStorage.setItem("name", user.displayName);
		console.log('user',user);

		console.log(+localStorage.getItem("email"))
	}).then(function(result){
		location.href = "signup.html"
	}).catch(function(error) {
		var errorMessage = error.message;
		console.log('error',errorMessage)
	});
};

function ingresarFacebook (){
	var provider = new firebase.auth.FacebookAuthProvider();
	login(provider);
};
function ingresarGoogle (){
	var provider = new firebase.auth.GoogleAuthProvider();
	login(provider);
}

var facebook = document.querySelector("#login-facebook");
var gmail = document.querySelector('#login-gmail');

facebook.addEventListener('click', ingresarFacebook);
gmail.addEventListener('click', ingresarGoogle);

/*Termina LogIng*/