var city = "lonDoN";
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"
city[0]
"l"
city[1]
"o"
city.charAt(0)
"l"
city.charAt(1)
"o"

var city = "lonDoN";
city.length
6
var name = "  Nikita   "
name.length
11
name.trim()
"Nikita"
name.trim().length
6
var name = "  Nikita .   "
name.trim()
"Nikita ."


var name = "john"
var name1 = "John"
name == name1
false
name.toUpperCase() == name1.toUpperCase()
true

var city = "amStERdaM" ("Amsterdam")

var name = "nikita"

name.charAt(2)
"k"
name.slice(1)
"ikita"
name.slice(2)
"kita"
name.slice(3)
"ita"
name.slice(2,5)
"kit"
name.slice(2,6)
"kita"
name
"nikita"
name.slice(-1)
"a"
name.slice(-2)
"ta"
name.slice(0,-1)
"nikit"
name.slice(0,-2)
"niki"

var city = "amStERdaM"

city.charAt(0).toUpperCase()
"A"

city.slice(1)
"mStERdaM"
city.slice(1).toLowerCase()
"msterdam"

city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amsterdam"

////////////////
var a = "I am doing JavaScript"
a.replace('JavaScript','JS')
"I am doing JS"
var a = "JavaScript I am doing JavaScript"
undefined
a.replace('JavaScript','JS')
"JS I am doing JavaScript"
a.replace(/JavaScript/g,'JS')
"JS I am doing JS"
var name = "  Nikita .   "
undefined
name.replace(/ /,'')
" Nikita .   "
name.replace(/ /g,'')
"Nikita."
name.replace(/ /g,'-')
"--Nikita-.---"


var url = "https://github.com/Aakashdeveloper/edu_intern_web"
undefined
url.split('/')
(5) ["https:", "", "github.com", "Aakashdeveloper", "edu_intern_web"]
var out= url.split('/')
undefined
out[0]
"https:"
out[4]
"edu_intern_web"
out[out.length-1]
"edu_intern_web"

var a = "JavaScript I am doing JavaScript"
undefined
a.split(' ')
(5) ["JavaScript", "I", "am", "doing", "JavaScript"]

var a = "JavaScript"
a.split('')
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
var out = a.split('')
out
(10) ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
out.toString()
"J,a,v,a,S,c,r,i,p,t"
out.toString().replace(/,/g,'')
"JavaScript"

