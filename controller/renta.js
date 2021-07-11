var formularioRenta = []

const renta = {
  renta: function (request, response) {

    return response.status(200).send(formularioRenta)
  },

  getRenta: function (request, response) {
    const id = request.params.id
    const rentId = formularioRenta.find(renta => renta.id === id) 

    return response.status(200).send(rentId)
  },

  addRenta: function (request, response) {
    const params = request.body
    const valoresRenta = params.valoresRenta
    const datosRenta = params.datosRenta

    const idFormulario = Math.max(...formularioRenta.map(o => parseInt(o.id)), 0)

    const rut = params.rutCliente ? (params.rutCliente).toString() : String

    const newRenta = {
      id: (idFormulario + 1).toString(),
      nombreCliente: params.nombreCliente,
      rutCliente: (rut),
      fecha: params.fecha,
      valoresRenta: valoresRenta,
      datosRenta: datosRenta
    };
    formularioRenta.push(newRenta);

    return response.status(200).send(formularioRenta)
  },

  updateRenta: function (request, response) {
    const params = request.body
    const id = request.params.id
    const rentId = formularioRenta.findIndex(renta => renta.id === id)
    const valoresRenta = params.valoresRenta
    const datosRenta = params.datosRenta

    formularioRenta[rentId].nombreCliente = params.nombreCliente
    formularioRenta[rentId].rutCliente = params.rutCliente
    formularioRenta[rentId].fecha = params.fecha
    formularioRenta[rentId].valoresRenta = valoresRenta
    formularioRenta[rentId].datosRenta = datosRenta

    return response.status(200).send([, formularioRenta[rentId], 'rentid: ',rentId, 'id: ', id])
  },

  deleteRenta: function (request, response) {
    const id = request.params.id
    const rentId = formularioRenta.findIndex(renta => renta.id === id)

    if(rentId >= 0)
      formularioRenta.splice(rentId, 1)

    return response.status(200).send([`Formulario con ID: ${id} fue eliminado correctamente`])
  }
}

module.exports = renta