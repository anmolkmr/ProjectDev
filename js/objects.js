//creating a object
const student ={
    id:1,
    name : "anmol"
}
console.log(student);

//creating object by new keyword
const obj =new Object();
obj.id=3
obj.class="6"
console.log(obj);

//anothermethod
let car={
    wheel:4
};
console.log(car);

//inheriting a property we use create method
let stu=Object.create(obj);
console.log(stu);


//multiple inheritance
let mul_obj =Object.assign({},car,student);
console.log(mul_obj);

//nestedobject
let obj1={
    id:3,
    name:"Anmol",
    addr:{
        street:4,
        colony:"madhav puram",
    }
}
console.log(obj1.addr.colony);

//function
let obj2={
    id:3,
    name:"Anmol",
    addr:{
        street:4,
        colony:"madhav puram",
    },
    f:function()
    {
        return this.id+this.name;
    }
}
console.log(obj2.f());
