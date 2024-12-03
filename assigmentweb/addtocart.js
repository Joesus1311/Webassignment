function addToCart(button) {
   
    const homeElement = button.parentElement;

    
    const imgSrc = homeElement.querySelector('img').getAttribute('src');
    const address = homeElement.querySelector('.address').textContent.trim();
    const price = homeElement.querySelector('.price').textContent.trim();

    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
    cart.push({ imgSrc, address, price });

    
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`Added to cart: ${address} (${price})`);
}


function viewCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart:', cart);
}