function getServer(req, res) {
    res.status(200).send({
        msg: "El servidor de pruebas esta iniciado, Todo esta listo para las pruebas.",
    });
}

module.exports = {
        getServer,
    };
