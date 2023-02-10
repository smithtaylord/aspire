import { appState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"

class TodosService {
    async getTodos() {
        const res = await sandboxApi.get('/api/taylor/todos')
        // console.log('[getTodos]', res.data);
        appState.todos = res.data.map(t => new Todo(t))
        // console.log('[TODOS, not POJOS]', appState.todos);
    }

}

export const todosService = new TodosService()