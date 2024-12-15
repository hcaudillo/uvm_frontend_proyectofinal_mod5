import _  from 'lodash'
import './laBotaneria.css';
import Imagen from './laBotaneria.png';
import opciones from './Datos.csv';

/*
if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
           console.log('sW registrado....', registration);  
        }).catch(err => {
            console.log('SW NO registrado.. ', err);
        });
    });
}
    */

function  encabezado(){
    let encabezado = document.createElement('section');
    encabezado.classList.add('encabezado');

    encabezado = document.createElement('header');
    const miImagen =  new Image();
    miImagen.src = Imagen;
    miImagen.style.width = "350px";
    miImagen.style.height = "250px";
    encabezado.appendChild(miImagen);

    const leyenda = document.createElement('h1');
    leyenda.innerHTML = 'La Botana más rica,  al alcance de un clíck';
    leyenda.classList.add('h1');
    encabezado.appendChild(leyenda);
    return encabezado;
}

function menus(){
    let menu1 = document.createElement('div');
    menu1.classList.add('sitioMenu');
    const menu_nav = document.createElement('nav');
    const menu_ul = document.createElement('ul');
    menu_ul.classList.add('menu');
    for(let i=0; i<opciones.length; i++){
        var li = document.createElement("li");
        li.classList.add('li');
        li.appendChild(document.createTextNode(opciones[i]));
        menu_ul.appendChild(li);
    }
    menu1.appendChild(menu_ul);
    menu_nav.appendChild(menu1);

    return menu_nav;
}


document.body.appendChild(encabezado());
document.body.appendChild(menus());