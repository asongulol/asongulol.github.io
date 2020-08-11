const url = "https://api.spacexdata.com/v2/launchpads";
// make an API call to spaceX
spaceXResults = d3.json(url).then(spaceXResults => console.log(spaceXResults));
// Get Vandenburg name only
d3.json(url).then(spaceXResults => console.log(spaceXResults[5].full_name));
// Get Vandenburg Latitude
spaceXResults => console.log([spaceXResults.latitude, spaceXResults.longitude]);
// Use map() to print latitude and longtitude to console
