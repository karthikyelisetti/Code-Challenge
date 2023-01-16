function add_item() {
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");

    if(item.value != "") {
        let make_list = document.createElement("LI");
        make_list.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_list);
        item.value = "";
    } else {
        alert("Please enter the list item");
    }
}

function remove_item() {
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");

    if(item.value != "") {
        let make_list = document.createElement("LI");
        make_list.appendChild(document.createTextNode(item.value));
        list_item.appendChild(make_list);
        item.value = "";
    } else {
        alert("Please enter the list item");
    }
}