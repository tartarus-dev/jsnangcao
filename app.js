// Declartion
var table = document.querySelector('#table')
var form = document.querySelector('#form')
var nameEl = document.querySelector('#name')
var priceEl = document.querySelector('#price')
var amountEl = document.querySelector('#amount')

function getDish() {
    return fetch('http://localhost:3000/dish')
        .then(function (res) {
            return res.json()
        })
}



getDish().then(function (result) {
    console.log(result, "result");
    render(result)
})

function render(data) {
    var content = ""
    if (data) {
        data.forEach(function (dish, index) {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${dish.name}</td>
                    <td>${dish.price}</td>
                    <td>chưa có</td>
                    <td>${dish.category}</td>
                    <td>${dish.amount<1 ? "Hết Hàng" : "Còn Hàng"}</td>
                    <td>
                    <button class="btn-update">Sửa</button>
                    <button class="btn-delete">Xóa</button>
                    </td>
                </tr>
            `
        });
    }
    table.innerHTML = content
}
