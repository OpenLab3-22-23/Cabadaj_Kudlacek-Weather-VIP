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
		<h4 class="city">Bratislava</h4>
		<div class="celsius">19°C</div>
		<div class="temp">Sunny</div>
		<div class="days">18.10.2022</div>

		<div class="cover">
			<div class="box">
				<h4 class="day">Wednesday</h4>
				<h4 class="value">20°C</h4>
			</div>
			<div class="box">
				<h4 class="day">Thursday</h4>
				<h4 class="value">21°C</h4>
			</div>
		<br>
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

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7086ebf5a7mshfdff4f9d6868d3ep193a9bjsna773559ed875',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

