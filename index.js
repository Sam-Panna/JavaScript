console.log("SAmpanna");

//object

let obj = {
    name: "Sam",
    age: 12,
    address: {
        street: "street1",
        city: "brt",
        country: "Nepal"
    }
};
// console.log(obj.name, obj.address.city);


// arrowfunction
const add = (a, b) =>{
    console.log(a+b,"add");
};
add(2,3);

//push and pop

let arr = [1,2,3,4,5,6,7,8]

//findingIndex
let n =arr.indexOf(1);
console.log(n,"n");
arr.push(10);

console.log(arr.pop());
console.log(arr,"after");

arr.shift();
console.log(arr,"before");

arr.unshift();
console.log(arr, "after");

//splice
console.log(arr,"before");
arr.splice(2,3);
console.log(arr, "after");

// const btn = document.getElementById("btn");
// const btn2 = document.getElementsByClassName("btn");
// const btn3 = document.getElementsByTagName("button");

// const btn4 = document.querySelector(".btn");
// const btn5 = document.querySelectorAll(".btn");
// console.log(btn);

// const btnClick = () =>{
//     btn.style.backgroundColor = "blue";
//     alert(btn);
// }

const container = document.querySelector("body");
const btnClick = (color) =>{
    // btn.style.backgroundColor = "red";
    container.style.backgroundColor = color;
    
    
    
    
}









