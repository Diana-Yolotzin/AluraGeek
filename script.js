document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.add-product-form');
    const productContainer = document.querySelector('.products-section .product-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const productName = document.getElementById('productName').value;
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        const productImage = document.getElementById('productImage').value;

        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const img = document.createElement('img');
        img.src = productImage;
        img.alt = productName;

        const h2 = document.createElement('h2');
        h2.textContent = productName;

        const p = document.createElement('p');
        p.textContent = `$ ${productPrice.toFixed(2)}`;

        productItem.appendChild(img);
        productItem.appendChild(h2);
        productItem.appendChild(p);

        productContainer.appendChild(productItem);

        form.reset();
    });
});
