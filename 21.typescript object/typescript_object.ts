// write a program that creates objects containg these items.
// data type of person object.
interface person {
    age:number,
    name:string,
    nationality:string,
    student:boolean
}
// person object.
let person :person={
    age:21,
    name:'muhammad saleem',
    nationality:'pakistani',
    student:true
}
// print person object.
console.log(person);

// data type of car object.
interface car {
    maker:string,
    color:string,
    automatic:boolean
}
// car object.
let car :car={
    maker:'honda',
    color:'black',
    automatic:true
}
// print car object.
console.log(car);