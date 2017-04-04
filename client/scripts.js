
var initTable = document.getElementById("table").innerHTML;

function load(){
    initFields();
    getList();
}

function getList(){
    $.ajax({
        method: "GET",
        url: "http://localhost:53981/api/contacts/",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data){
            fillTable(data);
        }
    });
}

function fillTable(object){
    var table = document.getElementById("table");
    table.innerHTML = initTable;
    if(object!="") {
        document.getElementById("deleteList").disabled = false;
    }
    for (var c =0; c < object.length; c++){
        var row = table.insertRow(c+1);

        row.dataset.id = object[c].Id;
        row.insertCell(0).innerHTML = object[c].FirstName;
        row.insertCell(1).innerHTML = object[c].LastName;
        row.insertCell(2).innerHTML = object[c].Phone;
        row.insertCell(3).innerHTML = "<a href ='https://www.google.fi/maps/place/"+object[c].Address+"'target='_blank'>"+object[c].Address+"</a>";
        row.cells[3].dataset.text = object[c].Address;
        row.insertCell(4).innerHTML = '<input name="edit" type="button" class="mdl-button mdl-button--raised" value="edit" onClick="Javascript:editContact(this)"><input type="button" name ="delete" class="mdl-button mdl-button--raised" value="del" onClick="Javascript:deleteContact(this)">';
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
    var entry = {FirstName:firstName, LastName:lastName, Phone:phone, Address:address};
    $.ajax("http://localhost:53981/api/contacts/",
        {
            method: "POST",
            contentType : 'application/json',
            data: JSON.stringify(entry),
            success: function(data){
                getList();}
        });
    initFields();
}

function editContact(object){
    var holder = "submitEdit("+object.parentNode.parentNode.dataset.id+")";
    document.getElementById("fName").value = object.parentNode.parentNode.cells[0].innerHTML;
    document.getElementById("lName").value = object.parentNode.parentNode.cells[1].innerHTML;
    document.getElementById("phone").value = object.parentNode.parentNode.cells[2].innerHTML;
    document.getElementById("address").value = object.parentNode.parentNode.cells[3].dataset.text;
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
    var entry = {Id: index, FirstName: firstName, LastName: lastName, Phone: phone, Address: address};
    $.ajax("http://localhost:53981/api/contacts/",
        {
            method: "PUT",
            contentType : 'application/json; charset=utf-8',
            data: JSON.stringify(entry),
            success: function(data){
                initFields();
                fillTable(data);
            }
        });
}

function deleteList(){
    $.ajax("http://localhost:53981/api/contacts/",
        {
            method: "DELETE",
            contentType : 'text'
        });
    document.getElementById("table").innerHTML = initTable;
    document.getElementById("deleteList").disabled = true;
}

function deleteContact(object){

    $.ajax("http://localhost:53981/api/contacts/"+ object.parentNode.parentNode.dataset.id,
        {
            method: "DELETE",
            contentType : 'application/json; charset=utf-8',
            success: function(data){
                fillTable(data);
                if(data==""){
                    document.getElementById("deleteList").disabled = true;
                }
            }
        });

}


