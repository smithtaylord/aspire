import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawTodos() {

    if (!appState.user) {
        // @ts-ignore
        document.querySelector('header').classList.add('d-none')
        // @ts-ignore
        document.querySelector('main').classList.add('d-none')
        // @ts-ignore
        document.querySelector('footer').classList.add('d-none')
        // @ts-ignore
        document.getElementById('log-in').classList.remove('d-none')
    } else {
        let template = ''
        appState.todos.forEach(t => template += t.TodoTemplate)
        setHTML('todo-list-items', template)
        let count = appState.todos.filter(t => t.completed == false)
        setText('todoCount', `${count.length}`)
        // @ts-ignore
        document.querySelector('header').classList.remove('d-none')
        // @ts-ignore
        document.querySelector('main').classList.remove('d-none')
        // @ts-ignore
        document.querySelector('footer').classList.remove('d-none')
        // @ts-ignore
        document.getElementById('log-in').classList.add('d-none')
        // @ts-ignore
        document.getElementById('welcome').classList.remove('hidden')

        setText('welcome', `Welcome, ${appState.user}`)
        setTimeout(() => {
            // @ts-ignore
            document.getElementById('welcome').classList.add('hidden')
        }, 3000);
    }
}

function _flipChevron() {
    // @ts-ignore
    appState.chevron == 'up' ? document.getElementById('chevron').classList.remove('mdi-chevron-down') : document.getElementById('chevron').classList.remove('mdi-chevron-up')
    // @ts-ignore
    appState.chevron == 'up' ? document.getElementById('chevron').classList.add('mdi-chevron-up') : document.getElementById('chevron').classList.add('mdi-chevron-down')
}


export class TodosController {
    constructor() {
        this.getTodos()
        appState.on('todos', _drawTodos)
        appState.on('chevron', _flipChevron)
        appState.on('user', this.getTodos)
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
            console.error('[destroy Todo]', error)
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

    toggleChevron() {
        todosService.toggleChevron()
    }

    setUser() {
        try {
            // @ts-ignore
            window.event.preventDefault()
            // @ts-ignore
            const form = window.event.target
            const formData = getFormData(form)
            todosService.setUser(formData)
            // @ts-ignore
            form.reset()
        } catch (error) {
            Pop.error(error.message)
            console.error('[set user]', error)
        }
    }

    async logOut() {
        try {
            const yes = await Pop.confirm('Confirm Logout?')
            if (!yes) { return }
            todosService.logOut()
        } catch (error) {
            Pop.error(error.message)
        }
    }
}