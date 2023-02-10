import { sandboxApi } from "./AxiosService.js"
import { appState } from "../AppState.js";
import { Weather } from "../Models/Weather.js";

class WeatherService {
    async getWeather() {
        const res = await sandboxApi.get('/api/weather')
        console.log('[getting the weather]', res.data);
        appState.weather = new Weather(res.data)
        console.log(appState.weather);
    }

}

export const weatherService = new WeatherService()