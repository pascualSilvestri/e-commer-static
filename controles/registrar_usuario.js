import { cliente_servidor } from "../servicios/servidor_cliente.js";
const formulario_registro = document.querySelector('[data-form-registro]')

formulario_registro.addEventListener('submit',(e)=>{
    e.preventDefault()
    const nombre = document.querySelector('[nombre-registro]').value;
    const apellido = document.querySelector('[apellido-registro]').value;
    const usuario = document.querySelector('[usuario-registro]').value;
    const email = document.querySelector('[email-registro]').value;
    const password = document.querySelector('[password-registro]').value;
    cliente_servidor.crear_usuario(nombre,apellido,usuario,email,password).then((respuesta) => {
        window.location.href="../template/login.html"
    }).catch(err =>{console.log('Error en envio del formulario')})
})