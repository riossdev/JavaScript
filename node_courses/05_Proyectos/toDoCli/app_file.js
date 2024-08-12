import { readFileSync, writeFileSync  } from 'fs'
import { createInterface } from "readline";
import chalk from "chalk";

const tasks = [];
const  DB_FILE = "tasks.txt"

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function saveTask (){
  const data = tasks.map((task) => `${task.task} | ${task.completed}`).join("\n") 
  writeFileSync(DB_FILE, data, "utf-8")
  console.log(chalk.green.bold("Tarea agregada con exito ! \n"));
}

function loadTask(){
  try {
    const data = readFileSync(DB_FILE, "utf-8")
    const lines = data.split("\n")
    tasks.length = 0;

    lines.forEach(line =>{
      if(line.trim() ==! ""){
        const [task, completed] = line.split("|")
        tasks.push({task, completed: completed === true})
      }
      console.log( chalk.green.bold("Las tareas se han cargado desde la bases de datos "))
    })
  } catch (error) {
    console.log( chalk.green.bold("No tines Tareas por hacer "))
    
  }
}



function displayMenu() {
  console.log(chalk.yellow.bold("🚀🚀🚀 To Do App 🚀🚀🚀"));
  console.log(chalk.green(" ----- MENU ----- "));
  console.log("1. Crear tarea");
  console.log("2. Listar tarea");
  console.log("3. Completar tarea");
  console.log("4. Salir \n");
}

function addTask() {
  rl.question(chalk.bgMagentaBright("Escribe la tarea: "), (task) => {
    tasks.push({ task, completed: false });
    console.log(chalk.green.bold("Tarea agregada con exito ! \n"));
    saveTask()
    displayMenu();
    chooseOption();
  });
}

function listTasks() {
  console.log(chalk.yellow.bold(" ------ Tareas ----- "));
  if(tasks.length === 0){
    console.log(chalk.green.bold("No tienes tareas por realizar \n"));
  }else{ 
    tasks.forEach((task, index) => {
      let status = task.completed ? "🆗" : "✖️";
      if (!task.completed) {
        console.log(
          chalk.red.bold(`${index + 1} - ${status} - ${task.task} `)
        );
      } else {
        console.log(
          chalk.green.bold(`${index + 1} - ${status} - ${task.task} `)
        );
      }
    });
      displayMenu();
      chooseOption();
  } 
}

function completeTask() {
  rl.question(
    chalk.bgMagentaBright("Digita el número de la tarea a Completar: "),
    (taskNumber) => {
      const index = parseInt(taskNumber) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        saveTask()
        console.log(chalk.green.bold("Tarea marcada con exito  "));
      } else {
        console.log(chalk.red.bold("Número de la tarea invalido "));
      }
      displayMenu();
      chooseOption();
    }
  );
}

function chooseOption() {
  rl.question("Digita una opción: ", (choise) => {
    switch (choise) {
      case "1":
        addTask();
        break;
      case "2":
        listTasks();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        console.log(chalk.bgRed("Salir 👋"));
        rl.close();
        break;
      default:
        console.log(
          chalk.bgGreen("la opción no existe, intenta nuevamente \n")
        );
        displayMenu();
        chooseOption();
        break;
    }
  });
}

loadTask()
displayMenu();
chooseOption();
