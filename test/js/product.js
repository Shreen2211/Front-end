var index=document.getElementById('index');
var _name=document.getElementById('name');
var price=document.getElementById('price');
var category=document.getElementById('category');
var description=document.getElementById('description');

var ProductContener=[];

function addProduct(){
    console.log(index.value);
    console.log(_name.value);
    console.log(price.value);
    console.log(category.value);
    console.log(description.value);

    var product={
        Pindex:index.value,
        P_name:_name.value,
        Pprice:price.value,
        Pcategory:category.value,
        Pdescription:description.value,
    }
    console.log(product);
    ProductContener.push(product);
    console.log(ProductContener);
}