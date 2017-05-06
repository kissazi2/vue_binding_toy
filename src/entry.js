import Observer from "./Observer"
import Vue from "./Vue"

var obj = {
    data: {
        a: 'in a',
        b: 'in b',
        c: {
            c1: "in c1",
            c2: "in c2"
        }
    }
};

// var observer = new Observer(obj);
// console.log(obj.a);
// obj.a = "newA"
// console.log(obj.a);

var vue = new Vue(obj);
vue.$watch('a',()=>{
    console.log("a has change");
});
vue.a = "a chage"
console.log("vue.a  : "+vue.a);

vue.a = "a chage2"
console.log("vue.a  : "+vue.a);
// console.log(obj.data );

