// Simulated Product Data
const products = [
    {
      name: "Biodegradable Bags",
      image: "images/biodegradable-bags.jpg",
      description: "Compostable trash bags for sustainability.",
      price: "$9.99"
    },
    {
      name: "Solar Charger",
      image: "images/solar-charger.jpg",
      description: "Portable solar charger for devices.",
      price: "$29.99"
    },
    {
      name: "Bamboo Toothbrush",
      image: "images/product3.jpg",
      description: "Durable, eco-friendly bamboo toothbrush.",
      price: "$3.99"
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
        </div>
      `;
      productGrid.innerHTML += productCard;
    });
  }
  
  // Feedback Form Logic
  const feedbackForm = document.getElementById("feedback-form");
  const formDataKey = "feedbackData";
  
  // Save Feedback to LocalStorage
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && message) {
      const feedbackData = { name, email, message };
      localStorage.setItem(formDataKey, JSON.stringify(feedbackData));
  
      alert("Thank you for your feedback!");
      feedbackForm.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
  
  // Load Feedback from LocalStorage
  function loadFeedbackData() {
    const savedData = localStorage.getItem(formDataKey);
    if (savedData) {
      const { name, email, message } = JSON.parse(savedData);
      document.getElementById("name").value = name;
      document.getElementById("email").value = email;
      document.getElementById("message").value = message;
    }
  }
  
  // Lazy Load Hero Image
  document.addEventListener("DOMContentLoaded", () => {
    const heroImage = document.querySelector(".hero-image");
    if (heroImage) {
      heroImage.loading = "lazy";
    }
  });
  
  // Initialize Page
  renderProducts();
  loadFeedbackData();
  