import { sandboxApi } from "./AxiosService.js"

class ImagesService {
    async getImage() {
        const res = await sandboxApi.get('/api/images')
        console.log(res.data);
    }


}

export const imagesService = new ImagesService()