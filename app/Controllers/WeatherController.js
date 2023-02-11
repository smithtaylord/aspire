import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawWeather() {
    // @ts-ignore
    let template = appState.weather.WeatherCard
    setHTML('weather', template)
    // @ts-ignore
    let tempType = appState.tempType == 'C' ? `<h3>${appState.weather.tempC} °C </h3>` : `<h3>${appState.weather.tempF} °F </h3>`
    setHTML('temp-type', tempType)


}


export class WeatherController {
    constructor() {
        this.getWeather()
        appState.on('weather', _drawWeather)
        appState.on('tempType', _drawWeather)
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error.message)
            console.error('[get weather]', error)
        }
    }
    tempToggle() {
        try {
            weatherService.tempToggle()
        } catch (error) {
            Pop.error(error.message)
            console.error('[temp toggle}', error)
        }
    }
}