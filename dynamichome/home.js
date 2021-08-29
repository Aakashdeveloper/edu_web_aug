var url = "https://developerfunnel.herokuapp.com/location"
var quickSearch = "https://developerfunnel.herokuapp.com/booking"
var hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

function getCity(){
    fetch(url)
    //promise and return promise
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            var element = document.createElement("option");
            var text = document.createTextNode(data[i].city_name);
            element.appendChild(text)
            element.value=data[i]._id;
            document.getElementById('city').appendChild(element);
        }
    })
}

function getHotels(){
    var cityId =  document.getElementById('city').value;
    var hotelBlock = document.getElementById('hotels');
    while(hotelBlock.length>0){
        hotelBlock.remove(0)
    }
    fetch(`${hotelUrl}${cityId}`)
    .then((res) => res.json())
    .then((data) => {
        for(i=0;i<data.length;i++){
            var element = document.createElement("option");
            var text = document.createTextNode(`${data[i].name} | ${data[i].locality}`);
            element.appendChild(text)
            hotelBlock.appendChild(element);
        }
    })
}