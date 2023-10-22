var giohang = new Array();
var tongTien = new Array();
var stt = 0;
var tongSL=0;

function themvaogiohang(a,b,c,d) {
    var bx = document.getElementById(a).parentElement.children;
    var hinh=bx[0].src;

    var by = document.getElementById(b).parentElement.children;
    var ten=by[0].innerText;


    var bz = document.getElementById(c).parentElement.children;
    var gia=bz[3].innerText;
    
    var bk = document.getElementById(d).parentElement.children;
    var soluong= bk[2].innerText;
    
    var item = [hinh, ten, gia, soluong];
    
    
    if (giohang.length < 1){
        giohang.push(item);
        tongSL+=parseInt(item[3], 10);
        document.getElementById('soGioHang').innerHTML=tongSL;
    }
    else{
        for (let j = 0; j < giohang.length; j++) {
            if (item[1]==giohang[j][1]){
                tongSL+=parseInt(item[3], 10);
                giohang[j][3]=tongSL;
                document.getElementById('soGioHang').innerHTML=tongSL;
            }
        }
    }
    
    sessionStorage.setItem("tongSL",JSON.stringify(tongSL));

    sessionStorage.setItem("giohang",JSON.stringify(giohang));
}


function showgiohang() {
    var gh = sessionStorage.getItem("giohang")
    var giohang = JSON.parse(gh);
    //
    var ok = sessionStorage.getItem("tongSL");
    var oke = JSON.parse(ok);
    sessionStorage.setItem("tongSLquayLai",JSON.stringify(oke));
    
    
    var TongAll = 0;
    console.log(TongAll);
    let ttgh="";
    let tong=0;
    for(let i=0; i< giohang.length; i++){
        let tt= parseFloat(giohang[i][2])*parseInt(giohang[i][3]);
        tong+=tt;
        let j=i+1;
        let hinhsp = "<img src='"+ giohang[i][0] +"' width='45px'>";
        let tensp= giohang[i][1];
        let dGia= giohang[i][2];
        let Sl= giohang[i][3];
        
        ttgh += "<tr>";
        ttgh += "<td style='text-align: center;'>"+j+"</td>";
        ttgh += "<td style='width: 45px;text-align: center;'>"+hinhsp+"</td>";
        ttgh += "<td>"+tensp+"</td>";
        ttgh += "<td style='text-align: center;'>"+dGia+"</td>";
        ttgh += "<td style='text-align: center;'>"+Sl+"</td>";
        ttgh += "<td style='text-align: center;'>"+tt+"</td>";
        ttgh += "<td><input type='button' value='Sửa' style='width: 60px;height: 30px;' onclick='Sua(this)'></td>";
        ttgh += "<td><input type='button' value='Xóa' style='width: 60px;height: 30px;' onclick='Xoa(this)'></td>";
        ttgh += "<tr>";
        
        togSL=parseInt(Sl,10);
        tongTien.push(tt);
        // tongTien.push(tt);
        // TongAll+=parseInt(Sl);
        
        
        document.getElementById('tongSP').innerText=j;
        
    }
    // console.log(TongAll);
    
    // document.getElementById('tongSP').innerText=TongAll;
    document.getElementById('chitietgiohang').innerHTML=ttgh;
    thanhTien();
    console.log(giohang);
    
}

function ChSoLuong(x) {
    var bx = document.getElementById(x).innerHTML;
    console.log(bx);
    sessionStorage.setItem("guilaiSogiohang",JSON.stringify(bx));

}

function showSoGioHang(){ 
    var okNha = sessionStorage.getItem("tongSLquayLai");
    var MongLaDuoc = JSON.parse(okNha);
    console.log(MongLaDuoc);
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

    // truTien = thanhTienAll;
}

let togSL;
let truTien = 0;
let capnhaptien = 0;
function Xoa(x){
    var ty=x.parentElement.parentElement;
    var tr=x.parentElement.parentElement.children;
    var truuSL = tr[4].innerHTML;
    truTien-=parseInt(capnhaptien, 10);
    document.getElementById('TamTinh').innerHTML=truTien+'đ';
    document.getElementById('TongCong').innerHTML=truTien+'đ';
    document.getElementById('tongSP').innerText=0;
    togSL-=parseInt(truuSL);
    ty.remove();   
}

function XoaTatCa() {
    let tienXoaALL = 0;
    document.getElementById('chitietgiohang').innerHTML="";
    document.getElementById('TamTinh').innerHTML=tienXoaALL+'đ';
    document.getElementById('TongCong').innerHTML=tienXoaALL+'đ';
    document.getElementById('tongSP').innerText=0;
}


function Sua(x){
    var tm=x.parentElement.parentElement;
    var tn=x.parentElement.parentElement.children;
    var donGiaSP = tn[3].innerHTML;
    tn[4].innerHTML= CanSua;
    var TongTien = parseInt(donGiaSP)*parseInt(CanSua);
    tn[5].innerHTML= TongTien;
    capnhaptien = TongTien;
    truTien = TongTien;
    document.getElementById('TamTinh').innerHTML=TongTien+'đ';
    document.getElementById('TongCong').innerHTML=TongTien+'đ';
}

let CanSua;
function SuaSoLuong(x,y) {
    var slsua = document.getElementById(x).value;
    CanSua = slsua;
    document.getElementById(y).style.opacity = 0 ;
}

function CapNhap(x){
    document.getElementById(x).style.opacity = 1 ;
}

function HuySua(x){
    document.getElementById(x).style.opacity = 0 ;
}

function NhanDuLieu() {
    var gg = sessionStorage.getItem("guilaiSogiohang");
    let DuLieuNhanVe = JSON.parse(gg);
    console.log(DuLieuNhanVe);
    document.getElementById('soGioHang1').innerHTML=DuLieuNhanVe;
}








