import { addtask } from "./Components/addTask.js";
import { displayTasks } from "./Components/readTasks.js";

const btn = document.querySelector("[data-form-btn]");

btn.addEventListener("click", addtask);

displayTasks();
