function navegacionFija(){const e=document.querySelector(".header__barra");new IntersectionObserver((function(n){n[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".header"))}function navegacionbarra(){const e=document.querySelector(".nav-toggle"),n=document.querySelector(".navegacion_menu");e.addEventListener("click",()=>{n.classList.toggle("nav-menu__visible")})}function seleccionMenu(){let e=1;const n=document.querySelector(".navegacion_menu");document.querySelectorAll(".navegacion__enlace").forEach(c=>{c.dataset.codigo=e,c.addEventListener("click",e=>{document.querySelectorAll(".navegacion__enlace").forEach(e=>{e.classList.remove("navegacion__enlace-active"),e.dataset.codigo==c.dataset.codigo&&(e.classList.add("navegacion__enlace-active"),n.classList.toggle("nav-menu__visible"))})}),e++})}document.addEventListener("DOMContentLoaded",(function(){navegacionFija(),navegacionbarra(),seleccionMenu()}));
//# sourceMappingURL=bundle.js.map
