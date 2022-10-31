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
				<h4 class="day_1" id="day">Wednesday</h4>
				<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" class="icon_1" id="icon_days" />
				<h4 class="temp_1" id="temp">...</h4>
			</div>
			<div class="box">
				<h4 class="day_2" id="day">Thursday</h4>
				<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" class="icon_2" id="icon_days" />
				<h4 class="temp_2" id="temp">...</h4>
			</div>
			<div class="box">
				<h4 class="day_3" id="day">Friday</h4>
				<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" class="icon_3" id="icon_days" />
				<h4 class="temp_3" id="temp">...</h4>
			</div>
			<div class="box">
				<h4 class="day_4" id="day">Saturday</h4>
				<img src="https://openweathermap.org/img/wn/04n.png" alt="Ikona pocasia" class="icon_4" id="icon_days" />
				<h4 class="temp_4" id="temp">...</h4>
			</div>
		</div>
		

</div>
</body>
`


let weather = {
	apiKey: "4ed9898ef0d4415dd8423a2a74b26ef8",
	fetchWeather: function (city) {
	  fetch(
		"https://api.openweathermap.org/data/2.5/forecast?q=" +
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
	
	  document.querySelector(".city")!.innerText = data.city.name;
	  document.querySelector(".temp")!.innerText = data.list[0].main.temp + "°C";
	  document.querySelector(".windspeed")!.innerText = data.list[0].wind.speed + " km/h";
	  document.querySelector(".typeOfWeather")!.innerText = data.list[0].weather[0].description;
	  document.querySelector(".iconweather").src ="https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";

	  document.querySelector(".day_1")!.innerText =  data.list[7].dt_txt;
	  document.querySelector(".day_2")!.innerText =  data.list[15].dt_txt;
	  document.querySelector(".day_3")!.innerText =  data.list[23].dt_txt;
	  document.querySelector(".day_4")!.innerText =  data.list[31].dt_txt;

	  document.querySelector(".icon_1").src ="https://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + ".png";
	  document.querySelector(".icon_2").src ="https://openweathermap.org/img/wn/" + data.list[15].weather[0].icon + ".png";
	  document.querySelector(".icon_3").src ="https://openweathermap.org/img/wn/" + data.list[23].weather[0].icon + ".png";
	  document.querySelector(".icon_4").src ="https://openweathermap.org/img/wn/" + data.list[31].weather[0].icon + ".png";

	  document.querySelector(".temp_1")!.innerText =   data.list[7].main.temp + "°C";
	  document.querySelector(".temp_2")!.innerText =   data.list[15].main.temp + "°C";
	  document.querySelector(".temp_3")!.innerText =   data.list[23].main.temp + "°C";
	  document.querySelector(".temp_4")!.innerText =   data.list[31].main.temp + "°C";
	  
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
