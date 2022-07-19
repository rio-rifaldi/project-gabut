/**
 * @type {HTMLAnchorElement}
 */

let li = document.querySelectorAll('.content ul li');
let button = document.querySelector('.container .content button');
let arr = [];
li.forEach(e => {
    
    e.addEventListener('click', f =>{
        
        f.target.style.backgroundColor = "hsl(25, 97%, 53%)";
        f.target.style.color = "hsl(0, 0%, 100%)";  
        
        arr.push(f.isTrusted);
    });
    
    
});


button.addEventListener('click', e =>{
    
    if(arr.length === 0  || arr === undefined)
        {
           
            window.location.href = 'index.html';
        }else{

            if(arr.length > 5){
                arr.length = 5;

            }
            localStorage.setItem("val",`${arr.length}`);
            
            window.location.href = "thanks.html";
        }
        
        e.stopPropagation();
        // e.preventDefault();
    });
    

    