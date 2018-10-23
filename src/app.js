const SelectView = require('./views/select_view.js');
const DisplayView = require('./views/display_view.js');
const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

 const planetsDataSource = new SolarSystem(planetsData);
  planetsDataSource.bindEvents();

  const selectElement = document.querySelector(".planets-menu ol");
  const planetList = new SelectView(selectElement);
  planetList.bindEvents()

  const infoDiv = document.querySelector("section.planet-details");
  const planetInfoDisplay = new DisplayView(infoDiv);
  planetInfoDisplay.bindEvents()
});
