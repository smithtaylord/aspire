export class Todo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.description = data.description
    }


    get TodoTemplate() {
        return `
        <div class="d-flex justify-content-between align-items-center px-2  rounded my-1">
            <div class="mb-1 form-check">
                <input ${this.completed ? 'checked' : ''}  type="checkbox" class="form-check-input" id="exampleCheck1" onchange="app.todosController.checkTodo('${this.id}')">
                <label class="${this.completed ? "marked-off" : ""}">${this.description}</label>
            </div>
        <i class="mdi mdi-delete-circle selectable fs-4 px-2" onclick="app.todosController.destroyTodo('${this.id}')"></i>
    </div>
        `
    }
}