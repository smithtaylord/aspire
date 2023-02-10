import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"

class TodosService {
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