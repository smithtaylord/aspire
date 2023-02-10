import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";

export class ImagesController {
    constructor() {
        this.getImage()
    }

    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            Pop.error(error.message)
            console.error('[get Image]', error)
        }
    }
}