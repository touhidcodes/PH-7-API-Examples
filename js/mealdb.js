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
                <h3 class="card-title">${meal.strMeal}</h3>
				<h5>Area: ${meal.strArea}</h5>
				<h5>Category: ${meal.strCategory}</h5>
                 <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                       Details
                 </button>
            </div>
        </div>
        `;
		mealsContainer.appendChild(mealDiv);
	});
};

const loadMealDetails = (id) => {
	const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
	document.getElementById("mealDetailsLabel").innerText = meal.strMeal;

	const modalBody = document.getElementById("mealDetailsBody");
	const modalDetails = document.createElement("div");
	modalDetails.innerHTML = `
	 <img src="${meal.strMealThumb}" class="card-img-top img-fluid mb-2" alt="...">
	 <h5>Ingredients:</h5>
	 <p class='card-text'>${meal.strInstructions}</p>
	`;
	modalBody.appendChild(modalDetails);
};
