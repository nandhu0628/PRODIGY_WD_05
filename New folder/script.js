const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': 'e50e35e2d2msh291fdd6bee2177cp1e738ajsn1fc6076491d0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather = (city)=>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
		console.log(response)
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
	})
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getweather(city.value)
})

getweather("Seattle");