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
 objDb = {
    users: [],
    projects: []
};

var saveUser = (users) => database.ref().set(users);

var saveProject =(obj) => database.ref('/projects').set(obj.projects); 

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
                    objDb.users.push({
                        displayName: displayName,
                        email: email,
                        emailVerified: emailVerified,
                        phoneNumber: phoneNumber,
                        photoURL: photoURL,
                        uid: uid,
                        accessToken: accessToken,
                    })
                    saveUser(objDb)
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
        var n = d.getTime();
        localStorage.setItem("nameProject", "newProject");
        localStorage.setItem("idProject", "idP");
        objDb.projects.push({
            nameProject: newProject,
            idProject:n
        })
        saveProject(objDb);
        var listNewProject = "";
        listNewProject = boilerProject.replace('__nameProject__', localStorage.getItem("nameProject"))
                                              .replace('__idProject__', localStorage.getItem("idProject"));
       $("#projectList").append(listNewProject);
        newProject = " ";
    })
};

var boilerProject = `<h4 class="center-align">__nameProject__</h4>
                    <div class="card horizontal">
                      <div class="card-stacked">
                        <div class="card-content">
                          <p>#__idProject__</p>
                        </div>
                        <div class="card-action">
                          <a href="#">View detail</a>
                        </div>
                      </div>
                    </div>`;

/*var showPoject = (projects)=> {
    var projectsList = $('#proyects-list');
    projectsList.html('');
    projects.forEach((project)=>{
        projectsList.html(
            boilerProject.replace('__nameProject__', projects.nameProject)
        .replace('__idProject__', projects.idProject)
        );
    });
};*/
var database = firebase.database();
/*database.ref("/projects").on('value', (snapshot)=>{
	let projects = snapshot.val();
	objDb.projects = projects;
	showPoject(projects);
});*/

$(document).ready(loadPage);

