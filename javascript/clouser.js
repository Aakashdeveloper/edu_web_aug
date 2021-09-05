// localscope
// global Scope


//enclose something

/*var a = 10;
function add(){
    var b= 20;
    return a+b
}

console.log("add>>>", add())
console.log("a>>>", a)
console.log("b>>>", b)

add>>> 30
a>>> 10
console.log("b>>>", b)
ReferenceError: b is not defined
*/

/*
var a = 10;
var b = 20;
function add(){
    b= 30;
    return a+b
}

console.log("add>>>", add())
console.log("a>>>", a)
console.log("b>>>", b)
*/

function mul(a,b,c){
    return a*b*c
}
mul(2,3,4)

function mul(a){
    return function(b){
        return function(c){
            return a*b*c
        }
    }
}

mul(2)(3)(4)