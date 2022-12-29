function inicio(){
    window.open('/ProjectJapan/index.html','_self');
}

function history(){
    window.open('/ProjectJapan/categorias/history.html','_self');
}

function culture(){
    window.open('/ProjectJapan/categorias/culture.html','_self');
}

function gastronomy(){
    window.open('/ProjectJapan/categorias/gastronomy.html','_self');
}

function arts(){
    window.open('/ProjectJapan/categorias/arts.html','_self');
}

function events(){
    window.open('/ProjectJapan/categorias/events.html','_self');
}

function places(){
    window.open('/ProjectJapan/categorias/places.html','_self');
}

function people(){
    window.open('/ProjectJapan/categorias/people.html','_self');
}

function news(){
    window.open('/ProjectJapan/categorias/news.html','_self');
}

function olimpics(){
    window.open('/ProjectJapan/categorias/olimpics.html','_self');
}

function map(){
    window.open('/ProjectJapan/categorias/map.html','_self');
}

var x =0;

function menuNoResponsivo() {
    if(x==0){
    item.classList.add('ocultarMenu');
    item1.classList.add('ocultarMenu');
    item2.classList.add('ocultarMenu');
    item3.classList.add('ocultarMenu');
    item4.classList.add('ocultarMenu');
    item5.classList.add('ocultarMenu');
    item6.classList.add('ocultarMenu');
    item7.classList.add('ocultarMenu');
    item8.classList.add('ocultarMenu');
    item9.classList.add('ocultarMenu');
    }
}

menuNoResponsivo()

function menuResponsivo() {
    x=1;
    if(x==1){
    item.classList.remove('ocultarMenu');
    item1.classList.remove('ocultarMenu');
    item2.classList.remove('ocultarMenu');
    item3.classList.remove('ocultarMenu');
    item4.classList.remove('ocultarMenu');
    item5.classList.remove('ocultarMenu');
    item6.classList.remove('ocultarMenu');
    item7.classList.remove('ocultarMenu');
    item8.classList.remove('ocultarMenu');
    item9.classList.remove('ocultarMenu');
    item.classList.add('mostrarMenu');
    item1.classList.add('mostrarMenu');
    item2.classList.add('mostrarMenu');
    item3.classList.add('mostrarMenu');
    item4.classList.add('mostrarMenu');
    item5.classList.add('mostrarMenu');
    item6.classList.add('mostrarMenu');
    item7.classList.add('mostrarMenu');
    item8.classList.add('mostrarMenu');
    item9.classList.add('mostrarMenu');
    }
    x=0;
}

var x=0;
