import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"

class TodosService {
    toggleChevron() {
        if (appState.chevron == 'up') {
            appState.chevron = 'down'
        } else {
            appState.chevron = 'up'
        }
    }
    async checkTodo(todoId) {
        const todoIndex = appState.todos.findIndex(t => t.id == todoId)
        const foundTodo = appState.todos[todoIndex]
        // console.log(foundTodo);
        const res = await sandboxApi.put(`/api/taylord/todos/${todoId}`, { completed: !foundTodo.completed })
        // console.log('[edit todo]', res.data);
        appState.todos.splice(todoIndex, 1, new Todo(res.data))
        appState.emit('todos')

    }
    async destroyTodo(todoId) {
        const res = await sandboxApi.delete(`/api/taylord/todos/${todoId}`)
        // console.log('[destroyTodo]', res.data);
        let todoIndex = appState.todos.findIndex(t => t.id == todoId)
        appState.todos.splice(todoIndex, 1)
        appState.emit('todos')
    }
    async createTodo(formData) {
        const res = await sandboxApi.post('/api/taylord/todos', formData)
        // console.log('[create todo]', res.data);
        let newTodo = new Todo(res.data)
        appState.todos.push(newTodo)
        appState.emit('todos')
    }
    async getTodos() {
        const res = await sandboxApi.get('/api/taylord/todos')
        // console.log('[getTodos]', res.data);
        appState.todos = res.data.map(t => new Todo(t))
        // console.log('[TODOS, not POJOS]', appState.todos);
    }

}

export const todosService = new TodosService()