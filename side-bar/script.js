/**
 * @type {HTMLAnchorElement}
 */
let body = document.querySelector('body');
let side = body.querySelector(".side");
let toggle = side.querySelector(".toggle");
let logos = body.querySelector(".logos img:nth-child(1)")
let rey = side.querySelector("h1");
let nav = side.querySelector(".nav");
let a = nav.querySelectorAll('li a');
let input = side.querySelector(".search input")
let search = side.querySelector(".search img");
let profile = side.querySelector(".profile");
let nama = profile.querySelector("h2");
let img_profile = profile.querySelector("img");
let email = profile.querySelector("p");






function side_on () {

    side.style.width = "35vh";
    toggle.style.opacity = 1;
    toggle.style.cursor = 'pointer';
    toggle.style.pointerEvents = "all";
    rey.style.opacity = 1;
    nama.style.opacity = 1;
    email.style.opacity = 1;
    input.style.opacity = 1;
    input.style.width = "90%";
    input.style.cursor = "type";
    input.style.pointerEvents = "all";
    input.style.backgroundColor = "#333333";
    profile.style.backgroundColor = "#333333";
    nav.style.width = "100%";
    
    
    a.forEach(e => {  
    
        e.addEventListener('mouseenter', e =>{
    
            e.target.style.transform = "scale(1)"
        });
        e.addEventListener('mouseleave', e =>{
    
            e.target.style.transform = "scale(1)"
        });
    
    
    });
}


function side_off() {
    
    a.forEach(e => {  

        e.addEventListener('mouseenter', e =>{

            e.target.style.transform = "scale(1.02)"
        });
        e.addEventListener('mouseleave', e =>{

            e.target.style.transform = "scale(1)"
        });


    });
    
    side.style.width = "10vh";
    toggle.style.opacity = 0;
    toggle.style.cursor = 'default';
    rey.style.opacity = 0
    toggle.style.pointerEvents = "none";
    
    nama.style.opacity = 0;
    email.style.opacity = 0;
    input.style.opacity = 0;
    input.style.width = "20%";
    input.style.cursor = "pointer"
    
    profile.style.backgroundColor = "#2c2c2c";
    profile.style.marginLeft = "7%";
    nav.style.width = "62px";
    
    
    
    
}



toggle.addEventListener('click', e =>{
    
    side_off();
    e.stopPropagation();
})

logos.addEventListener('click', e =>{
    
    side_on();
    e.stopPropagation()  
});

// body.addEventListener('click', e =>{
    
//     side_off();
//     e.stopPropagation()  

// });




