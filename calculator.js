const output = document.querySelector(".screen");
let str = " ";
const keys = document.querySelectorAll("button");

console.log(keys);

for(let i = 0; i <= keys.length; i++){
    keys[i].addEventListener("click", (e) => {
        console.log(e)
        const value = e.target.innerHTML;
        if(value === '='){
            str = eval(str);
            output.innerHTML = str;
        }

        else{

        
        str +=value;
        output.innerHTML = str;
    }  
    });


}




// keys.forEach(button => {
//     button.addEventListener("click",(e)=>{
//         String= e.target.value;
//     })
// });

// keys.addEventListener("click", (e) =>{
    
//     let res = output.innerHTML;
//     console.log(e.key);
    
    
//     

// });