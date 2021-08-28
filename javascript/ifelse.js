if(condition){
// do something
}else{
// do something
}

var a = 10
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 10 is even

var a = 11
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 11 is odd

///////////
var name = "Priya"
if(name == "Priya"){
    console.log(`Hi ${name} you are admin`)
}else if(name == "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else{
    console.log(`Hi ${name} i dont know you`)
}

var role = "Admin"
var name = "John"

if(role == "Admin"){
    if(name == "John"){
        console.log(`Hi ${name} You are ${role}`)
    }else{
        console.log(`Hi ${name} You are unknown`)
    }
}else{
    if(name == "Aakash"){
        console.log(`Hi ${name} You are ${role}`)
    }else{
        console.log(`Hi ${name} You are unknown`)
    }
}

var a = 10
a>10 ? "Hii":"Bie"
"Bie"
var a = 10
a==10 ? "Hii":"Bie"
"Hii"
var a = 10
a==10 ? a+1:a-1
11