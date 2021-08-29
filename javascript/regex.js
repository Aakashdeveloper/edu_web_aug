Regular Expression
^$

// if patteren does not match it will return null
var a = "Hiii"
a.match("^([a-z])$")
null
var a = "hiii"
a.match("^([a-z])$")
null
var a = "h"
a.match("^([a-z])$")
(2) ["h", "h", index: 0, input: "h", groups: undefined]
var a = "H"
a.match("^([a-z])$")
null
var a = "hii"
a.match("^([a-z]{3})$")
(2) ["hii", "hii", index: 0, input: "hii", groups: undefined]
var a = "hiii"
a.match("^([a-z]{3})$")
null
var a = "Hiii"
undefined
var a = "hiii"
a.match("^([a-z]{3})$")
null
var a = "Hiii"
a.match("^([a-z]{3})$")
null
var a = "Hii"
a.match("^([a-z]{3})$")
null

// exact 3 letters
var a = "Hii"
a.match("^([A-Za-z]{3})$")
(2) ["Hii", "Hii", index: 0, input: "Hii", groups: undefined]
// between range
var a = "Hii"
a.match("^([A-Za-z]{3,5})$")
(2) ["Hii", "Hii", index: 0, input: "Hii", groups: undefined]
// any length
var a = "Hii"
a.match("^([A-Za-z]+)$")
(2) ["Hii", "Hii", index: 0, input: "Hii", groups: undefined]

var a = "Hii10"
a.match("^([A-Za-z0-9$#]+)$")

var number = "4457894356"
number.match("^[0-9]{10}$")

var number = 4457894356
number.match("^[0-9]{10}$")

var number = 4457894356
number.match("^[0-9]{10}$")
VM136:2 Uncaught TypeError: number.match is not a function
    at <anonymous>:2:8
(anonymous) @ VM136:2
var number = 4457894356
number.toString().match("^[0-9]{10}$")
["4457894356", index: 0, input: "4457894356", groups: undefined]

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")