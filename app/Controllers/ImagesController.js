import { appState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawImg() {
    setHTML
    document.body.style.backgroundImage = `url(${appState.imgUrl})`
}

export class ImagesController {
    constructor() {
        this.getImage()
        appState.on('imgUrl', _drawImg)
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