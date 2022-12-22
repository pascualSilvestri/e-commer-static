import { cliente_servidor } from "../servicios/servidor_cliente.js"

const mostrar_categoria = (categoria,id=null) =>{
    const main_home = document.querySelector('[data-main]')
    const section = document.createElement('section')
    section.classList.add('articulos_container', categoria)
    section.innerHTML = `
    <div class="categoria">
        <h2>${categoria}</h2>
        <a href="#">Ver todo</a>
    </div>
    <div class="card_container">
    </div>
`
    return main_home.appendChild(section)
}

const mostrar_articulo = (categoria,media,nombre,precio,id=null)=>{
    const section_categoria = document.querySelector('.'+categoria).querySelector('.card_container')
    const card = document.createElement('div')
    card.classList.add('articulo_card')
    card.innerHTML =  `
        <div class="img_articulo">
            <img src=${media} alt="imagen articulo" />
        </div>
        <div class="detalle_articulo">
            <p class="nombre_articulo">${nombre}</p>
            <p class="precio_articulo">$ ${precio}</p>
            <a href="#" class="ver_articulo" id=${id}>Ver Producto</a>
        </div>
    `
    return section_categoria.appendChild(card)
}

const selec_categoria = (categoria)=>{
    const select = document.querySelector('#select')
    const option = document.createElement('option')
    option.classList.add('option-ingreso')
    option.value = categoria
    option.text = categoria
    return select.appendChild(option)
}





export const componentes={
    mostrar_categoria,
    mostrar_articulo,
    selec_categoria,
};