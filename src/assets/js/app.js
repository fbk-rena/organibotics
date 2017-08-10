var config = {
    apiKey: "AIzaSyD-edb9LcUW-C-zzPb5hLferKCArMYAd5U",
    authDomain: "organi-botics.firebaseapp.com",
    databaseURL: "https://organi-botics.firebaseio.com",
    projectId: "organi-botics",
    storageBucket: "organi-botics.appspot.com",
    messagingSenderId: "722197372073"
};
//DataBase
var objDb = {
    users: []
};

var guardarDatos = (users) => {
    database.ref("/").set(users);
}

firebase.initializeApp(config);
initApp = function () {
    firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var uid = user.uid;
                var phoneNumber = user.phoneNumber;
                var providerData = user.providerData;
                user.getIdToken().then(function (accessToken) {
                    document.getElementById('nombre').textContent = displayName;
                    objDb.users.push({
                        displayName: displayName,
                        email: email,
                        emailVerified: emailVerified,
                        phoneNumber: phoneNumber,
                        photoURL: photoURL,
                        uid: uid,
                        accessToken: accessToken,
                    })
                    guardarDatos(objDb);
                });
            } else {
                // User is signed out.
                document.getElementById('sign-in-status').textContent = 'Signed out';
                document.getElementById('sign-in').textContent = 'Sign in';
                document.getElementById('account-details').textContent = 'null';
            }
        },
        function (error) {
            console.log(error);
        });
};
var database = firebase.database();

window.addEventListener('load', function () {
    initApp()
});
