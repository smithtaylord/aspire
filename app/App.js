import { TodosController } from "./Controllers/ToDosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  todosController = new TodosController()
}

window["app"] = new App();
