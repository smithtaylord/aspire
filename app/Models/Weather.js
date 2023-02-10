export class Weather {
    constructor(data) {
        this.temp = data.main.temp
        this.description = data.weather[0].description
        this.icon = data.weather[0].icon
    }

    get WeatherCard() {
        return `
            <div class="">
                <h3 selectable>${this.temp} c</h3>
                <h3>${this.description}</h3>
                <img src="https://openweathermap.org/img/w/${this.icon}.png" alt="">
            </div>
        
        `
    }

}