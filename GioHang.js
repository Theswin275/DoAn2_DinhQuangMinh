function XoaTatCa() {
    let tienXoaALL = 0;
    document.getElementById('chitietgiohang').innerHTML="";
    document.getElementById('TamTinh').innerHTML=tienXoaALL+'đ';
    document.getElementById('TongCong').innerHTML=tienXoaALL+'đ';
    document.getElementById('tongSP').innerText=0;
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
        let tt = parseFloat(giohang[i][2]) * parseInt(giohang[i][3]);
        tong += tt;
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
    console.log(giohang);
    
}

function nhanSoLuongNe(){
    var gh = sessionStorage.getItem("tongSLneee")
    document.getElementById('tongSP').innerText = gh;
}

function nhanSoTienNe(){
    var gz = sessionStorage.getItem("tongTienneee")
    document.getElementById('TamTinh').innerText = gz;
    document.getElementById('TongCong').innerText = gz;
}






























































function plus(x) {
	console.log(x);
    // let inputField = document.getElementById(x);
	// console.log(inputField);


	// console.log(inputField);
    // let value = parseInt(inputField.value);
    // value += 1;
    // inputField.value = value;
}


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
