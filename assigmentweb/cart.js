        
        function renderCart() {
            const cartBody = document.getElementById('cart-body');
            const totalPriceElement = document.getElementById('total-price');
            
            
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            
            cartBody.innerHTML = '';
            
            let totalPrice = 0;

           
            cart.forEach((item, index) => {
                totalPrice += parseFloat(item.price.replace(/\./g, '')) || 0;

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <div style="display: flex; gap: 1rem; align-items: center;">
                            <div class="product-image">
                                <img src="${item.imgSrc}" alt="${item.address}">
                            </div>
                            <div>${item.address}</div>
                        </div>
                    </td>
                    <td>${item.price}</td>
                    <td><button class="btn" onclick="removeFromCart(${index})">Remove</button></td>
                `;
                cartBody.appendChild(row);
            });

          
            totalPriceElement.textContent = `Total: ${totalPrice.toLocaleString('en-US')}`;
        }

      
        function removeFromCart(index) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            
            
            cart.splice(index, 1);
            
           
            localStorage.setItem('cart', JSON.stringify(cart));
            
            
            renderCart();
        }

        
        document.addEventListener('DOMContentLoaded', renderCart);

        document.querySelector('.btn').addEventListener('click', function () {
            alert('Order successfully!');
            localStorage.removeItem('cart'); 
        });
        
        