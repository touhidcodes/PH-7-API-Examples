const searchMeal = () => {
	const search = document.getElementById("input-meal").value;
	loadMeal(search);
};
const loadMeal = (search) => {
	const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayMeal(data.meals));
};

const displayMeal = (meals) => {
	const mealsContainer = document.getElementById("meals-container");
	mealsContainer.innerHTML = "";
	meals.forEach((meal) => {
		const mealDiv = document.createElement("div");
		mealDiv.classList.add("col");
		mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
                 <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                       Launch demo modal
                 </button>
            </div>
        </div>
        `;
		mealsContainer.appendChild(mealDiv);
	});
};
