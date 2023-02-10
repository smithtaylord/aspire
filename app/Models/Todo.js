export class Todo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.description = data.description
    }


    get TodoTemplate() {
        return `
        <div class="d-flex justify-content-between align-items-baseline px-2">
            <div class="mb-3 form-check">
              <input ${this.completed ? 'checked' : ''}  type="checkbox" class="form-check-input" id="exampleCheck1">
              <label>${this.description}</label>
            </div>
            <i class="mdi mdi-delete-circle text-danger selectable fs-4" onclick=""></i>
          </div>
          `
    }
}