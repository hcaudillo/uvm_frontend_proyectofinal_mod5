import _  from 'lodash'
import './laBotaneria.css';
import Imagen1 from './laBotaneria.png';
import opciones from './Datos.csv';
import productos from './prod.json5';
import prod1  from './salados1.png';
import prod2  from './enchilados1.png';
import prod3  from './charola1.png';
import prod4  from './combo1.png';
import carrito  from './carrito.png';



if('serviceWorker' in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
           console.log('sW registrado....', registration);  
        }).catch(err => {
            console.log('SW NO registrado.. ', err);
        });
    });
}
    

function  encabezado(){
    let encabezado = document.createElement('section');
    encabezado.classList.add('encabezado');

    const mheader = document.createElement('header');

    const miImagen =  new Image();
    miImagen.src = Imagen1;
    miImagen.style.width = "350px";
    miImagen.style.height = "250px";
    mheader.appendChild(miImagen);

    const leyenda = document.createElement('h1');
    leyenda.innerHTML = 'La Botana más rica,  al alcance de un clíck';
    leyenda.classList.add('h1');
    mheader.appendChild(leyenda);

    encabezado.appendChild(mheader);
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
        li.classList.add('menu_a');
        menu_ul.appendChild(li);

    }
    menu1.appendChild(menu_ul);
    menu_nav.appendChild(menu1);

    const lineab = document.createElement('br');
    menu_nav.appendChild(lineab);

    return menu_nav;
}

function lproductos(){
    let lista_prod = document.createElement('section');
    lista_prod = document.createElement('div');
    lista_prod.classList.add('objetos');
    
    /* prod 1  */
    let mspan =  document.createElement('span');
    mspan.classList.add('opciones');

    let miImagen =  new Image();
    miImagen.src = prod1;
    miImagen.style.width = "180px";
    miImagen.style.height = "200px";
    mspan.appendChild(miImagen);

    let mdiv = document.createElement('div');
    mdiv.classList.add('nombre');
    mdiv.innerHTML = productos.nombre1;
    mspan.appendChild(mdiv);

    let mspan2 = document.createElement('span');
    mspan2.classList.add('descripcion');
    mspan2.innerHTML = productos.descripcion1;
    mspan.appendChild(mspan2);

    let lineab = document.createElement('br');
    mspan.appendChild(lineab);

    let mspan3 = document.createElement('span');
    mspan3.classList.add('boton');

    let mcarrito =  new Image();
    mcarrito.src = carrito;
    mcarrito.style.width = "20px";
    mcarrito.style.height = "20px";
    mspan3.appendChild(mcarrito);
    mspan3.appendChild(document.createTextNode('Comprar'));
    //mspan3.innerHTML = 'Comprar';

    mspan.appendChild(mspan3);

    lista_prod.appendChild(mspan);


    /* prod 2 */
    mspan =  document.createElement('span');
    mspan.classList.add('opciones');
    miImagen =  new Image();
    miImagen.src = prod2;
    miImagen.style.width = "180px";
    miImagen.style.height = "200px";
    mspan.appendChild(miImagen);

    mdiv = document.createElement('div');
    mdiv.classList.add('nombre');
    mdiv.innerHTML = productos.nombre2;
    mspan.appendChild(mdiv);

    mspan2 = document.createElement('span');
    mspan2.classList.add('descripcion');
    mspan2.innerHTML = productos.descripcion2;
    mspan.appendChild(mspan2);

    mspan.appendChild(lineab);
    mspan3 = document.createElement('span');
    mspan3.classList.add('boton');
    mcarrito =  new Image();
    mcarrito.src = carrito;
    mcarrito.style.width = "20px";
    mcarrito.style.height = "20px";
    mspan3.appendChild(mcarrito);
    mspan3.appendChild(document.createTextNode('Comprar'));
    mspan.appendChild(mspan3);

    lista_prod.appendChild(mspan);

    /* prod 3 */
    mspan =  document.createElement('span');
    mspan.classList.add('opciones');
    miImagen =  new Image();
    miImagen.src = prod3;
    miImagen.style.width = "180px";
    miImagen.style.height = "200px";
    mspan.appendChild(miImagen);

    mdiv = document.createElement('div');
    mdiv.classList.add('nombre');
    mdiv.innerHTML = productos.nombre3;
    mspan.appendChild(mdiv);

    mspan2 = document.createElement('span');
    mspan2.classList.add('descripcion');
    mspan2.innerHTML = productos.descripcion3;
    mspan.appendChild(mspan2);

    mspan.appendChild(lineab);
    mspan3 = document.createElement('span');
    mspan3.classList.add('boton');
    mcarrito =  new Image();
    mcarrito.src = carrito;
    mcarrito.style.width = "20px";
    mcarrito.style.height = "20px";
    mspan3.appendChild(mcarrito);
    mspan3.appendChild(document.createTextNode('Comprar'));
    mspan.appendChild(mspan3);

    lista_prod.appendChild(mspan);

    /* prod 4 */
    mspan =  document.createElement('span');
    mspan.classList.add('opciones');
    miImagen =  new Image();
    miImagen.src = prod4;
    miImagen.style.width = "180px";
    miImagen.style.height = "200px";
    mspan.appendChild(miImagen);

    mdiv = document.createElement('div');
    mdiv.classList.add('nombre');
    mdiv.innerHTML = productos.nombre4;
    mspan.appendChild(mdiv);

    mspan2 = document.createElement('span');
    mspan2.classList.add('descripcion');
    mspan2.innerHTML = productos.descripcion4;
    mspan.appendChild(mspan2);

    mspan.appendChild(lineab);
    mspan3 = document.createElement('span');
    mspan3.classList.add('boton');
    mcarrito =  new Image();
    mcarrito.src = carrito;
    mcarrito.style.width = "20px";
    mcarrito.style.height = "20px";
    mspan3.appendChild(mcarrito);
    mspan3.appendChild(document.createTextNode('Comprar'));
    mspan.appendChild(mspan3);

    lista_prod.appendChild(mspan);
    lineab = document.createElement('br');
    lista_prod.appendChild(lineab);
    lineab = document.createElement('br');
    lista_prod.appendChild(lineab);
    
    return  lista_prod;
}

