import { ImagesController } from "./Controllers/ImagesController.js";
import { TodosController } from "./Controllers/ToDosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();
  todosController = new TodosController()
  imagesController = new ImagesController()
  weatherController = new WeatherController()
}

window["app"] = new App();
