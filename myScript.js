











$(document).ready(function () {
    $(".button_cart").click(function () {
        var cartAmount = Number(sessionStorage.getItem("cartAmount"));
        //alert(cartAmount);
        if (cartAmount != null)
            cartAmount += 1;
        else
            cartAmount = 1;
        $("#cart").text("Giỏ hàng của bạn (" + cartAmount + ")");
        sessionStorage.setItem("cartAmount", cartAmount);
        var pImg = $(this).parent().parent().parent().parent().find(".item-photo").attr("src");
        var pName = $(this).parent().parent().parent().parent().find(".product-name").text();
        var pPrice = $(this).parent().parent().parent().parent().find(".new-price").text();
        var product = {
            "img": pImg,
            "name": pName,
            "price": pPrice
        };

        //alert(pImg +" "+pName+" "+pPrice);
        var cart = sessionStorage.getItem("cart");
        var cartProducts = "";
        if (cart != null) {
            cartProducts = cart + "," + JSON.stringify(product);
        } else
            cartProducts = JSON.stringify(product);
        sessionStorage.setItem("cart", cartProducts);
        //alert(cartProducts);					
    });

});























function plus(x) // X là một điều khiển
{
    a = parseInt(document.getElementById(x).value);
    a += 1;
    document.getElementById(x).value = a;
}
function sub(x) {
    a = parseInt(document.getElementById(x).value);
    if (a > 1)
        a -= 1;
    document.getElementById(x).value = a;
}
var i = 1;
var N = 2;
function next() {
    if (i < N)
        i += 1;
    else
        i = 1;
    document.getElementById("slide").setAttribute("src", "images/" + i + ".jpg");
}
function back() {
    if (i > 1)
        i -= 1;
    else
        i = N;
    document.getElementById("slide").setAttribute("src", "images/" + i + ".jpg");
}

function autoplay() {
    setInterval(next, 5000);
}




























function addToCart(item) {
    // debugger;
    item.quantity = 1;
    console.log(item.quantity);
    var list;
    if (localStorage.getItem('cart') == null) {
        list = [item];
    } else {
        list = JSON.parse(localStorage.getItem('cart')) || [];
        let ok = true;
        for (let x of list) {
            if (x.id == item.id) {
                x.quantity += 1;
                ok = false;
                break;
            }
        }
        if (ok) {
            list.push(item);
        }
    }
    localStorage.setItem('cart', JSON.stringify(list));
    alert("Đã thêm giỏ hàng thành công!");
}
var list = JSON.parse(localStorage.getItem('cart'));
function LoadData() {
    var str = "";
    var t = 0;
    for (x of list) {
        t += x.price * x.quantity;
        str += `<tr>
                        <td><i onclick="Xoa(`+ x.id + `)" class="fa fa-times-circle" style="font-size:30px;color:red;cursor: pointer;" title="Xóa"></i></td>
                        <td><img style="width: 50px; height: 50px;" src="`+ x.image + `"> </td>
                        <td>`+ x.name + `</td>
                        <td>`+ x.price + `đ</td>
                        <td> 
                            <button onclick="Giam(`+ x.id + `)" style="border: 1px solid #dbdbdb;padding: 4px 8px;">-</button>
                            <input id="q_`+ Number(x.id) + `" onchange="updateQuantity(` + x.id + `)" type="text" value="` + x.quantity + `" style="width: 35px;border: 1px solid #dbdbdb;padding: 4px;margin-left: -5px;margin-right: -5px;">
                            <button onclick="Tang(`+ x.id + `)" style="border: 1px solid #dbdbdb;padding: 4px 8px;">+</button>
                        </td>
                        <td>`+ (x.price * x.quantity) + `đ</td>
                    </tr>
                 `;
    }
    document.getElementById("listCart").innerHTML = str;
    $("#spTong").text(t);
    $("#tTong").text(t);
}
function XoaCart() {
    if (confirm("Bạn muốn xóa tất cả sản phẩm khỏi giỏ hàng!")) {
        localStorage.setItem('cart', null);
        location.reload();
    }
}
function Xoa(id) {
    if (confirm("Bạn muốn xóa sản phẩm này khỏi giỏ hàng!")) {
        var index = list.findIndex(x => x.id == id);
        if (index >= 0) {
            list.splice(index, 1);
        }
        LoadData();
    }
}
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(list));
    alert("Đã cập nhật thông tin giỏ hàng thành công!");
}
function Tang(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0) {
        list[index].quantity += 1;
    }
    LoadData();
}
function Giam(id) {
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity -= 1;
    }
    LoadData();
}
function updateQuantity(id) {
    var quantity = Number($('#q_' + id).val());
    var index = list.findIndex(x => x.id == id);
    if (index >= 0 && list[index].quantity >= 1) {
        list[index].quantity = quantity;
    }
    LoadData();
}
function ThanhToan() {
    window.location.href = "ThanhToan.html";
}
LoadData();