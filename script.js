// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Video fallback handler
const setupVideoFallback = () => {
    const video = document.querySelector('.hero-video');
    if (video) {
        video.addEventListener('error', function() {
            this.parentNode.innerHTML = `
                <div class="hero-content" style="background: linear-gradient(to bottom, #000, #111827);">
                    <h2 style="font-size: 2.25rem; font-weight: 700;">EXCLUSIVE AUTOMOTIVE</h2>
                </div>`;
        });
    }
};

// Contact form handler
const setupContactForm = () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const formMessage = document.getElementById('formMessage');
            
            if (name && email && message) {
                const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
                const whatsappURL = `https://wa.me/+6285842363036?text=${whatsappMessage}`;
                window.open(whatsappURL, '_blank');
                
                formMessage.textContent = 'Redirecting to WhatsApp...';
                formMessage.style.color = 'green';
                this.reset();
            } else {
                formMessage.textContent = 'Please fill in all fields.';
                formMessage.style.color = 'red';
            }
        });
    }
};

// Data Models
const carModels = [
  {
    name: "Lamborghini Revuelto",
    price: "IDR 22.5 Miliar",
    image: "revuelto.png",
    specs: ["V12 Hybrid", "1,001 HP", "0-100km/h: 2.5s", "Top Speed: 350km/h"],
    description: "The first V12 hybrid supercar from Lamborghini with cutting-edge technology."
  },
  {
    name: "Lamborghini Huracan",
    price: "IDR 6 Miliar",
    image: "huracan.png",
    specs: ["V10 Engine", "640 HP", "0-100km/h: 2.9s", "Top Speed: 325km/h"],
    description: "The perfect balance of performance and daily drivability."
  },
  {
    name: "Lamborghini Aventador SVJ",
    price: "IDR 22 Miliar",
    image: "aventador.png",
    specs: ["V12 Engine", "759 HP", "0-100km/h: 2.8s", "Top Speed: 350km/h"],
    description: "The ultimate expression of Lamborghini's super sports car DNA."
  },
  {
    name: "Porsche 911 GT3 RS",
    price: "IDR 8.5 Miliar",
    image: "gt3rs.png",
    specs: ["Flat-6 Engine", "525 HP", "0-100km/h: 3.0s", "Top Speed: 312km/h"],
    description: "Track-focused version of the iconic 911 with racing technology."
  },
  {
    name: "McLaren Senna",
    price: "IDR 25 Miliar",
    image: "senna.png",
    specs: ["V8 Twin-Turbo", "789 HP", "0-100km/h: 2.8s", "Top Speed: 340km/h"],
    description: "The ultimate track-focused road-legal McLaren."
  },
  {
    name: "Ferrari SF90 Stradale",
    price: "IDR 28 Miliar",
    image: "ferrari-sf90.jpg",
    specs: ["V8 Hybrid", "1,000 HP", "0-100km/h: 2.5s", "Top Speed: 340km/h"],
    description: "Ferrari's most powerful production car with hybrid technology."
  }
];

// Modal Functionality
function setupModelsModal() {
  const modal = document.getElementById("modelsModal");
  const btn = document.querySelector(".btn-view-all button");
  const closeBtn = document.querySelector(".close-modal");
  const modelsContainer = document.querySelector(".models-container");

  // Populate models
  modelsContainer.innerHTML = carModels.map(model => `
    <div class="model-card">
      <img src="${model.image}" alt="${model.name}" class="model-image">
      <div class="model-info">
        <h3 class="model-name">${model.name}</h3>
        <div class="model-price">${model.price}</div>
        <div class="model-specs">
          ${model.specs.map(spec => `<span class="spec-item">${spec}</span>`).join("")}
        </div>
        <p class="model-description">${model.description}</p>
        <button class="model-btn">INQUIRE NOW</button>
      </div>
    </div>
  `).join("");
  

  // Open modal
  btn.addEventListener("click", () => {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Close when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}


// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  setupModelsModal();
  // ... other initializations
});

// Mobile menu toggle (if needed)
const setupMobileMenu = () => {
    const menuToggle = document.querySelector('.fa-bars');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Add mobile menu toggle functionality here
            console.log('Mobile menu toggled');
        });
    }
};

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupVideoFallback();
    setupContactForm();
    setupMobileMenu();
});