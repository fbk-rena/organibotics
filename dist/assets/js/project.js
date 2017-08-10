var pageLoaded = function () {
    $('.modal').modal();
    $('select').material_select();
    $("#addNewTask").submit(getTaskData);
};

var getTaskData = function () {
    var taskName = $("#taskName").val();
    var taskDescrip = $("#taskDescrip").val();
    var assignedTime = $("#assignedTime").val();
    var userSelected = $("#users").selectedIndex;
    var roleSelected = $("#roles").selectedIndex;
    console.log(taskName, taskDescrip, userSelected, roleSelected, assignedTime);
}


$(document).ready(pageLoaded);
