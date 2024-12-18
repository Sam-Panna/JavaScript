// const input = document.querySelector("#txt");

// input.addEventListener("change", ()=>{
//     const text = input.value;
//     console.log(text);
// });

// const handleSubmit = (e)=>{
//     console.log("form submitted");
//     e.previousDefault();
// }

//Timing Function

// const timeout = setTimeout (() => {
//     console.log("Hello from Timeout");
// }, 3000);

// clearTimeout(timeout);

// const interval = setInterval (() => {
//     console.log("Hello ");
// }, 2000);

// clearInterval(interval);

// let count = 5;
// const interval = setInterval(() =>{
//     console.log("Count" +count);

//     count--;
//     if(count === 0)
//     {
//         console.log("time stopped...");
//         clearInterval(interval);
//     }
    
// }, 2000);


// try catch

// let a = 10;
// let b = 0;

// try{
//     if(b == 0){
//         throw new Error("Divide by zero");
//     }
//     let res = a/b;
//     console.log(res, "Result");
// }catch(e){
//     console.error(e, "Error");
// }
// console.log("Hello");

//object into JSON
// const ab = [
// {
//     name :"Sam",
//     age : 23,
//     occupation : "Developer",
// },
// {
//     name : "Shi",
//     age: 10,
//     occupation : "student",
// },
// ];

// console.log(JSON.stringify(ab));

//fecting data through api

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));