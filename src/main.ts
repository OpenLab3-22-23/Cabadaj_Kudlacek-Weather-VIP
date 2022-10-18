import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<body>
<div class="container">
	<h2 class="nadpis">Weather VIP<h2>
	<div class="formular">
		<input type="text" class="search-bar" placeholder="Search for a city... ">
    	<button type="button" class="btn">submit</button>
	</div>

	<div class="today">
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