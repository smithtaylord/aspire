import { appState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js"

class ImagesService {
    getTime() {
        let time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        appState.time = time
        appState.emit('time')
    }
    async getImage() {
        const res = await sandboxApi.get('/api/images')
        // console.log(res.data);
        appState.imgUrl = res.data.largeImgUrl
    }


}

export const imagesService = new ImagesService()