var _name = document.getElementById('name');
var price = document.getElementById('price');
var category = document.getElementById('category');
var description = document.getElementById('description');

var ProductContener = [];

function addProduct() {
    console.log(_name.value);
    console.log(price.value);
    console.log(category.value);
    console.log(description.value);
    var product = {
        P_name: _name.value,
        Pprice: price.value,
        Pcategory: category.value,
        Pdescription: description.value,
    }
    console.log(product);
    ProductContener.push(product);
    console.log(ProductContener);
    display(ProductContener);
    clr();
}

function display(list) {
    var con = ``;
    for (var i = 0; i < list.length; i++) {
        con += ` <tr>
        <td>${i}</td>
        <td>${list[i].P_name}</td>
        <td>${list[i].Pprice}</td>
        <td>${list[i].Pcategory}</td>
        <td>${list[i].Pdescription}</td>
        <td><button class="btn btn-warning">Delete</button></td>
        <td><button class="btn btn-danger">Update</button></td>
    </tr>`
    }
    document.getElementById('myt').innerHTML=con;

}

function clr(){
_name.value="";
price.value="";
category.value="";
description.value="";
}