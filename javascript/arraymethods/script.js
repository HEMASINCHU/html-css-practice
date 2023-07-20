// console.log("hema")

// const myArray = [1,2,3,4,5,6]
// console.log(myArray)
// console.log(myArray[0]) // it represent the position of array
// console.log(myArray.length)//length
// myArray[0]=10; //assign 0 index to 10
// console.log(myArray)
// console.log(typeof[1,2,3]) //typeof value
// console.log(Array.isArray([1,2,3])) //check array is not

// myArray.push(100); //adding element at end
// console.log(myArray)
// myArray.unshift(20); //adding element at first
// console.log(myArray)

// myArray.splice(1,2) //first value is index and second value is del the elements
// console.log(myArray)

// const toDoList = [];
// function addToDo(){
// const inputElement =   document.querySelector('.js-name-input')
// const name = inputElement.value;
// console.log(name)
// toDoList.push(name)
// console.log(toDoList)
// inputElement.value =''
// }

// const toDoList = ["make dinner", "dish clean", "watch youtube"];
// for (let i = 0; i <= toDoList.length - 1; i++) {
//   const value = toDoList[i];
//   console.log(value);
// }

// const nums = [1,2,3];
// let total = 0;
// for(let i=0; i< nums.length; i++)
// {
//     const num = nums[i];
//     total += num;
// }
// console.log(total);

// const numsDoubled =[];
// for(let i=0; i< nums.length; i++)
// {
//     const num = nums[i];
//     numsDoubled.push(num * 2);
// }
// console.log(numsDoubled)


// const todoList = [{name:'make dinner',
//                   dueDate:'2022-12-22'},
//                   {
//                     name:'wash dishes',
//                     dueDate:'2022-12-22'
//                   }]
//  renderTodoList();
// function renderTodoList(){

// let todoListHTML = '';
//  for(let i = 0; i < todoList.length; i++ ) {
//     const todoObject = todoList[i];
//     // const name = todoObject.name;
//     // const dueDate = todoObject.dueDate;
//     const { name, dueDate} = todoObject.dueDate
//     const html = `<div>${name} </div>
//     <div>${dueDate}</div>
//     <button onclick="todoList.splice(${i},1);
//     renderTodoList();">Delete</button>`
//     todoListHTML += html;
//  }
// document.querySelector('.js-todo-list').innerHTML = todoListHTML;
// }
// function addToDo(){
//     const inputElement = document.querySelector('.js-name-input');
//     const name =inputElement.value;
//     const dateInputElement = document.querySelector('.js-due-date-input');
//     const dueDate = dateInputElement.value
//     todoList.push({name,dueDate});
//     inputElement.value='';

//     renderTodoList();
// }

// const array1 =[1,2,3,4];
// const array2 = array1.slice();
// array2.push(6);
// console.log(array1);
// console.log(array2);
// const[firstValue,secondValue]=[1,2,3,4];
// for(let i=1; i<= 10; i++){
//     if(i===3){
//         continue;
//     }
//     console.log(i);
//     if(i === 8){
//         break;
//     }
// }
// let i=1;
// while(i <=10){
//     if(i%3 ===0){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }
// function doubleArray(nums){
// // const nums =[1,2,3];
// const numsDoubled = [];

// for(let i=0; i < nums.length; i++){
//     const num = nums[i];
//     if(num == 0){
//         return numsDoubled;
//     }
//     numsDoubled.push(num * 2);
// }
// return numsDoubled;
// }
// console.log(doubleArray([1,2,3]));
// console.log(doubleArray([2,2,3]));

function greetings(){
    console.log('hello');
}
greetings();
const num = 2;
const function1 = function greeting(){
    console.log('hello2');
};

console.log(function1);
console.log(typeof function1);
function1();
const object1 = {
    num:2,
    fun:function greeting(){
        console.log('hello3')
    }
}
object1.fun();


function display(param){
    console.log(param);
}
display(2);

function run(param){
    param();
    setTimeout(function(){
        console.log('timeout')
    }, 3000);

}
run(function(){
    console.log('hello')
})


setTimeout(function(){
    console.log('timeout');
},3000);
console.log('next line');

let fruits =["apple","mango","orango"]
fruits.forEach(function(index,value){
    if(value === "apple"){
      return;  
    }
    console.log(index,value)

})

fruits.forEach((value)=> console.log(value))

let arrowFunc = () =>{
    console.log("hema")
}
arrowFunc();

const regularFunc = function(){
    console.log("hello")
}

const oneparam = (param) =>{
    console.log(param+3)
}
oneparam(4)

const oneline = () => 2+5;
console.log(oneline())

const numbers = [1,2,-3,-4,5,-5,4,3,3,2]
console.log(numbers.filter((value,index)=>{
    // if(value >=0){
    //     return true;
    // }else{
    // return false;
    // }
    return value >=0;
}))

console.log(numbers.map((value)=>{
    return value+value;
}))
console.log(numbers.map(value=> value+value));






















