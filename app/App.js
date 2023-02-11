import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TodosController } from "./Controllers/ToDosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();
  todosController = new TodosController()
  imagesController = new ImagesController()
  weatherController = new WeatherController()
  quotesController = new QuotesController()
}

window["app"] = new App();
