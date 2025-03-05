/* Burger */
function toggleMenu() {
    document.querySelector(".mobile-nav").classList.toggle("active");
  }
  

/* Particles */
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80, // Nombre de particules
        density: {
          enable: true,
          value_area: 800 // Aire d'effet des particules
        }
      },
      color: {
        value: "#514b82" // Couleur des particules
      },
      shape: {
        type: "circle", // Forme des particules
      },
      opacity: {
        value: 0.5, // Opacité des particules
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3, // Taille des particules
        anim: {
          enable: true,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true, // Lignes entre les particules
        distance: 150,
        color: "#514b82", // Couleur des lignes
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none", // Direction des particules
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "window", // Détection des interactions
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // Effet de répulsion lors du survol
        },
        onclick: {
          enable: true,
          mode: "push" // Effet de "pousser" lors d'un clic
        }
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  