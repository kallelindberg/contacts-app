

var entry, list = [];
var initTable = document.getElementById("table").innerHTML;

$(document).ready(function(){
    $.ajax("http://localhost:53981/api/users/",
            {
                method: "POST",
                contentType : 'application/json',
                data: "{FirstName:'testi',LastName:'Toinen',Phone:'',Address:''}"
            });
});

function load(){
    initFields();
    if (localStorage.getItem('list')){
        var object = localStorage.getItem("list");
        list = JSON.parse(object);
        fillTable(list);
    }
    else{
        document.getElementById("deleteList").disabled = true;
    }
}

function initFields(){
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
    document.getElementById("button").value = "Add";
    document.getElementById("button").setAttribute('onclick', "add()");
}

function add() {

    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    entry = [firstName, lastName, phone, address];
    list.push(entry);
    storeList(list);
    fillTable(list);
    initFields();
}

function fillTable(object){
    var table = document.getElementById("table");
    table.innerHTML = initTable;
    if(list!="") {
        document.getElementById("deleteList").disabled = false;
    }
    for (var c =0; c < object.length; c++){
        var row = table.insertRow(c+1);
        for (var i = 0; i < object[c].length; i++) {
            if (i == 3){
                row.insertCell(i).innerHTML = "<a href ='https://www.google.fi/maps/place/"+object[c][i]+"'target='_blank'>"+object[c][i]+"</a>";
            }
            else {
                row.insertCell(i).innerHTML = object[c][i];
            }
        }
        row.insertCell(4).innerHTML = '<input name="edit" type="button" class="mdl-button mdl-button--raised" value="edit" onClick="Javascript:editContact(this)"><input type="button" name ="delete" class="mdl-button mdl-button--raised" value="del" onClick="Javascript:deleteContact(this)">';
    }

}
function storeList(object){
    localStorage.setItem("list", JSON.stringify(object));
}
function deleteList(){
    localStorage.clear();
    list = [];
    document.getElementById("table").innerHTML = initTable;
    document.getElementById("deleteList").disabled = true;
}

function deleteContact(object){
    var table = document.getElementById("table");
    var index = object.parentNode.parentNode.rowIndex;
    table.deleteRow(index);
    list.splice(index-1, 1);
    storeList(list);
    if(list==""){
        document.getElementById("deleteList").disabled = true;
    }
}

function editContact(object){
    var table = document.getElementById("table");
    var index = object.parentNode.parentNode.rowIndex -1;
    var holder = "submitEdit("+index+")";
    document.getElementById("fName").value = list[index][0];
    document.getElementById("lName").value = list[index][1];
    document.getElementById("phone").value = list[index][2];
    document.getElementById("address").value = list[index][3];
    document.getElementById("button").value = "Submit";
    document.getElementById("button").setAttribute('onclick', holder);
    document.getElementById("deleteList").disabled = true;
    var disAbListE = document.getElementsByName("edit");
    for(var i = 0; i < disAbListE.length; i++) {
        disAbListE[i].disabled = true;
    }
    var disAbListD = document.getElementsByName("delete");
    for(var i = 0; i < disAbListD.length; i++) {
        disAbListD[i].disabled = true;
    }


}
function submitEdit(index){
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    entry = [firstName, lastName, phone, address];
    list[index]=entry;
    storeList(list);
    fillTable(list);
    initFields();
}


