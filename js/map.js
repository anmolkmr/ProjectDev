let m=new Map();
m.set("roll",2002900100021);
m.set("apple",3);
console.log(m);
console.log(m.get('apple'));
m.delete('apple')//delete single
console.log(m);
m.clear();//delete all
console.log(m);

m.set("roll",2002900100021);
m.set("apple",3);
console.log(m.has('apple'));

console.log(m.entries());//return iterator object

console.log(m.keys());
console.log(m.values());
m.set('ak','male');

m.forEach((v,k)=>{
    console.log(k+" "+":"+" "+v);
});

for(let i of m){
    console.log(i);
}


