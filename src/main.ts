import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<body>

<h1>Weather VIP<h1>
  <div class="formular">
    <input type="text" class="search-bar">
    <button type="button" class="btn">SUBMIT</button>
  <div>
  <div class="weather">
    <h2 class="weather-in">Bratislava<h2>
  <div>

<body>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '265458dc26mshd71e846de467509p1b1d2ajsn1a506b5793a0',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