function pie(){
    let mfooter = document.createElement('footer');
    mfooter.classList.add('pie');

    let mdatospie = document.createElement('div');
    mdatospie.classList.add('datosPie');

    let  mdiv1 = document.createElement('div'); 
    mdiv1.appendChild(document.createTextNode(' VISITANOS EN:'));

    let lineab = document.createElement('br');
    mdiv1.appendChild(lineab);
    mdiv1.appendChild(document.createTextNode('Calle: Boulevard 1975'));
    lineab = document.createElement('br');
    mdiv1.appendChild(lineab);
    mdiv1.appendChild(document.createTextNode('Colonia: Las Americas'));
    lineab = document.createElement('br');
    mdiv1.appendChild(lineab);
    mdiv1.appendChild(document.createTextNode('Corregidora, Qro.'));
    lineab = document.createElement('br');
    mdiv1.appendChild(lineab);

    mdatospie.appendChild(mdiv1);

    let mdiv2 = document.createElement('div'); 
    mdiv2.appendChild(document.createTextNode(' CONTACTANOS POR: '));
    lineab = document.createElement('br');
    mdiv2.appendChild(lineab);
    mdiv2.appendChild(document.createTextNode(' Facebook'));
    lineab = document.createElement('br');
    mdiv2.appendChild(lineab);
    mdiv2.appendChild(document.createTextNode(' Instagram'));
    lineab = document.createElement('br');
    mdiv2.appendChild(lineab);
    mdiv2.appendChild(document.createTextNode(' WhatsApp'));
    lineab = document.createElement('br');
    mdiv2.appendChild(lineab);

    mdatospie.appendChild(mdiv2);

    mfooter.appendChild(mdatospie);

    return mfooter;

}


document.body.appendChild(encabezado());
document.body.appendChild(menus());
document.body.appendChild(lproductos());
document.body.appendChild(pie());