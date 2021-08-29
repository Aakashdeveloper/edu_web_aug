var a = [1,45,654,234,867,2,23,345] (Array of number)
var b = ['vds','dsgerg','sdgsdg'] (Array of strings)
var c = [true,false,false,true,true] (Array of boolean)

var d = [23,5,true,"dgs","dgrfb",true,325,"ds"]
array is a collection of homogenious as well as hetrogenious
data type

var city = ["Delhi","Mumbai","London","Venice","Dubai"]
undefined
city.length
5
city[0]
"Delhi"
city[1]
"Mumbai"
city[city.length-1]
"Dubai"
city.push("Helsinki")
6
city
(6) ["Delhi", "Mumbai", "London", "Venice", "Dubai", "Helsinki"]
city.push("Paris")
7
city
(7) ["Delhi", "Mumbai", "London", "Venice", "Dubai", "Helsinki", "Paris"]

var city =["Delhi", "Mumbai", "London", "Venice", "Dubai", "Helsinki", "Paris"]
undefined
city.pop()
"Paris"
city.pop()
"Helsinki"
city
(5) ["Delhi", "Mumbai", "London", "Venice", "Dubai"]

var city =["Delhi", "Mumbai", "London", "Venice", "Dubai", "Helsinki", "Paris"]
city.pop(2)

var city =["Delhi", "Mumbai", "London", "Venice", "Dubai", "Helsinki", "Paris"]
city.pop(2)
"Paris"
city
(6) ["Delhi", "Mumbai", "London", "Venice", "Dubai", "Helsinki"]
city.pop(100)
"Helsinki"

var city =["Delhi", "Mumbai", "London", "Venice", "Dubai", "Helsinki", "Paris"]

undefined
city.shift()
"Delhi"
city.unshift('Keev')
7
city
(7) ["Keev", "Mumbai", "London", "Venice", "Dubai", "Helsinki", "Paris"]

push > add in the end of array
unshift > add in the beginning of Array
pop > remove always last value
shift > remove always first value

var city = ["Keev", "Mumbai", "London", "Venice", "Dubai", "Helsinki", "Paris"]
city.splice(index,deletecount,values)
var city = ["Keev", "Mumbai", "London", "Venice", "Dubai", "Helsinki", "Paris"]
undefined
city.splice(2,2)
(2) ["London", "Venice"]
city
(5) ["Keev", "Mumbai", "Dubai", "Helsinki", "Paris"]
city.splice(3,0,'Pune','Nice')
[]
city
(7) ["Keev", "Mumbai", "Dubai", "Pune", "Nice", "Helsinki", "Paris"]
city.splice(4,1,'Agra')
["Nice"]
city
(7) ["Keev", "Mumbai", "Dubai", "Pune", "Agra", "Helsinki", "Paris"]


var city = ["Keev", "Mumbai", "London", "Venice", "Dubai", "Helsinki", "Paris"]
undefined
city.splice(4,1,'Agra')
["Dubai"]
city
(7) ["Keev", "Mumbai", "London", "Venice", "Agra", "Helsinki", "Paris"]
city.splice(4,1,'Pune').pop()
"Agra"
city
(7) ["Keev", "Mumbai", "London", "Venice", "Pune", "Helsinki", "Paris"]


var a = ['a','b','c',1]
var b= [2,3,4,'d']
a+b
"a,b,c,12,3,4,d"

var a = ['a','b','c',1]
var b= [2,3,4,'d']
undefined
a.concat(b)
(8) ["a", "b", "c", 1, 2, 3, 4, "d"]



var city = ["Keev", "Mumbai", "London", "Venice", "Pune", "Helsinki", "Paris"]
undefined
city.sort()
(7) ["Helsinki", "Keev", "London", "Mumbai", "Paris", "Pune", "Venice"]
var city = ["Keev", "Mumbai", "London", "Venice", "Pune", "Helsinki", "Paris","amsterdam","Abudhbai"]
undefined
city.sort()
(9) ["Abudhbai", "Helsinki", "Keev", "London", "Mumbai", "Paris", "Pune", "Venice", "amsterdam"]
var a =  ["Keev",3,6,true, "Mumbai", "London", "venice",false,6, "Pune", "Helsinki"]
undefined
a.sort()
(11) [3, 6, 6, "Helsinki", "Keev", "London", "Mumbai", "Pune", false, true, "venice"]