import { appState } from "../AppState.js";
import { todosService } from "../Services/ToDosService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTodos() {
    let template = ''
    appState.todos.forEach(t => template += t.TodoTemplate)
    setHTML('todo-list-items', template)
}

export class TodosController {
    constructor() {
        this.getTodos()
        appState.on('todos', _drawTodos)
    }

    async getTodos() {
        try {
            await todosService.getTodos()
        } catch (error) {
            Pop.error(error.message)
            console.error('[getTodos]', error)
        }
    }
}