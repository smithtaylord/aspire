import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather() {
    let template = appState.weather.WeatherCard
    setHTML('weather', template)
}

export class WeatherController {
    constructor() {
        this.getWeather()
        appState.on('weather', _drawWeather)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error.message)
            console.error('[get weather]', error)
        }
    }
}