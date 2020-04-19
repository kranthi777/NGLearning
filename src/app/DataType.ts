import { fn } from "@angular/compiler/src/output/output_ast";

var x:number;
x =10;
console.log(x);

var flag : boolean;

flag=true;

console.log(flag);
var my : any = 'kran';
var str : string = 'kran';
var str1 : string;
console.log(str1 == "undefined");



console.log(my);

var arr : number[] = [1,2,3];

arr;

function xp(id:number){
console.log(id);
}

xp(1);
console.log(Object.prototype == xp.prototype.__proto__);

var p;

p =10;

p

class Person {
    constructor(protected fname:string,protected lname:string) {
        // this.fname = fname;
        // this.lname = lname;
    }
    getFullName():string{
        return this.fname + ' ' + this.lname;
    }
}

var emp1 = new Person('k','kumar');

console.log(emp1.getFullName);
