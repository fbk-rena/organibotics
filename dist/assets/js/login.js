var config = {
    apiKey: "AIzaSyD-edb9LcUW-C-zzPb5hLferKCArMYAd5U",
    authDomain: "organi-botics.firebaseapp.com",
    databaseURL: "https://organi-botics.firebaseio.com",
    projectId: "organi-botics",
    storageBucket: "organi-botics.appspot.com",
    messagingSenderId: "722197372073"
};
firebase.initializeApp(config);

var actual =  window.location.href;
console.log(actual);

var uiConfig = {
    signInSuccessUrl: actual+'views/home.html ',
    signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
};
// Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
/*Termina LogIng*/

