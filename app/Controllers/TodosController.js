import { appState } from "../AppState.js";
import { todosService } from "../Services/ToDosService.js";
import { getFormData } from "../Utils/FormHandler.js";
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

    async createTodo() {
        try {
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            const form = window.event.target
            const formData = getFormData(form)
            await todosService.createTodo(formData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error.message)
            console.error('[createTodo]', error)
        }

    }
}