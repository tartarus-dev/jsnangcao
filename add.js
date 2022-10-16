// Declartion
var form = document.querySelector('#form')
var nameEl = document.querySelector('#name')
var priceEl = document.querySelector('#price')
var amountEl = document.querySelector('#amount')
var btn = document.querySelector('.btn-submit')
var categories = document.querySelector('#categories')




function createDish(data) {
    return fetch('http://localhost:3000/dish', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(function (res) {
        return res.json()
    })
}

form.onsubmit = function (e) {
    e.preventDefault()
    var name = nameEl.value
    var price = priceEl.value
    var amount = amountEl.value
    var category = categories.value
    

    console.log(name, price, amount, "----------");
    var data = { name, price, amount, category }
    // Tạo mới món ăn
    createDish(data).then(function (result) {
        location.href = "index.html"
    })
}