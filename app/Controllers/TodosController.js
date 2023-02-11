import { appState } from "../AppState.js";
import { todosService } from "../Services/ToDosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawTodos() {
    let template = ''
    appState.todos.forEach(t => template += t.TodoTemplate)
    setHTML('todo-list-items', template)
    let count = appState.todos.filter(t => t.completed == false)
    setText('todoCount', `${count.length} left`)
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
    async destroyTodo(todoId) {
        try {
            if (await Pop.confirm('Are you sure you want to delete this aspiration?')) {
                await todosService.destroyTodo(todoId)
            }
        } catch (error) {
            Pop.error(error.message)
            console.error('[distroy Todo]', error)
        }
    }

    async checkTodo(todoId) {
        try {
            await todosService.checkTodo(todoId)
        } catch (error) {
            Pop.error(error.message)
            console.error('[check todo]', error)
        }
    }
}