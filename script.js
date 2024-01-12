
    // JavaScript for AI Products Shop

    // Product Data (Normally, this would come from a database)
    const products = [
        { id: 1, name: 'Hoodies', price: 40, image: 'hoodies.jpg' },
        { id: 2, name: '5 Custom AI Generated Images', price: 1.99, image: 'ai_images.jpg' }
    ];

    // Function to display products
    function displayProducts() {
        const productsContainer = document.getElementById('products-container');
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <img src="${product.image}" alt="${product.name}">
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productsContainer.appendChild(productDiv);
        });
    }

    // Shopping Cart
    let cart = [];

    // Function to add product to cart
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCartDisplay();
    }

    // Function to update cart display
    function updateCartDisplay() {
        const cartContainer = document.getElementById('cart-container');
        cartContainer.innerHTML = '';
        cart.forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.innerHTML = `${product.name} - $${product.price}`;
            cartContainer.appendChild(cartItem);
        });
    }

    // Initialize the product display
    window.onload = () => {
        displayProducts();
    };
    