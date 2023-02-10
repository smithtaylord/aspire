import { appState } from "../AppState.js";
import { sandboxApi } from "./AxiosService.js"

class ImagesService {
    async getImage() {
        const res = await sandboxApi.get('/api/images')
        console.log(res.data);
        appState.imgUrl = res.data.largeImgUrl
    }


}

export const imagesService = new ImagesService()