// Simulated Product Data
const products = [
    {
      name: "Biodegradable Bags",
      image: "images/biodegradable-bags.jpg",
      description: "Compostable trash bags for sustainability.",
      price: "$9.99",
      use: "Perfect for eco-friendly waste disposal. Great for reducing plastic usage and supporting sustainability."
    },
    {
      name: "Solar Charger",
      image: "images/solar-charger.jpg",
      description: "Portable solar charger for devices.",
      price: "$29.99",
      use: "Ideal for outdoor activities. Charge your devices using solar energy, reducing dependence on conventional electricity."
    },
    {
      name: "Bamboo Toothbrush",
      image: "images/product3.jpg",
      description: "Durable, eco-friendly bamboo toothbrush.",
      price: "$3.99",
      use: "A sustainable alternative to plastic toothbrushes. Helps reduce plastic waste while maintaining oral hygiene."
    }
  ];
  
  // Populate Products Dynamically
  const productGrid = document.getElementById("product-grid");
  
  function renderProducts() {
    products.forEach(product => {
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p class="price">${product.price}</p>
          <p class="use">${product.use}</p> <!-- Added use description -->
        </div>
      `;
      productGrid.innerHTML += productCard;
    });
  }
  
  // Initialize Page
  renderProducts();
  