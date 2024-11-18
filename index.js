// https://github.com/mattboldt/typed.js/blob/main/src/typed.js
import Typed from "./assets/vendor/typed/typed.js";

window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop >= 100){
        document.body.classList.add("fixed-header");
    }else {
        document.body.classList.remove('fixed-header');
    }
})

document.addEventListener("DOMContentLoaded",function(){
    new Typed("#type-it", {
        strings:['étudiant', 'Développeur'],
        typeSpeed : 100,
        loop:true,
    })
})