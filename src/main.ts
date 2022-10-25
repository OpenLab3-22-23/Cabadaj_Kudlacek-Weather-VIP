import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<body>
<div class="container">
	<h2 class="nadpis">Weather VIP<h2>
	<div class="formular">
		<input type="text" class="search-bar" placeholder="Search for a city... ">
    	<button type="button" class="btn">submit</button>
	</div>

	<div class="today">
	<div class="now">
	<img src="https://openweathermap.org/img/wn/04n.png" alt="" class="iconweather" />
	  <div class="now_info">
		<h4 class="city">....</h4>
		<div class="temp">°C</div>
		<div class="windspeed">6.2 km/h</div>
		<div class="typeOfWeather">Sunny</div>

	  </div>
	  </div>
		<div class="cover">


			<div class="box">
				<h4 class="day">Wednesday</h4>
				<h4 class="value">20°C</h4>
			</div>
			<div class="box">
				<h4 class="day">Thursday</h4>
				<h4 class="value">21°C</h4>
			</div>
			<div class="box">
				<h4 class="day">Friday</h4>
				<h4 class="value">18°C</h4>
			</div>
			<div class="box">
				<h4 class="day">Saturday</h4>
				<h4 class="value">19°C</h4>
			</div>
		</div>
		

</div>
</body>
`


let weather = {
	apiKey: "4ed9898ef0d4415dd8423a2a74b26ef8",
	fetchWeather: function (city) {
	  fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" +
		  city +
		  "&units=metric&appid=" +
		  this.apiKey
	  )
		.then((response) => {
		  if (!response.ok) {
			alert("No weather found.");
			throw new Error("No weather found.");
		  }
		  return response.json();
		})
		.then((data) => this.displayWeather(data));
	},
	displayWeather: function (data) {
	  const { name } = data;
	  const { temp } = data.main;
	  const { speed } = data.wind;
	  const { icon, description } = data.weather[0];
	  document.querySelector(".city")!.innerText =   name;
	  document.querySelector(".temp")!.innerText = temp + "°C";
	  document.querySelector(".windspeed")!.innerText = speed + " km/h";
	  document.querySelector(".typeOfWeather")!.innerText = description;
	  document.querySelector(".iconweather").src ="https://openweathermap.org/img/wn/" + icon + ".png";
	  
	},
	search: function () {
	  this.fetchWeather(document.querySelector(".search-bar")!.value);
	},
  };
  
  document.querySelector(".btn")!.addEventListener("button", function () {
	weather.search();
  });
  
  document
	.querySelector(".search-bar")
	.addEventListener("keyup", function (event) {
	  if (event.key == "Enter") {
		weather.search();
	  }
	});
	weather.fetchWeather("...");
