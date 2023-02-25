const loadData = () => {
	fetch("https://api.kanye.rest/")
		.then((res) => res.json())
		.then((data) => displayData(data));
};

const displayData = (quote) => {
	const quoteContainer = document.getElementById("quote");
	quoteContainer.innerHTML = quote.quote;
};

loadData();
