function functionName(){
    console.log('hello');
    console.log(2+2);
}
functionName()

function calculateTax(cost,taxpercent=0.1){
    console.log(cost*taxpercent);

}
calculateTax(200,0.2);
calculateTax(5000);

const product ={
    name:'socks',
    price:1090,
    age:20
};
console.log(product)
console.log(product.name)

product.name="hemaa..";
console.log(product)
delete product.age;
console.log(product)


const product2 = {
    name:'shirt',
    rating:{
        stras:4.5, 
    count:877

    }

}
console.log(product2.rating.stras);
console.log(product2,'name')
console.log(product2['name']);
console.log(product2['delivery-time']);

const obj1 ={
    message:'hello'
};
const obj2 = obj1
obj1.message ='good job';
console.log(obj1)
console.log(obj2);
const obj3 ={
    message: "good job"
}
console.log(obj3 === obj1);
console.log(obj2 === obj1);
const obj4 ={
    message: "good job"
}
// const message = obj4.message
const {message,price}= obj4;
console.log(message);
console.log(price);

const obj5 = {
    //message:message
    message,
   // method: function function1(){
      //  console.log('method')
    //}
    method(){
        console.log('method')
    }
};
console.log(obj5)
obj5.method()

































