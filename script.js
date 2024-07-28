document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');
    const cartItemsElement = document.getElementById('cart-items');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const id = productElement.getAttribute('data-id');
            const name = productElement.querySelector('h3').innerText;
            const price = parseFloat(productElement.querySelector('p').innerText.replace('$', ''));

            // Add to cart
            cart.push({ id, name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartCountElement.innerText = cart.length;

        let total = 0;
        cartItemsElement.innerHTML = '';
        cart.forEach(item => {
            total += item.price;
            const listItem = document.createElement('li');
            listItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
            cartItemsElement.appendChild(listItem);
        });

        totalPriceElement.innerText = total.toFixed(2);
    }
});
