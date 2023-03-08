const checkComplete = (id) => {
  const i = document.createElement("i"); //Creamos el elemento "i(HTML)"
  i.classList.add("far", "fa-check-square", "icon"); // Damos estilo al elemento
  i.addEventListener("click", (event) => completeTask(event, id));
  return i; // Retornamos el elemento
};

const completeTask = (event, id) => {// Funcion que modifica los estilos del elemento "i(HTML)" cuando es clickeado
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const index = tasks.findIndex((item) => item.id === id);
  tasks[index]["complete"] = !tasks[index]["complete"];
  
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export default checkComplete;
