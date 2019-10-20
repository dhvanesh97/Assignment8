/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};
var submit = $("submit");
var employees = [
    ["Dhvanesh Shah", "Machine Learning Enginner", 10],
    ["Bansi Menadapara", "data scientist", 20],
    ["Romil shah", "SDE", 30],
    ["Jay Patel ", "Web developer", 40],
    ["Harsh Javia", "Web Developer", 50],
];

function loademp() {
    "use strict";
    var html = "";
    for (var i = 0; i < employees.length; i++) {
        var employee = employees[i];
        html += '<tr><td>' + employee[0] + '</td><td>' + employee[1] + '</td><td>' + employee[2] + '</td><td><button class="del-btn" onclick="del(' + i + ')">Delete</button></td></tr>';
    }
    document.querySelector("tbody").innerHTML = html;

    document.getElementById("count").innerHTML = employees.length;
}

function del(n) {
    employees.splice(n, 1);
    loademp();
}




submit.addEventListener("click", function () {
    var name = window.document.getElementById("name");
    var title = window.document.getElementById("title");
    var ext = window.document.getElementById("extension");

    if (!name.value) {
        window.document.querySelector(".reqn").style.display = "inline-block";
    }
    else {
        document.querySelector(".reqn").style.display = "none";
    }

    if (!title.value) {
        document.querySelector(".reqt").style.display = "inline-block";
    }
    else {
        document.querySelector(".reqt").style.display = "none";
    }

    if (!ext.value) {
        document.querySelector(".reqe").style.display = "inline-block";
    }
    else {
        document.querySelector(".reqe").style.display = "none";
    }

    if (name.value && title.value && ext.value) {
        employees.push([name.value, title.value, ext.value]);
        name.value = "";
        title.value = "";
        ext.value = "";
    }


    loademp();
});

window.onload = function () {
    loademp();
}
