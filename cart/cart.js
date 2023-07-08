
function addItem(){
    const itemHolder = document.getElementById("cartItems");
    console.log("hi")

    const item = document.createElement("div")
    item.classList.add("itemCard")

    const imgBox = document.createElement("div")
    imgBox.classList.add("imgBox")

    const itemImg = document.createElement("img")
    itemImg.src="../assets/Wardrobe_product.jpg"
    itemImg.style.maxWidth="100%"
    itemImg.style.maxHeight="100%"

    const name = document.createElement("p")
    name.classList.add("nameHeading")
    name.innerHTML="Faux Chair"

    const qty = document.createElement("p")
    qty.classList.add("qty")
    qty.innerHTML="Qty: 1"

    const price = document.createElement("p")
    price.classList.add("price")
    price.innerHTML="AED 1500"

    //add code for image, name, price

    itemHolder.appendChild(item)
    item.appendChild(imgBox)
    imgBox.appendChild(itemImg)
    item.appendChild(name)
    item.appendChild(qty)
    item.appendChild(price)

}


// document.getElementById("add_to_cart").addEventListener("onclick", addItem);

var button = document.getElementById("add_to_cart");
button.addEventListener("click", function(event){
    window.location.href='/cart/cart.html';
    addItem();
   
});



