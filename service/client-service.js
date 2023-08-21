const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil",{
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    }, 
    body:JSON.stringify({nombre, email, id: uuid.v4() }),
  });
};

const eliminarCliente = (id) => {
  console.log("eliminar a a ---->", id);
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
  }) 
};

const getClienteId = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`)
    .then((r)=> r.json());
};

const actualizarClienteId = (nombre,email,id) => {
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify({nombre, email}),
  })
  .then(r => console.log(r))
  .catch(e => console.log(e))
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  getClienteId,
  actualizarClienteId
};
