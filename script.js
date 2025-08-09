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

const showrooms = [
            {
                name: "Showroom Purwokerto",
                lat: -7.43454,
                lng: 109.24372
            },
            {
                name: "Showroom Jakarta Pusat",
                lat: -6.186486,
                lng: 106.834091
            },
            {
                name: "Showroom Bandung",
                lat: -6.914744,
                lng: 107.609810
            },
            {
                name: "Showroom Yogyakarta",
                lat: -7.801194,
                lng: 110.364917
            }
        ];

        // Fungsi Haversine untuk hitung jarak antar koordinat
        function hitungJarak(lat1, lng1, lat2, lng2) {
            const R = 6371; // Radius bumi dalam km
            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lng2 - lng1);
            const a =
                Math.sin(dLat / 2) ** 2 +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
                Math.sin(dLon / 2) ** 2;
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return R * c;
        }

        function toRad(value) {
            return (value * Math.PI) / 180;
        }  

        // Fungsi utama
        function cariShowroomTerdekat() {
            const mapsContainer = document.getElementById('maps-container');
            const mapsFrame = document.getElementById('maps-frame');
            const directionsLink = document.getElementById('directions-link');
            const errorMsg = document.getElementById('error-msg');
            const showroomName = document.getElementById('showroom-name');

    if (!navigator.geolocation) {
        errorMsg.textContent = "Browser Anda tidak mendukung geolokasi.";
        return;
    }

    navigator.geolocation.getCurrentPosition(
    (pos) => {
      const userLat = pos.coords.latitude;
      const userLng = pos.coords.longitude;

        // Cari showroom terdekat
        let nearest = null;
        let minDistance = Infinity;

            for (const showroom of showrooms) {
                const jarak = hitungJarak(userLat, userLng, showroom.lat, showroom.lng);
                    if (jarak < minDistance) {
                    minDistance = jarak;
                    nearest = showroom;
                    }
            }

                    if (nearest) {
                    showroomName.textContent = nearest.name;

                        const embedURL = `https://maps.google.com/maps?q=${encodeURIComponent(nearest.name)}@${nearest.lat},${nearest.lng}&z=15&output=embed`;
                        mapsFrame.src = embedURL;

                        const directionURL = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${nearest.lat},${nearest.lng}&travelmode=driving`;
                        directionsLink.href = directionURL;

                        mapsContainer.style.display = "block";
                        errorMsg.textContent = "";
                    } else {
                        errorMsg.textContent = "Tidak ada showroom ditemukan.";
                     }
    },
            (err) => {
                errorMsg.textContent = "Tidak dapat mengakses lokasi. Izinkan akses lokasi pada browser Anda.";
            }
    );
        }