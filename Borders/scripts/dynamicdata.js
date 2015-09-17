// configuration
var countries = ["US","UK","Israel","Confirmed","Class","Oakton","Church","Document Write Users","Back Space Users","Island","Horizontal List Users", "LEL"]
var data = [300000000, 600000000,393048238,0,18,9999,485095,18,18,1,18,1337];
var length = countries.length;
var half = length / 2;
var secondQuarter = length - 2;
var lastTwo = length - 2;

var dynData = null;
setTimeout(function() {
dynData = document.getElementById("dynData");
var rowOne = document.createElement("tr");
var rowOneData = document.createElement("td");
rowOneData.innerHTML = "Loading...";
rowOne.appendChild(rowOneData);
rowOne.appendChild(document.createElement("td"));
dynData.appendChild(rowOne);

// pair the countries with such order!
countryPairs = {};
for (var g = 0; g < data.length; g++) {
	var pop = data[g];
	while(countryPairs.hasOwnProperty(pop)) {
		pop += 1;
	}
	countryPairs[pop] = countries[g];
}

// quick-sort the entries
data.sort(function(a, b) { return a < b; });



// simulate data loading..
addedCountries = {};
setTimeout(function() {
	var elements = dynData.getElementsByTagName("td");
	for (var i = 0; i < elements.length; i++) {
		if (dynData.getElementsByTagName("td")[i].innerHTML == "Loading...") {
			//dynData.getElementsByTagName("td")[i].innerHTML = "AMG DYNAMIC";
			//dynData.getElementsByTagName("td")[i+1].innerHTML = "435984370895743";
			dynData.getElementsByTagName("td")[i+1].parentNode.removeChild(dynData.getElementsByTagName("td")[i+1]);
			dynData.getElementsByTagName("td")[i].parentNode.removeChild(dynData.getElementsByTagName("td")[i]);
		}
	}
	for (var i = 0; i < half; i++) {
		var country = countryPairs[data[i]];
		var origPop = data[i];
		var pop = data[i];

		// horrible way to determine sorted dupes..
		while (addedCountries.hasOwnProperty(country)) {
			pop += 1;
			country = countryPairs[pop];
		}

		addedCountries[country] = true;
		pop = origPop;
		add_data(country, pop);
	}
}, 2000);
setTimeout(function() {
	for (var i = half; i < secondQuarter; i++) {
		var country = countryPairs[data[i]];
		var origPop = data[i];
		var pop = data[i];

		while (addedCountries.hasOwnProperty(country)) {
			pop += 1;
			country = countryPairs[pop];
		}

		addedCountries[country] = true;
		pop = origPop;
		add_data(country, pop);
	}
}, 4000);
setTimeout(function() {
	for (var i = lastTwo; i < length; i++) {
		var country = countryPairs[data[i]];
		var origPop = data[i];
		var pop = data[i];

		while (addedCountries.hasOwnProperty(country)) {
			pop += 1;
			country = countryPairs[pop];
		}

		addedCountries[country] = true;
		pop = origPop;
		add_data(sccountry, pop);
	}

	// Remove cursor waiting.
	//document.getElementById("pls").innerHTML = document.getElementById("pls").innerHTML.replace("cursor: wait", "");
}, 6000);


}, 50);


function add_data(dyn_data, pop) {
var row = document.createElement("tr");
var rowOne = document.createElement("td");
var rowTwo = document.createElement("td");
rowOne.innerHTML = dyn_data;
rowTwo.innerHTML = pop;
row.appendChild(rowOne);
row.appendChild(rowTwo);
dynData.appendChild(row);
}
