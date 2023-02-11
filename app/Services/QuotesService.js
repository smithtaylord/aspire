import { appState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"

class QuotesService {
    async getQuotes() {
        const res = await sandboxApi.get('/api/quotes')
        console.log('[get quotes]', res.data)
        appState.quoteContent = res.data.content
        appState.quoteAuthor = res.data.author
    }


}


export const quotesService = new QuotesService()