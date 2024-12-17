const input = document.querySelector("#txt");

input.addEventListener("change", ()=>{
    const text = input.value;
    console.log(text);
});

const handleSubmit = (e)=>{
    console.log("form submitted");
    e.previousDefault();
}

//Timing Function

// const timeout = setTimeout (() => {
//     console.log("Hello from Timeout");
// }, 3000);

// clearTimeout(timeout);

// const interval = setInterval (() => {
//     console.log("Hello ");
// }, 2000);

// clearInterval(interval);

let count = 5;
const interval = setInterval(() =>{
    console.log("Count" +count);

    count--;
    if(count === 0)
    {
        console.log("time stopped...");
        clearInterval(interval);
    }
    
}, 2000);

