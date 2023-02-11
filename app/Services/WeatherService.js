import { sandboxApi } from "./AxiosService.js"
import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";

class WeatherService {
    tempToggle() {
        let tempType = appState.tempType
        if (tempType == 'C') {
            appState.tempType = 'F'
        } else {
            appState.tempType = 'C'
        }

    }
    async getWeather() {
        const res = await sandboxApi.get('/api/weather')
        // @ts-ignore
        appState.weather = new Weather(res.data)
    }

}

export const weatherService = new WeatherService()