var clients = [
  {
  id: '1',
  firstName: 'fred',
  lastName: 'durst'
  },
  {
  id: '2',
  firstName: 'nicolas',
  lastName: 'cage'
  },
]

const clientMethods = {
  clients: function (request, response) {

    return response.status(200).send(clients)
  },

  getClient: function (request, response) {
    const id = request.params.id
    const client = clients.find(client => client.id === id)
    
    return response.status(200).send(client)
  },

  addClient: function (request, response) {
    const params = request.body
    const idCliente = Math.max(...clients.map(o => parseInt(o.id)), 0)
    const rut = params.rut ? (params.rut).toString() : String

    const newClient = {
      id: (idCliente + 1).toString(),
      firstName: params.firstName,
      lastName: params.lastName,
      rut: rut,
      phone: params.phone,
      bizName: params.bizName,
      bizRut: params.bizRut
    }

    clients.push(newClient)

    return response.status(200).send(newClient)
  },

  updateClient: function (request, response) {
    const params = request.body
    const id = request.params.id
    const clientId = clients.findIndex(client => client.id === id)

    clients[clientId].firstName = params.firstName
    clients[clientId].lastName = params.lastName
    clients[clientId].rut = params.rut
    clients[clientId].phone = params.phone
    clients[clientId].bizName = params.bizName
    clients[clientId].bizRut = params.bizRut

    return response.status(200).send(clients[clientId])
  },

  deleteClient: function (request, response) {
    const id = request.params.id
    const clientId = clients.findIndex(client => client.id === id)

    if(clientId >= 0)
      clients.splice(clientId, 1)

    return response.status(200).send([`Cliente numero ${id} fue eliminado correctamente`])
  }
}

module.exports = clientMethods