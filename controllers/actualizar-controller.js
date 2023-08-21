import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const getClienteId = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    if(id === null){
        window.location.href= "/screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");
   
    try {
        const perfil = await clientServices.getClienteId(id);
        if (perfil.nombre && perfil.email) {
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        } else {
            throw new Error();
        }
    } catch (error) {
        window.location.href= "/screens/error.html";
    }
};

getClienteId();

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre, email);
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    clientServices.actualizarClienteId(nombre, email, id).then( () => {
        window.location.href = "/screens/edicion_concluida.html";
    });
});