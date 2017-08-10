var loadPage = () => {
     initApp();
    initProjects();
}
var config = {
    apiKey: "AIzaSyD-edb9LcUW-C-zzPb5hLferKCArMYAd5U",
    authDomain: "organi-botics.firebaseapp.com",
    databaseURL: "https://organi-botics.firebaseio.com",
    projectId: "organi-botics",
    storageBucket: "organi-botics.appspot.com",
    messagingSenderId: "722197372073"
};
//DataBase
/* objDb = {
    users: [],
    projects: []
};*/

var saveUser = database.ref("users");

var saveProject = database.ref("projects"); 

firebase.initializeApp(config);
var initApp = () => {
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
                    saveUser.push({
                        displayName: displayName,
                        email: email,
                        emailVerified: emailVerified,
                        phoneNumber: phoneNumber,
                        photoURL: photoURL,
                        uid: uid,
                        accessToken: accessToken,
                    })
                    $('#nombre').text(displayName);
                });
            } else {
                // User is signed out.
                location.href = 'https://agile-scrubland-33586.herokuapp.com/'
            }
        },
        function (error) {
            console.log(error);
        });
};
var initProjects = function () {
    var formNewProject = $("#new-project");
    formNewProject.click(function (e) {
        e.preventDefault();
        var newProject = $('#np-name').val();
        var d = new Date();
        var idP = d.getTime();
        localStorage.setItem("nameProject", "newProject");
        localStorage.setItem("idProject", "idP");
        console.log(newProject);
        saveProject.push({
            nameProject: newProject,
            idProject:idP
        })
        location.href = 'http://localhost:3000/views/project.html';
    })
};
var database = firebase.database();
$(document).ready(loadPage)
/*window.addEventListener('load', function () {
    initApp();
    initProjects();
});*/
