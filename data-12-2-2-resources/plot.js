console.log(cityGrowths);
// sort cities by growth, descending order
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
var sortedPop = cityGrowths.sort((a,b) => a.population - b.population).reverse();
// select top Seven cities
var topSevenCities = sortedCities.slice(0,7);
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));
var topSevenPop = sortedPop.slice(0,7);
var topSevenCityPopNames = topSevenPop.map(city => city.City);
var topSevenCityPop = topSevenPop.map(city => parseInt(city.population));
var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var trace1 = {
    x: topSevenCityPopNames,
    y: topSevenCityPop,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Fastest Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population"}
  };
  var data1 = [trace1];
  var layout1 = {
    title: "Largest Cities by Population",
    xaxis: { title: "City" },
    yaxis: { title: "Population"}
  };
  Plotly.newPlot("bar-plot", data, layout);
  Plotly.newPlot("bar-plot1", data1, layout1);
  console.log(sortedPop);