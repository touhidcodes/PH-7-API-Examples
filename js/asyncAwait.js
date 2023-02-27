const loadData = async (id) => {
	const url = `https://www.themealdb.com/api/json/v1/1/`;
	try {
		const res = await fetch(url);
		const data = res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
