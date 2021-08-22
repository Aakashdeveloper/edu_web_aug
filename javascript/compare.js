= assignment
== compare the data
=== compare the data and datatype

var a = 10
var b = "10"

a==b
true
a===b
false

var name = "John"
var name1 = "john"
name == name1
false
name === name1
false
(JS is case senstive)

console.log() > debugging and checking output
alert() > notification
confirm() > yes or no
prompt() >  to take input from user

alert("No Slot Open")
undefined
confirm("Do you want to quit")
true
confirm("Do you want to quit")
false
var out = confirm("Do you want to quit")
undefined
out
true
var out = confirm("Do you want to quit")
undefined
out

prompt("what is your name")
"Aakash"
var age = prompt("what is your age")
undefined
age
"10"

var a = prompt("Enter First Number")
var b = prompt("Enter Second Number")
alert(a+b)

var a = prompt("Enter First Number")
var b = prompt("Enter Second Number")
alert(a+b)
undefined
var a = prompt("Enter First Number")
var b = prompt("Enter Second Number")
alert(Number(a)+Number(b))