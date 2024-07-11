// Task 1: Create an array containing information about different products
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: Write a function to display the product information on the webpage dynamically
function displayProducts() {        
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear any existing content

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>Price: $${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
        `;
        productList.appendChild(productDiv);
    });
}

// Task 3: Implement an event listener to trigger the display of products when the page loads
document.addEventListener('DOMContentLoaded', displayProducts);