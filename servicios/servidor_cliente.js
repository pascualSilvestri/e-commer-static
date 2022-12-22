const lista_articulos = ()=>
    fetch('http://localhost:3000/articulo').then((respuesta) => respuesta.json());

const lista_categoria = () =>
    fetch('http://localhost:3000/categorias').then((respuesta) => respuesta.json());

const lista_usuario = () =>
    fetch('http://localhost:3000/usuarios').then((respuesta) => respuesta.json());

const crear_articulo = (nombre,precio,categoria,media) =>{
    return fetch('http://localhost:3000/articulo',
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({nombre,precio,categoria,media,id: uuid.v4()})
    }).then((respuesta) => respuesta.json()).catch(err=>{console.log("Error en crear articulo")});
}

const crear_usuario = (nombre,apellido,usuario,email,password)=>{
    return fetch('http://localhost:3000/usuarios',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({nombre,apellido,usuario,email,password,super:false,id: uuid.v4()})
    }).then((respuesta) => respuesta.json()).catch(err=>{console.log("Error en crear usuario")})
}

const validar_sesion = (nombre,apellido,usuario,email,password,sesion,id)=>{
    return fetch(`http://localhost:3000/usuarios/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({nombre,apellido,usuario,email,password,sesion,id})
    }).then((respuesta) => respuesta.json()).catch(err=>{console.log("Error en crear usuario")})
}

const detalle_usuario = (id)=>{
    return fetch(`http://localhost:3000/usuarios/${id}`).then(respuesta=> respuesta.json())
}
    


export const cliente_servidor = {
    lista_articulos,
    lista_categoria,
    crear_articulo,
    lista_usuario,
    crear_usuario,
    validar_sesion,
    detalle_usuario,
}