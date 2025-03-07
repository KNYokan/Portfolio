/* Burger */
function toggleMenu() {
    document.querySelector(".mobile-nav").classList.toggle("active");
  }
  

/* Particles */
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80, 
        density: {
          enable: true,
          value_area: 800 
        }
      },
      color: {
        value: "#514b82" 
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5, 
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3, 
        anim: {
          enable: true,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true, 
        distance: 150,
        color: "#514b82",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "window", 
      events: {
        onhover: {
          enable: true,
          mode: "repulse" 
        },
        onclick: {
          enable: true,
          mode: "push" 
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
  