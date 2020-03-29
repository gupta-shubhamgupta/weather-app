window.onload=function(){

	
	
submit.addEventListener("click", function(e){
	var city=document.getElementById("plain");
	getdata(city.value);
})
display=document.getElementById('display');

function getdata(cityname){
	url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4e3eae26ea3aecc20073617c430ce26e`;
	
	fetch(url) .then(response => response.json())
	/*.then(data => {console.log(data.name), console.log(Math.floor(v=data.main.temp-273)) })*/	
	.then(data => {
		console.log(data.cod)
		if(data.cod==404){
			app.innerHTML="<h3>City Not Found</h3>"
		}
		else{
			
			display.innerHTML =""
			display.innerHTML += "<div><img id='weather-icon' src='' alt='icon' /></div>"
			display.innerHTML +="<div><h3>"+data.name+", "+data.sys.country+"</h3></div>"
			display.innerHTML += "<div><h1>"+Math.floor(data.main.temp-273)+ "&deg;C<h1></div>"
    
    /*document.getElementById("weater-icon").setAttribute("src","https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png");*/
    document.getElementById("weather-icon").setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
		}
  })
	
	
		
}

}


