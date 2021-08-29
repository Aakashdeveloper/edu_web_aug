var city = [
    {
      "_id": 1,
      "city_name": "Delhi",
      "city": 1,
      "country_name": "India"
    },
    {
      "_id": 3,
      "city_name": "Pune",
      "city": 3,
      "country_name": "India"
    },
    {
      "_id": 2,
      "city_name": "Mumbai",
      "city": 2,
      "country_name": "India"
    },
    {
      "_id": 4,
      "city_name": "Chandigarh",
      "city": 4,
      "country_name": "India"
    },
    {
      "_id": 5,
      "city_name": "Goa",
      "city": 5,
      "country_name": "India"
    },
    {
      "_id": 6,
      "city_name": "Manali",
      "city": 6,
      "country_name": "India"
    }
  ]

function getCity(){
    for(i=0;i<city.length;i++){
        var element = document.createElement("option");
        var text = document.createTextNode(city[i].city_name);
        element.appendChild(text)
        element.value=city[i]._id;
        document.getElementById('city').appendChild(element);
    }
}





/*
<h1></h1>
var element = document.createElement('h1')
'Hiiiiii testing'
var test = document.createTextNode('Hiiiiii testing')
<h1>Hiiiiii testing</h1>
element.appendChild(test)


var target = document.getElementById('search')

<search>
    <h1>​Hiiiiii testing​</h1>​
</search>
target.appendChild(element)
*/
