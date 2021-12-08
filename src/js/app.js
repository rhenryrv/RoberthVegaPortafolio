document.addEventListener('DOMContentLoaded', function(){
    navegacionFija();
    navegacionbarra();
    seleccionMenu();
    // seleccionMenuAutomatico();
});

function navegacionFija(){
    const barra = document.querySelector('.header__barra');
    //Intersection Observer
    const Observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });

    //Elemento a obsrevar
    Observer.observe(document.querySelector('.header'))
}

function navegacionbarra (){
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.navegacion_menu');
  
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.toggle('nav-menu__visible');
        
    });
}

function seleccionMenu() {
    let i=1;
    const navMenu = document.querySelector('.navegacion_menu');
    document.querySelectorAll('.navegacion__enlace').forEach((elemento)=>{
        elemento.dataset.codigo=i;

        elemento.addEventListener('click',(e)=> {
            document.querySelectorAll('.navegacion__enlace').forEach((elemento2)=>{
            elemento2.classList.remove('navegacion__enlace-active');
                if(elemento2.dataset.codigo == elemento.dataset.codigo){
                    elemento2.classList.add('navegacion__enlace-active');
                    navMenu.classList.toggle('nav-menu__visible');
                }
             
            });
        });
        i++;
    });

}

