function add(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)+Number(b)
    document.getElementById('output').innerText = `Addition of number is ${out}`
}
function sub(){
    var a = document.getElementById('first').value;
    var b = document.getElementById('second').value;
    var out = Number(a)-Number(b)
    document.getElementById('output').innerText = `Subtraction of number is ${out}`
}