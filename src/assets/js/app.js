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
    users: [],
    projects: []
};

var saveUser = (users) => {
    database.ref("/").set(users);
}
var saveProject = (projects) => {
    database.ref("/").set(projects);
}

firebase.initializeApp(config);
var initApp = function () {
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
                    objDb.users.push({
                        displayName: displayName,
                        email: email,
                        emailVerified: emailVerified,
                        phoneNumber: phoneNumber,
                        photoURL: photoURL,
                        uid: uid,
                        accessToken: accessToken,
                    })
                    saveUser(objDb);
                    document.getElementById('nombre').textContent = displayName;
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
var initProjects = function () {
    var formNewProject = document.getElementById('new-project');
    formNewProject.addEventListener('submit', function () {
        var newProject = document.getElementById('np-name').value;
        objDb.projects.push({
            name: newProject
        })
        saveProject(objDb);
        location.href = 'http://localhost:3000/views/project.html';
    })
};
var database = firebase.database();

window.addEventListener('load', function () {
    initApp()
});
