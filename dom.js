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

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json));

//var vs let
// for (let i=0; i< 10; i++){
//       console.log(i);
// }

// console.log("outside the block");

//ARROW FUNCTION=======================>
//      const fun = () => 0

//SPREAD AND REST OPERAOR===================================>
      const arr1=[1,2,3,4,5];
      const arr2 = [6, 7, 8, 9, 10];
      const [first, second, ...others] = arr1; //rest operator
      console.log(first, "first");
      console.log(second,"second");
      console.log(others, "others");

      const arr3 = [...arr2, 10, 11, 12]; //spread operator

      console.log(arr3);

      const user ={
            name : "sampanna",
            email : "sam@gmail.com",
            password : "12345"
      };

      const{password, ...info} = user;
      console.log(password, "password");
      console.log(info, "info");



//Template literal==================================>
// const name = "Sampanna";
// const age = 23;
// const occupation = "Developer";
// const address = "Itahari";

// const str = "Welcome" + name + "Your age is " + age + "you are a" + occupation + "and you live in" +address;

// console.log(str);

// const newstr = `Welcome ${name}your age is ${age} and you are ${occupation} and you live in ${address}`;
// console.log(newstr);



// const arr1 = [1, 2, 3, 4, 5];

//MAP==============================================>

// arr1.map((value, index) =>{
//       console.log(`${value} is at index ${index}`);
// }); 

//Reduce======================>

// const sum = arr1.reduce((preValue, currentValue)=>{
//       return preValue+ currentValue;
// },0);

// console.log(sum);

//Filter=================>
const newArr = arr1.filter((value,index)=>{
            return value > 2;
});

console.log(newArr);


//forof=============================>
for(const i of arr1){
      console.log(i);
}



