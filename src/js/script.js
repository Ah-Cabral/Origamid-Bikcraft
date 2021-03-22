if(window.SimpleSlide){
    new SimpleSlide({
        slide: 'quote', // nome do atributo data-slide="principal"
        time: 8000, // tempo de transição dos slides
    });

    new SimpleSlide({
        slide: 'fotos', // nome do atributo data-slide="principal"
        time: 8000, // tempo de transição dos slides
        nav: true, // se deve ou não mostrar a navegação
    });
}

if(window.SimpleAnime){
    new SimpleAnime();
}
