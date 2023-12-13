var giohang = new Array();
var tongTien = new Array();
var stt = 0;
var tongSL=0;

let chuoiKtra;
let chuoiSoSanh; 
var SoCongVao = 0;
var TongSo = 0;

function themvaogiohangCH1(a,b,c,d) {
    
    var bx = document.getElementById(a).parentElement.children;
    var hinh=bx[0].src;
    var by = document.getElementById(b).parentElement.children;
    var ten=by[0].innerText;


    var bz = document.getElementById(c).parentElement.children;
    var gia=bz[1].innerHTML;
    
    var bk = document.getElementById(d).parentElement.children;
    var soluong= bk[4].innerText;

    
    var item = [hinh, ten, gia, soluong];
    giohang.push(item);
    for (let i = giohang.length-1; i < giohang.length; i++) {
        chuoiKtra = giohang[i][1];
        SoCongVao = parseInt(giohang[i][3]);
        for (let j = 0; j < giohang.length-1; j++) {
            chuoiSoSanh = giohang[j][1];
            //Nếu sản phẩm đã tồn tại, nó sẽ cộng số lượng sản phẩm vào sản phẩm đó trong giỏ hàng và xóa sản phẩm mới thêm vào (để tránh trùng lặp).
            if (chuoiKtra == chuoiSoSanh){
                TongSo = parseInt(giohang[j][3]);
                TongSo+=SoCongVao;
                giohang[j][3]=TongSo;
                SoCongVao = 0;

                //Xóa sp thừa
                let valueToRemove = giohang[i];
                giohang = giohang.filter(item => item !== valueToRemove);

                for(let x = 0; x< giohang.length; x++){
                    console.log(giohang[x][3]);
                }
                console.log(TongAll);
                
                document.getElementById('TongSP').innerHTML=TongAll;
                TongAll+=parseInt(giohang[x][3]);

            }
        }
        console.log('-----',i)
    }
    
    sessionStorage.setItem("tongSL",JSON.stringify(tongSL));

    sessionStorage.setItem("giohang1",JSON.stringify(giohang));
}
let tong=0;


let Slg = 0;
function showgiohang1() {
    var gh = sessionStorage.getItem("giohang1")
    var giohang = JSON.parse(gh);
    let ttgh="";
    let dem=giohang.length;
    for(let i=0; i< giohang.length; i++){
        let tt= parseFloat(giohang[i][2])*parseInt(giohang[i][3]);
        tong+=tt;
        let s=i+1;
        let j=i+999999999;
        let z=i+100000000;
        let hinhsp = "<img src='"+ giohang[i][0] +"' width='45px'>";
        let tensp= giohang[i][1];
        let dGia= giohang[i][2];
        let Sl= giohang[i][3];
        Slg+=parseInt(Sl,10);

        ttgh += "<tr>";
        ttgh += "<td>"+ s +"</td>";
        ttgh += "<td style='width: 45px;text-align: center;'>" + hinhsp + "</td>";
        ttgh += "<td style='text-align: center;'>"+ tensp +"</td>";
        ttgh += "<td style='text-align: center;' id='"+ j +"'>"+ dGia +"</td>";
        ttgh += "<td style='text-align: center;' id='"+ i +"'>"+ Sl +"</td>";
        ttgh += "<td style='text-align: center;' id='"+ z +"'>"+ tt +"</td>";
        ttgh += "<td style='text-align: center;'><input type='button' value='Xóa' onclick='Xoa(this);'></td>";
        ttgh += "<td><input onclick='sub2(\""+i+"\", \""+j+"\", \""+z+"\");TruSL();' style='position: absolute;margin-top: -13px;margin-left: -250px;' type='button' value='-'></td>";
        ttgh += "<td><input onclick='plus2(\""+i+"\", \""+j+"\", \""+z+"\");CongSL();' style='position: absolute;margin-top: -13px;margin-left: -200px;' type='button' value='+'></input></td>";
        ttgh += "<tr>";
        
        document.getElementById('tongSP').innerText=j;
        togSL=parseInt(Sl,10);
        tongTien.push(tt);

        tong+=Sl;
    }
    document.getElementById('chitietgiohang').innerHTML=ttgh;
    thanhTien();
    console.log(tong);
    document.getElementById('tongSP').innerText=tongSL;

}


