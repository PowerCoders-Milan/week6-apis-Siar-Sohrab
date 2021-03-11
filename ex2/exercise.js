fetch("http://api.openweathermap.org/data/2.5/weather?q=Kabul&appid=f37e3ca0800bd95c9ad66d44db981c43")
.then(response => response.json()) 
.then( data => {
    var body = document.querySelector('body')
    var p = document.createElement("div")
    var p1 = document.createElement("p")
    var p2 = document.createElement("p")
    var p3 = document.createElement("p")
    body.appendChild(p)
    p.appendChild(p1)
    p.appendChild(p2)
    p.appendChild(p3)
    p1.innerHTML = data.name
    p2.innerHTML = data.main.temp
    p3.innerHTML = data.weather[0].description

});

fetch("http://api.openweathermap.org/data/2.5/weather?q=Ivrea&appid=f37e3ca0800bd95c9ad66d44db981c43")
.then(response => response.json()) 
.then( data => {
    var body = document.querySelector('body')
    var p = document.createElement("div")
    var p1 = document.createElement("p")
    var p2 = document.createElement("p")
    var p3 = document.createElement("p")
    body.appendChild(p)
    p.appendChild(p1)
    p.appendChild(p2)
    p.appendChild(p3)
    p1.innerHTML = data.name
    p2.innerHTML = data.main.temp
    p3.innerHTML = data.weather[0].description

});

fetch("http://api.openweathermap.org/data/2.5/weather?q=Milan&appid=f37e3ca0800bd95c9ad66d44db981c43")
.then(response => response.json()) 
.then( data => {
    var body = document.querySelector('body')
    var p = document.createElement("div")
    var p1 = document.createElement("p")
    var p2 = document.createElement("p")
    var p3 = document.createElement("p")
    body.appendChild(p)
    p.appendChild(p1)
    p.appendChild(p2)
    p.appendChild(p3)
    p1.innerHTML = data.name
    p2.innerHTML = data.main.temp
    p3.innerHTML = data.weather[0].description

});