import { appState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawImg() {

    document.body.style.backgroundImage = `url(${appState.imgUrl})`
}
function _drawTime() {
    setText('time', appState.time)
    setText('date', appState.date)
}

export class ImagesController {
    constructor() {
        this.getImage()
        this.getTime()
        appState.on('imgUrl', _drawImg)
        appState.on('time', _drawTime)
        setInterval(this.getTime, 1000)
    }

    async getImage() {
        try {
            await imagesService.getImage()
        } catch (error) {
            Pop.error(error.message)
            console.error('[get Image]', error)
        }
    }

    getTime() {
        imagesService.getTime()
    }
}