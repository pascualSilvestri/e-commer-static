import { componentes } from "../componentes/componentes.js";
import { cliente_servidor } from "../servicios/servidor_cliente.js";

const formulario_iniciar = document.querySelector('[data-form-login]')
const btn_articulo = document.querySelector('[data-ingreso-articulo]')
const btn_inicia_sesion = document.querySelector('[data-iniciar-sesion]')
const btn_cerrar_sesion = document.querySelector('[data-cerrar-sesion]')
const sesion_store = window.localStorage




if (formulario_iniciar != null) {
    formulario_iniciar.addEventListener('submit', (e) => {
        e.preventDefault()
        const usu = document.querySelector('[usuario-login]').value
        const pass = document.querySelector('[password-login]').value
        cliente_servidor
            .lista_usuario()
            .then((data) => {
                let ban = false
                data.forEach(({ nombre, apellido, usuario, email, password, sesion, id }) => {
                    if (usuario == usu && password == pass) {
                        cliente_servidor.detalle_usuario(id).then(usu =>{
                            sesion_store.setItem('usuario',JSON.stringify(usu)) // Ingresa el usuario
                            const usuario = JSON.parse(sesion_store.getItem('usuario')) //Recupera el usuario
                            window.location.href = `../index.html?user=${usuario.id}`
                        })
                    }
                });
                if (ban == false) {
                    console.log('usuario o contraseña incorrecta')
                }
            })
            .catch(err => { console.log("Error en lista categoria") })
    })

}


if(btn_cerrar_sesion != null){
    btn_cerrar_sesion.addEventListener('click', (e) => {
        sesion_store.removeItem('usuario')
        window.location.href = '../index.html'
    })
}



const usuario = JSON.parse(sesion_store.getItem('usuario')) //Recupera el usuario

if(sesion_store.usuario != null){

    btn_inicia_sesion.style.display = 'none'
    btn_cerrar_sesion.style.display = 'flex'
    btn_articulo.style.display = 'flex'
    
}
else{
    btn_inicia_sesion.style.display = 'flex'
    btn_cerrar_sesion.style.display = 'none'
    btn_articulo.style.display = 'none'
}

if(sesion_store.usuario != null){
    if(usuario.super){
        btn_articulo.style.display = 'flex'
    }else{
        btn_articulo.style.display = 'none'
    }
}




export const validar_sesion = {
    sesion_store,
}