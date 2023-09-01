//const person = {
//  name:'Numan',
// age: 22,
//  greet() { 
//      console.log('Hi, I am' + this.name);

//  }
//};

//const printName = ({age,greet}) =>{
  //console.log(age, greet);}
//printName(person);

//const copiedPerson ={ ...person };
//console.log(copiedPerson);

//const hobbies = ['Sports', 'cooking'];
//for (let hobby of hobbies) {
 // console.log(hobby);
//}
//hobbies.push('programming');
//console.log(hobbies);
//const copiedArray = [...hobbies];
//console.log(copiedArray);

//const toArray = (...args) =>{
//  return args;
//};
//console.log(toArray(1,2,3,4));

const fetchdata = callback =>{
  setTimeout(()  =>{
    callback("Done!")
  },1500);
};

setTimeout(()  =>{
  console.log("Timer is done!");
  fetchdata(text =>{
    console.log(text);
  });
},2000);
console.log("Hello!");
console.log("Hi!");
