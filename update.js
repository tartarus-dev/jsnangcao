
var url= 'http://localhost:3000/dish'
fetch (url) 
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        // console.log(data)
    })  
    
    var params = new URLSearchParams(window.location.search);
    console.log(params)
// var apiShowUrl = "http://localhost:3000/dish/" + params.get("id");


// fetch(apiShowUrl)
//     .then(function(res){
//         return res.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })
    
// var formUpdate = document.querySelector('#form-update')
// formUpdate.addEventListener('submit',function(){
    
// var name = document.querySelector('#name').value
// var price = document.querySelector('#price').value
// var amount = document.querySelector('#amount').value
// var btn = document.querySelector('.btn-submit').value
// var categories = document.querySelector('#categories').value

// var data = {
//     name:name,
//     price:price,
//     amount:amount,
//     category:categories,
// }   
// var option ={
//     mmethod: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(data)
// }
//     fetch(apiShowUrl, option)
// })