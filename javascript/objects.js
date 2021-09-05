var moviename = "Avengers";
var movierating = 4.5
var movietype = "Action"

var moviename1 = "Jab We Met";
var movierating1 = 4.7
var movietype1 = "Romantic"

var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}

typeof(movie)
"object"
movie.name
"Avengers"
movie.rating
4.5
movie.type
"Action"
movie.rating = 4.7
4.7
movie
{name: "Avengers", rating: 4.7, type: "Action"}
movie.ind= "Hollywood"
"Hollywood"
movie
{name: "Avengers", rating: 4.7, type: "Action", ind: "Hollywood"}
delete movie.type
true
movie
{name: "Avengers", rating: 4.7, ind: "Hollywood"}

JSON

var movies = [
    {
        name:'Avengers',
        rating:4.5,
        type:'Action'
    },
    {
        name:'Jab We Met',
        rating:4.7,
        type:'Romantic'
    } 
]

movies[0].name
"Avengers"
movies[1].name
"Jab We Met"

var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}
undefined
movie['name']
"Avengers"

var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}

for(key in movie){
    console.log(key)
}

var movie = {
    name:'Avengers',
    rating:4.5,
    type:'Action'
}

for(key in movie){
    console.log(movie[key])
}


var calc = {
    sum: function(a,b){ return a+b},
    sub: (a,b) => {return a-b}
}

var calc = {
    sum: function(a,b){ return a+b},
    sub: (a,b) => {return a-b}
}
undefined
calc.sum(3,5)
8
calc.sum(1,2)
3
calc.sub(3,5)
-2