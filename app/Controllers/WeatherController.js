import { weatherService } from "../Services/WeatherService.js";
import { Pop } from "../Utils/Pop.js";

function _drawWeather() {

}

export class WeatherController {
    constructor() {
        this.getWeather()
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