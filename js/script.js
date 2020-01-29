$(document).ready(() => {
    // Closes the sidebar menu
    $("i.icon").click(() => {
        $(".navbar").toggleClass("active");
        $(".toggle > .fa-bars, .toggle > .fa-times").toggleClass("fa-bars fa-times");
    });

    // when scroll body .. sticky navbar
    $(window).scroll(() => {
        const scr = $(this).scrollTop();
        if (scr > 50){
            $('.header').addClass('sticky');  
        }
        else{
            $('.header').removeClass('sticky');
        }  
    });

    //popup video in about-video section
    $('.play-btn').magnificPopup({
        type: 'iframe'
    });

    $('.img-pop').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true,
        }
    });


     //  Counter Js 
     if ($('.counter-info').length) {
        $('.counter-info-title').counterUp({
            delay: 10,
            time: 1000
        });    
      }

      //Smooth scroll for the navbar
      $(".navbar li a").click(function(){
        $("html , body").animate({
            scrollTop : $("#" + $(this).data("value")).offset().top -80
        },1500);
    });
});
 

/* validation js */
const inputs = document.querySelectorAll("input");
const area = document.querySelectorAll("textarea");
 const patterns = {
    name :/^[a-z\d\s]{5,12}$/i,
    email:/^([a-z\d\.-]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    subject:/^[\w@-\s]{3,30}$/,
    message:/^[a-z\d\s]{2,50}$/
};
//validation function
function validate(field,regex){
    if(regex.test(field.value)){
        field.className ='valid';
    } else{
        field.className ='invalid';
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup',(e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});
area.forEach((textarea) => {
    textarea.addEventListener('keyup',(e) => {
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});


