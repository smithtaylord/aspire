import { appState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js";
import { Pop } from "../Utils/Pop.js";
import { setText } from "../Utils/Writer.js";


function _drawQuotes() {
    setText('quote-content', appState.quoteContent)
    setText('quote-author', appState.quoteAuthor)
}
export class QuotesController {

    constructor() {
        this.getQuotes()
        appState.on('quoteAuthor', _drawQuotes)
    }



    async getQuotes() {
        try {
            await quotesService.getQuotes()
        } catch (error) {
            Pop.error(error.message)
            console.error('[getQuotes]', error
            )
        }
    }
}