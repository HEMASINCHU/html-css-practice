const regularfunction = function(){
    console.log("hello1")
}


const arrow =()=> {
    console.log('hello')
};
arrow()

const oneparam = param => {
    console.log(param+1)
}
oneparam(4)

const oneline = () =>2+1;
console.log(oneline())
const buttonElement = document.querySelector('.js-button');
const eventListener = () => {
    console.log('click');
}
 
  buttonElement.addEventListener('click',
  eventListener);
 buttonElement.removeEventListener('click',eventListener)
  buttonElement.addEventListener('click',()=>{
    console.log('click2');
  });

















