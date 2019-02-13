particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": false,
        "value_area": 100
      }
    },
    "color": {
      "value": "#7CFFEB"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 2,
        "color": "#A7DBD8"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "",
        "width": 0,
        "height": 0
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.2,
        "opacity_min": 0.16,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "size_min": 5,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 80,
      "color": "#A7DBD8",
      "opacity": 1,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 100,
        "size": 50,
        "duration": 5,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 50,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);;
