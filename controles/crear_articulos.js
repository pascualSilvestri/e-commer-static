import { cliente_servidor } from "../servicios/servidor_cliente.js";

const formulario = document.querySelector('[data-form-ingreso]')


if(formulario != null){
    formulario.addEventListener('submit',(e)=>{
        e.preventDefault();
        const nombre = document.querySelector('[nombre-ingreso]').value;
        const precio = document.querySelector('[precio-ingreso]').value;
        const categoria = document.querySelector('[categoria-ingreso]').value;
        const img = document.querySelector('[img-ingreso]').value;
        const media = "../media/"+ img;
        cliente_servidor.crear_articulo(nombre,precio,categoria,media).then((respuesta) => {
            window.location.href="../index.html"
        }).catch(err =>{console.log('Error en envio del formulario')})
    });
}
