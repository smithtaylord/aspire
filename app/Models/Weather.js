export class Weather {
    constructor(data) {
        this.tempC = Math.round((data.main.temp) - 273.15)
        this.tempF = Math.round(((data.main.temp) - 273.15) * (9 / 5) + 32)
        this.description = data.weather[0].description
        this.icon = data.weather[0].icon
    }

    get WeatherCard() {
        return `
            <div selectable class="weather-card" onclick="app.weatherController.tempToggle()">
                <div id="temp-type"></div>
                <h3>${this.description}</h3>
                <img src="https://openweathermap.org/img/w/${this.icon}.png" alt="">
            </div>
        
        `
    }

}