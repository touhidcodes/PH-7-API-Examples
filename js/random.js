const loadUser = () => {
	fetch("https://randomuser.me/api/")
		.then((res) => res.json())
		.then((data) => displayUser(data));
};

const displayUser = (user) => {
	console.log(user);
	const info = document.getElementById("info");
	const pic = document.createElement("div");
	pic.innerHTML = `
<img src="${user.results[0].picture.large}" alt="">
 `;
 info.appendChild(pic)
	document.getElementById(
		"name"
	).innerText = `${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`;

	document.getElementById("gender").innerText = user.results[0].gender;

	document.getElementById("dob").innerText = user.results[0].dob.date;

	document.getElementById("email").innerText = user.results[0].email;

	document.getElementById("cell").innerText = user.results[0].cell;

	document.getElementById(
		"address"
	).innerText = `${user.results[0].location.city}, ${user.results[0].location.state}, ${user.results[0].location.country}, ${user.results[0].location.postcode}`;
};

loadUser();
