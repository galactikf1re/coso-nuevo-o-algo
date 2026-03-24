const productList = document.getElementById('productList');

function addItem(product) {
    const li = document.createElement('li');
    li.style.marginBottom = '1rem';
    li.innerHTML =
        `<strong>${product.name}</strong> — $${product.price}<br>` +
        `${product.description}<br>` +
        `<img src="${product.image}" alt="${product.name}" style="max-width:180px; max-height:180px; display:block; margin-top:.5rem;"/>`;
    productList.appendChild(li);
}

document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('productName').value.trim();
    const price = document.getElementById('productPrice').value;
    const description = document.getElementById('productDescription').value.trim();
    const file = document.getElementById('productImage').files[0];

    if (!name || !price || !file) {
        return alert('Completa los campos obligatorios');
    }

    const reader = new FileReader();
    reader.onload = function () {
        addItem({ name, price, description, image: reader.result });
        e.target.reset();
    };
    reader.readAsDataURL(file);
});

