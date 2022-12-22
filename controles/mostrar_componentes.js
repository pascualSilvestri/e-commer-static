import { cliente_servidor } from "../servicios/servidor_cliente.js";
import { componentes } from "../componentes/componentes.js";

cliente_servidor
.lista_categoria()
        .then((data)=>{
            let cont = 0;
            data.forEach(({cate,id})=>{
                cont++
                    if(cont <= 3){
                        componentes.mostrar_categoria(cate,id)
                    }else{
                        return
                    }
            });
        }).catch(err=>{console.log("Error en lista categoria")})

cliente_servidor
.lista_categoria()
.then((data)=>{
    data.forEach(({cate})=>{
        cliente_servidor
        .lista_articulos()
        .then((data)=>{
            let cont = 0
            data.forEach(({categoria,media,nombre,precio,id})=>{
                if(categoria == cate){
                    if(cont < 6){
                        cont++
                        componentes.mostrar_articulo(cate,media,nombre,precio,id)
                    }else{
                        return
                    }  
                }
                
            })
        }).catch(err=>{console.log("Error en lista categoria")})
    })
}).catch(err=>{console.log("Error en lista categoria")})

cliente_servidor
.lista_categoria()
    .then((data)=>{
    data.forEach(({nombre,id})=>{
        componentes.selec_categoria(nombre,id)
    })
}).catch(err=>{console.log("Error en lista categoria")})


