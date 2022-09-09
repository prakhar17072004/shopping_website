let card = document.getElementsByClassName('cart');

//woring of cart js//
if(document.readyState== 'loading'){
    document.addEventListener('DOMContentLoaded',ready)

}else{
    ready();
}
//making function//
function ready(){
    //Remove items from cart
    var removeCartButtons= document.getElementsByClassName("cart-remove")
    for(var i=0; i< removeCartButtons.length;i++){
        var button=removeCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    //quantity change
    var quantityInputs = document.getElementsByClassName("cart-quantity")
    for(var i=0; i< quantityInputs.length;i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }


   

      //add to cart
    var addCart= document.getElementsByClassName("add-cart");
    for(var i=0; i< addCart.length;i++){
     var button = addCart[i];
     button.addEventListener("click",addCartClicked)
    }
}


//Remove items from cart
function removeCartItem(event){
    var buttonClicked= event.target
    buttonClicked.parentElement.remove();
    updatetotal();
}
//quantity changed
function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value)|| input.value <= 0){
        input.value =1;
    }
    updatetotal();
}


   


   

//add to cart 
function addCartClicked(event){
    var button = event.target
    var allProducts = button.parentElement
    var name = allProducts.getElementsByClassName('name')[0].innerText;
    console.log(title);
   var price = allProducts.getElementsByClassName("price")
     img = allProducts.getElementsByClassName("Item-img")
}
//update total
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxs = document.getElementsByClassName("cart-box");
    var total= 0;
    for(var i= 0; i < cartBoxs.length; i++) {
      var cartBox = cartBoxs[i];
      var priceElement = cartBox.getElementsByClassName("cart-price")[0];
      var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
      var price = parseFloat(priceElement.innerText.replace("$", " "));
      var quantity= quantityElement.value; 
      total = total +(price * quantity) ;
      //if price contain sam cents values
      total = Math.round(total*100 )/100;



      document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
    
}
