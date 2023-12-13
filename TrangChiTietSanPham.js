var giohang = new Array();
var tongTien = new Array();
var stt = 0;
var tongSL = 0;

function themvaogiohang(a, b, c, d) {
    var bx = document.getElementById(a).parentElement.children;
    var hinh = bx[0].src;

    var by = document.getElementById(b).parentElement.children;
    var ten = by[0].innerText;


    var bz = document.getElementById(c).parentElement.children;
    var gia = bz[3].innerText;

    var bk = document.getElementById(d).parentElement.children;
    var soluong = bk[2].innerText;

    var item = [hinh, ten, gia, soluong];


    if (giohang.length < 1) {
        // Nếu giỏ hàng trống, thêm sản phẩm mới vào giỏ hàng và cập nhật tổng số lượng
        giohang.push(item);
        tongSL += parseInt(item[3], 10);
        document.getElementById('soGioHang').innerHTML = tongSL;
    }
    else {
        // Nếu giỏ hàng không trống, kiểm tra xem sản phẩm đã tồn tại trong giỏ hay chưa
        for (let j = 0; j < giohang.length; j++) {
            // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật tổng số lượng sản phẩm
            if (item[1] == giohang[j][1]) {
                tongSL += parseInt(item[3], 10);
                giohang[j][3] = tongSL;
                document.getElementById('soGioHang').innerHTML = tongSL;
            }
        }
    }
    //Lưu thông tin vào sessionStorage
    sessionStorage.setItem("tongSL", JSON.stringify(tongSL));
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
}


function showgiohang() {
    var gh = sessionStorage.getItem("giohang")
    var giohang = JSON.parse(gh);
    //
    var ok = sessionStorage.getItem("tongSL");
    var oke = JSON.parse(ok);
    sessionStorage.setItem("tongSLquayLai", JSON.stringify(oke));


    var TongAll = 0;
    console.log(TongAll);
    let ttgh = "";
    let tong = 0;
    for (let i = 0; i < giohang.length; i++) {
        
        // Tính tổng tiền cho từng sản phẩm và tổng tiền của toàn bộ giỏ hàng
        let tt = parseFloat(giohang[i][2]) * parseInt(giohang[i][3]);
        tong += tt;

        // Lấy thông tin từ mảng giohang để hiển thị trên giao diện
        let j = i + 1;
        let hinhsp = "<img src='" + giohang[i][0] + "' width='45px'>";
        let tensp = giohang[i][1];
        let dGia = giohang[i][2];
        let Sl = giohang[i][3];

        ttgh += "<tr>";
        ttgh += "<td>"+ j +"</td>";
        ttgh += "<td style='width: 45px;text-align: center;'>" + hinhsp + "</td>";
        ttgh += "<td style='text-align: center;'>"+ tensp +"</td>";
        ttgh += "<td style='text-align: center;'>"+ dGia +"</td>";
        ttgh += "<td style='text-align: center;' id='"+ j +"'>"+ Sl +"</td>";
        ttgh += "<td style='text-align: center;'>"+ tt +"</td>";
        ttgh += "<td style='text-align: center;''><input type='button' value='Xóa'></td>";
        ttgh += "<input onclick='sub1(this)' style='position: fixed;margin-top: -45px;margin-left: 450px;' type='button' value='-'>";
        ttgh += "<input onclick='plus1(this)' style='position: fixed;margin-top: -45px;margin-left: 500px;' type='button' value='+'></input>";
        ttgh += "<tr>";

        
        togSL=parseInt(Sl,10);
        tongTien.push(tt);        
        
        document.getElementById('tongSP').innerText=j;
        
    }

    document.getElementById('chitietgiohang').innerHTML=ttgh;
    thanhTien();  
}

function sub1(x) {
    var tn=x.parentElement.parentElement.children;
    let a = parseInt(tn[1].children[0].children[4].innerHTML);
    if(a==0){
        tn[1].children[0].children[4].innerHTML=parseInt(a);
        tn[1].children[0].children[5].innerHTML=0;
    }else{
        a-=1;
        tn[1].children[0].children[4].innerHTML=parseInt(a);
        let b = parseInt(tn[1].children[0].children[3].innerHTML);
        let TongTien = parseInt(a)*parseInt(b);
        tn[1].children[0].children[5].innerHTML = TongTien;
        tn[1].children[0].children[4].innerHTML=parseInt(a);
    }
    
}

function plus1(x) {
    var tn=x.parentElement.parentElement.children;
    let a = parseInt(tn[1].children[0].children[4].innerHTML);
    a+=1;

    let b = parseInt(tn[1].children[0].children[3].innerHTML);

    let TongTien = parseInt(a)*parseInt(b);
    tn[1].children[0].children[5].innerHTML = TongTien;
    tn[1].children[0].children[4].innerHTML=parseInt(a);
}
// function ChSoLuong(x) {
//     var bx = document.getElementById(x).innerHTML;
//     console.log(bx);
//     sessionStorage.setItem("guilaiSogiohang",JSON.stringify(bx));

// }
function showSoGioHang(){ 
    var okNha = sessionStorage.getItem("tongSLquayLai");
    var MongLaDuoc = JSON.parse(okNha);
    document.getElementById('soGioHang').innerHTML=MongLaDuoc;
}

//hoàn thiện
function thanhTien(){
    let thanhTienAll = 0;
    for (let z = 0; z< tongTien.length; z++){
        thanhTienAll+=tongTien[z];
    }
    document.getElementById('TamTinh').innerHTML=thanhTienAll+'đ';
    document.getElementById('TongCong').innerHTML=thanhTienAll+'đ';
}

let togSL;
let truTien = 0;
let capnhaptien = 0;
function Xoa(x){
    var ty=x.parentElement.parentElement;
    var tr=x.parentElement.parentElement.children;
    var truSL = tr[4].innerHTML;
    truTien-=parseInt(capnhaptien, 10);
    document.getElementById('TamTinh').innerHTML=truTien+'đ';
    document.getElementById('TongCong').innerHTML=truTien+'đ';
    document.getElementById('tongSP').innerText=0;
    togSL-=parseInt(truSL);
    ty.remove();   
}

function XoaTatCa() {
    let tienXoaALL = 0;
    document.getElementById('chitietgiohang').innerHTML="";
    document.getElementById('TamTinh').innerHTML=tienXoaALL+'đ';
    document.getElementById('TongCong').innerHTML=tienXoaALL+'đ';
    document.getElementById('tongSP').innerText=0;
}

function NhanDuLieu() {
    var gg = sessionStorage.getItem("guilaiSogiohang");
    let DuLieuNhanVe = JSON.parse(gg);
    console.log(DuLieuNhanVe);
    document.getElementById('soGioHang1').innerHTML=DuLieuNhanVe;
}