function sub2(m,n,q) {
    let x = parseInt(document.getElementById(m).innerText);
    let y = parseInt(document.getElementById(n).innerText);
    if(x==0){
        document.getElementById(m).innerText=parseInt(x);
        document.getElementById('tongSP').innerText=0;
    }else{
        x-=1;
        document.getElementById(m).innerText=parseInt(x);
        let TT= x*y;
        document.getElementById(q).innerText=parseInt(TT);
        var TienHienTai0 = document.getElementById('TamTinh').innerText;
        TienHienTai0 = parseInt(TienHienTai0) - y;
        document.getElementById('TamTinh').innerText = TienHienTai0;
        document.getElementById('TongCong').innerText = TienHienTai0;
    }
}

function plus2(o,u,k) {
    let w = parseInt(document.getElementById(o).innerHTML);
    let e = parseInt(document.getElementById(u).innerHTML);
    w+=1;
    document.getElementById(o).innerHTML=parseInt(w);
    let TT2= w*e;
    document.getElementById(k).innerHTML=parseInt(TT2);    

    var TienHienTai = document.getElementById('TamTinh').innerText;
    TienHienTai = parseInt(TienHienTai) + e;
    document.getElementById('TamTinh').innerText = TienHienTai;
    document.getElementById('TongCong').innerText = TienHienTai;
}


//xử lý số lượng
let a = 0;
function tuCongSoLuong(){
    a=a+1;
    sessionStorage.setItem("tongSLneee",JSON.stringify(a));
}

function nhanSoLuongNe(){
    var gh = sessionStorage.getItem("tongSLneee")
    document.getElementById('tongSP').innerText = gh;
}

// xử lý tiền
let b = 0;
function tuCongSoTien(x){
    let l = document.getElementById(x).innerHTML;
    b=b+ parseInt(l);
    sessionStorage.setItem("tongTienneee",JSON.stringify(b));
}

function nhanSoTienNe(){
    var gz = sessionStorage.getItem("tongTienneee")
    document.getElementById('TamTinh').innerText = gz;
    document.getElementById('TongCong').innerText = gz;
}

//Trừ số lượng khi thay đổi
function TruSL(){
    var f = document.getElementById('tongSP').innerText;
    f = parseInt(f) - 1;
    document.getElementById('tongSP').innerText = f;
}

//Cộng số lượng khi thay đổi
function CongSL(){
    var j = document.getElementById('tongSP').innerText;
    j = parseInt(j) + 1;
    document.getElementById('tongSP').innerText = j;
}

// Xóa riêng
function Xoa(x){
    var ty=x.parentElement.parentElement;
    var tr=x.parentElement.parentElement.children;
    var truuSL = tr[4].innerHTML; //lấy ra được số lượng sản phẩm SanPham ấy hiện tại
    var truuTT = tr[5].innerHTML; //lấy ra được tổng tiền sản phẩm SanPham ấy hiện tại
    console.log(x.parentElement.parentElement);

    var TongSPHienTaiTatCa = document.getElementById('tongSP').innerText;
    TongSPHienTaiTatCa = parseInt(TongSPHienTaiTatCa) - truuSL;
    document.getElementById('tongSP').innerText = TongSPHienTaiTatCa;

    var TongTienHienTaiTatCa = document.getElementById('TamTinh').innerText;
    TongTienHienTaiTatCa = parseInt(TongTienHienTaiTatCa) - truuTT;
    document.getElementById('TamTinh').innerText = TongTienHienTaiTatCa;
    document.getElementById('TongCong').innerText = TongTienHienTaiTatCa;

    ty.remove();   
}
function NhanDuLieu() {
    var gg = sessionStorage.getItem("guilaiSogiohang");
    let DuLieuNhanVe = JSON.parse(gg);
    console.log(DuLieuNhanVe);
    document.getElementById('soGioHang1').innerHTML=DuLieuNhanVe;
}