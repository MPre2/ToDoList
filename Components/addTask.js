//Importamos los modulos necesarios
import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";

//Arrow Function
export const addtask = (evento) => {
  evento.preventDefault();

  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const value = input.value; // Tomamos el valor del objeto INPUT
  const date = calendar.value; // Tomamos el valor del objeto DATE
  const dateFormat = moment(date).format("DD/MM/YYYY");

  if (value === "" || date === "") {// Si se "value" o "date" son vacio corta el bloque
    return;
  }

  input.value = ""; // Establecemos el valor de INPUT en "vacio"
  calendar.value = ""; // Establecemos el valor de CALENDAR en "vacio"

  const complete = false;

  const taskObject = {
    //Array
    value,
    dateFormat,
    complete,
    id: uuid.v4(),
  };

  list.innerHTML = ""; // Inicializamos a vacio

  const taskList = JSON.parse(localStorage.getItem(`tasks`)) || []; // Cuando no se cumpla una condicion salta a la otra "||" significa "O"
  taskList.push(taskObject);
  localStorage.setItem("tasks", JSON.stringify(taskList)); // Guarda datos en el navegador de manera local y no de instancia

  displayTasks();
};

//Arrow Function
export const createTask = ({ value, dateFormat, complete, id }) => {// Funcion para crear la lista de tareas
  const task = document.createElement("li"); // Creamos el elemento "lista(HTML)"
  task.classList.add("card"); // Le otorgamos el estilo a la lista

  const taskContent = document.createElement("div"); // Creamos el elemento "div(HTML)"

  const check = checkComplete(id);

  if (complete) {
    check.classList.toggle("fas");
    check.classList.toggle("completeIcon");
    check.classList.toggle("far");
  }

  const titleTask = document.createElement("span"); // Creamos el elementoo "span(HTML)"
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);

  const dateElement = document.createElement("span");
  dateElement.innerHTML = dateFormat;

  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon(id));
  return task;
};
