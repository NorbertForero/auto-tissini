const users = require("../models/modelUsers");
const Users = require("../models/modelUsers");
const User = require("../models/modelUser");

function getServer(req, res) {
  res.status(200).send({
    msg: "El servidor de pruebas esta iniciado, Todo esta listo para las pruebas.",
  });
}

const getUser = async (req, res = response) => {
  try {
    const mobilephoneUser = parseInt(req.params.mobilephone);
    console.log(mobilephoneUser)
    const user = await User.findOne({ mobilephone: mobilephoneUser });

    if (!user) {
      res.status(280).send({ msg: "No se ha encontrado el Usuario" });
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send(error).send({ msg: "Error en el id de la tarea" });
  }
};

const getUsers = async (req, res = response) => {
  try {
    // query params
    const { limit = 5, from = 0 } = req.query;
    const query = {};
    // forma no optima
    // const user = await User.find(query)
    // .skip(Number(from))
    // .limit(Number(limit))
    // ;
    // const total = await User.countDocuments(query);
    // forma optima
    const [total, user] = await Promise.all([
      User.countDocuments(query),
      User.find(query).skip(Number(from)).limit(Number(limit)),
    ]);
    res.json({ total, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "error 500 contactar con el administrador",
    });
  }
};

const deleteUser = async (req = request, res = response) => {
  try {
    const idUser = req.params.id;
    const query = { estado: false };
    const user = await User.findByIdAndUpdate(idUser, query);

    res.json({
      msg: `Usuario eliminado de forma fisica!`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "error 500 contactar con el administrador",
    });
  }
};

const deleteUserMobilephone = async (req = request, res = response) => {
  try {
    const mobilephoneUser = req.params.mobilephone;
    console.log(mobilephoneUser)
    const user = await User.findOneAndDelete({ mobilephone: mobilephoneUser });

    if (!user) {
      res.status(280).send({ msg: "No se ha encontrado el Usuario" });
    } else {
      res.status(200).send({ msg: "Usuario eliminado!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "error 500 contactar con el administrador",
    });
  }
};

module.exports = {
  getServer,
  getUser,
  getUsers,
  deleteUser,
  deleteUserMobilephone,
};
