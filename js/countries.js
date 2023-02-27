const loadCountries = () => {
	fetch("https://restcountries.com/v3.1/all")
		.then((res) => res.json())
		.then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
	console.log(countries);
	const countriesId = document.getElementById("countries");

	// for (const country of countries) {
	// 	console.log(country);
	// }

	countries.forEach((country) => {
		console.log(country.cca2);
		const countryDiv = document.createElement("div");
		countryDiv.classList.add("nation");
		countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : "No Capital"}</p>
		<button onclick="loadCountriesDetails('${country.cca2}')">Details</button>
        `;
		countriesId.appendChild(countryDiv);
	});
};

const loadCountriesDetails = (code) => {
	// https://restcountries.com/v3.1/alpha/{code}
	const url = `https://restcountries.com/v3.1/alpha/${code}`;

	fetch(url)
		.then((res) => res.json())
		.then((data) => displayCountriesDetails(data[0]));

	// console.log("coming details soon", data);
};

const displayCountriesDetails = (country) => {
	const detailContainer = document.getElementById("country-details");
	detailContainer.innerHTML = `
	<h3>Name: ${country.name.common}
	</h3>
	<img src="${country.flags.png}">

	`;
};

loadCountries();
