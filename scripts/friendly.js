// Simulated Product Data with more detailed descriptions
const products = [
    {
      name: "Biodegradable Bags",
      image: "images/biodegradable-bags.jpg",
      description: "These biodegradable bags are made from plant-based materials, making them compostable and a great alternative to plastic. They are ideal for everyday use in the kitchen or when shopping, ensuring you reduce your carbon footprint and minimize plastic waste.",
      price: "$9.99",
      details: "These bags break down naturally in landfills, reducing the harmful environmental impact of plastic waste. Available in various sizes, these bags are sturdy, durable, and perfect for waste disposal without harming the planet."
    },
    {
      name: "Solar Charger",
      image: "images/solar-charger.jpg",
      description: "This portable solar charger is perfect for charging your devices while on the go. With solar panels designed to capture sunlight, it provides a sustainable and eco-friendly way to keep your electronics powered during outdoor activities or emergencies.",
      price: "$29.99",
      details: "Ideal for camping, hiking, or emergency preparedness, this solar charger is lightweight and compact, making it easy to carry. It works in various weather conditions and is built to last, offering a long-lasting solution for sustainable energy."
    },
    {
      name: "Bamboo Toothbrush",
      image: "images/product3.jpg",
      description: "Made from sustainable bamboo, this toothbrush is biodegradable, natural, and eco-friendly. It offers a simple and effective way to reduce plastic waste while maintaining your oral health with soft bristles for gentle care.",
      price: "$3.99",
      details: "The bamboo toothbrush is naturally antimicrobial and features a comfortable, ergonomic handle. It's fully biodegradable, so you can feel good knowing that even after use, it won't contribute to plastic pollution."
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
          <button class="details-btn">More Details</button>
          <div class="product-details">
            <p>${product.details}</p>
          </div>
        </div>
      `;
      productGrid.innerHTML += productCard;
    });
  
    // Add event listeners for 'More Details' buttons
    const detailsButtons = document.querySelectorAll('.details-btn');
    detailsButtons.forEach(button => {
      button.addEventListener('click', function () {
        const detailsDiv = this.nextElementSibling;
        detailsDiv.classList.toggle('show-details');
        this.textContent = detailsDiv.classList.contains('show-details') ? 'Show Less' : 'More Details';
      });
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
  
  // Initialize Page
  renderProducts();
  loadFeedbackData();
  