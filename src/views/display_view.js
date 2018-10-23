const PubSub = require("../helpers/pub_sub.js");

const DisplayView = function (container) {
  this.container = container;
};

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe("Planets:selected-planet-ready", (evt) => {
    const planet = evt.detail;
    this.render(planet);
  });
};

DisplayView.prototype.render = function (planet) {
  const infoParagraph = document.createElement("p");
  infoParagraph.textContent =
  `<h1> ${planet.name}</h1> <br>
    Day: ${planet.day} Earth Days <br>
    Orbit: ${planet.orbit} Earth Days <br>
    Surface Area: ${planet.surfaceArea} earths <br>
    Volume: ${planet.volume} earths <br>
    Gravity: ${planet.gravity}g <br>
    Moons: ${planet.moons} <br>
    <img src="./images/${planet.image}"/>`
    this.container.innerHTML = "";
    this.container.appendChild(infoParagraph);
};



module.exports = DisplayView;
