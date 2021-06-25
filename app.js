

let ul = "";
let li = "";
let firstDiv = document.getElementById("firstdiv");
let editInp = "";
let updateEditBtn = "";

function additem() {
    let inputValue = document.getElementById("ip").value;
    let inp = document.getElementById("ip")
    if (inputValue == " " || inputValue == "  " || inputValue == "   ") {
        let errorMsg = document.getElementById("errorMsg");
        errorMsg.innerText = "Please Enter a Value!";
    }
    else {
        // create li with text
        errorMsg.innerText = ""
        li = document.createElement('li');
        var text = document.createTextNode(inputValue);
        li.setAttribute("id", "li");
        li.setAttribute("class", "list-group-item list-group-item-dark");
        li.appendChild(text);
        ul = document.getElementById("ul");
        ul.appendChild(li);

        // delete button with text node:
        var delbt = document.createElement("button");
        var bttext = document.createTextNode(" " + " " + " " + "DELETE");
        delbt.appendChild(bttext);
        li.appendChild(delbt);
        delbt.setAttribute("class", "delbt btn btn-danger fa fa-trash-o");
        delbt.setAttribute("onclick", "deleted(this)");

        // edit button with text node
        var editbt = document.createElement("button");
        var edittext = document.createTextNode(" " + " " + " " + "EDIT");
        editbt.appendChild(edittext);
        li.appendChild(editbt);
        editbt.setAttribute("class", "editbt fa fa-pencil btn-success");
        editbt.setAttribute("onclick", "edit(this)");
    }

}

function deleted(e) {
    e.parentNode.remove();
}

function edit(e) {
    var pro = prompt("Change Item", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = pro;

}

function deleall() {
    var ul = document.getElementById("ul");
    ul.innerHTML = "";
    firebase.database().ref('todoitems').remove();
}






