const task = require("../models/task");
const Task = require("../models/task");

async function createTask(req, res) {
  const task = new Task();
  const params = req.body;

  task.title = params.title;
  task.description = params.description;

  try {
    const taskStore = await task.save();
    if (!taskStore) {
      res.status(400).send({ msg: "No se ha guardado la tarea" });
    } else {
      res.status(200).send({ task: taskStore });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getTasks(req, res) {
  try {
    const tasks = await Task.find();
    /*.find({ completed: true });
    .sort({
      created_at: -1,
    });*/

    if (!tasks) {
      res.status(400).send({ msg: "Error al obtener las tareas" });
    } else {
      res.status(200).send(tasks);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getTaskFilter(req, res) {
  try {
    const task = await Task.find({ completed: true });

    if (!task) {
      res.status(400).send({ msg: "Error al obtener las tareas" });
    } else {
      res.status(200).send(task);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getTask(req, res) {
  const idTask = req.params.id;
  try {
    const task = await Task.findById(idTask);

    if (!task) {
      res.status(400).send({ msg: "No se ha encontrado el id de la tarea" });
    } else {
      res.status(200).send(task);
    }
  } catch (error) {
    res.status(500).send(error).send({ msg: "Error en el id de la tarea" });
  }
}

async function updateTask(req, res) {
  const idTask = req.params.id;
  const params = req.body;

  console.log("idTask", idTask);
  console.log("params", params);

  try {
    const task = await Task.findByIdAndUpdate(idTask, params);

    if (!task) {
      res.status(400).send({ msg: "No se ha actualizado la tarea" });
    } else {
      res.status(200).send({ msg: "Task actualizada con exito" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteTask(req, res) {
  const idUser = req.params.idUser;

  console.log("idUser", idUser);

  try {
    const user = await Task.findByIdAndDelete(idUser);

    if (!task) {
      res.status(400).send({ msg: "No se ha eliminado la tarea" });
    } else {
      res.status(200).send({ msg: "Task eliminada con exito" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  createTask,
  getTasks,
  getTaskFilter,
  getTask,
  updateTask,
  deleteTask,
};
