particlesJS("particle", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#001f3f"
      },
      shape: {
        type: "circle",
        random: true,
        stroke: {
          width: 0,
          color: "#001f3f"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.51,
        random: false,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: false,
          speed_min: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#001f3f",
        opacity: .3,
        width: 1
      },
      move: {
        enable: true,
        speed_min: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: { distance: 200, size: 40, duration: 1, opacity: 8, speed: 1 },
        repulse: {
          distance: 100,
          duration: 0.8
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: false
  });
  