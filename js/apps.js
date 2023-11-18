document.querySelector("input").addEventListener('click', function() {
    const checkbox = document.querySelector("input");
    const body = document.body;

    if (checkbox.checked) {
    
        body.style.backgroundColor = "#363636";
        body.style.color = "white";
        document.querySelector("label").innerText = "OFF" 
        
          
    } else {
        
        body.style.backgroundColor = "white";
        body.style.color = "black"; 
        document.querySelector("label").innerText = "ON" 
         
    }
});


let cartCount = 0;

function addToCart() {
  cartCount++;
  updateCartCount();
}

function removeFromCart() {
  if (cartCount > 0) {
    cartCount--;
    updateCartCount();
  }
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cartCount;
}

setInterval(function () {
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);

    console.log(red, green, blue);

    document.body.style.background = `rgb(${red},${green},${blue})`;
},1000);


