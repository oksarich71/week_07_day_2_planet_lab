const PubSub = require("../helpers/pub_sub.js");

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe("Planets:all-planets-ready", (evt) => {
    const allPlanets = evt.detail;
    this.populate(allPlanets)
  });
  this.element.addEventListener("click", (evt) => {
    event.preventDefault();
    const selectedIndex = evt.target.id;
    console.log("element", this.element)
    console.log("selected index:", selectedIndex)
    PubSub.publish("SelectView:change", selectedIndex);
  });
};

SelectView.prototype.populate = function (planetsData) {
  planetsData.forEach((planet, index) => {
    const option = document.createElement("option");
    option.textContent = planet.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectView;
