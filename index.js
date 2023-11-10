var giohang = new Array();
var tongTien = new Array();
var stt = 0;
var tongSL=0;
// let j = 0;

let chuoiKtra;
let chuoiSoSanh; 
var SoCongVao = 0;
var TongSo = 0;
// var TongAll = 0;

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
            if (chuoiKtra == chuoiSoSanh){
                TongSo = parseInt(giohang[j][3]);
                TongSo+=SoCongVao;
                giohang[j][3]=TongSo;
                SoCongVao = 0;

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
    
    
    // if (giohang.length < 1){
    //     tongSL+=parseInt(item[3], 10);
    //     document.getElementById('soGioHang').innerHTML=tongSL;
    // }
    // else{
    //     for (let j = 0; j < giohang.length; j++) {
    //         if (item[j]==giohang[j][1]){
    //             tongSL+=parseInt(item[3], 10);
    //             giohang[j][3]=tongSL;
    //             document.getElementById('soGioHang').innerHTML=tongSL;
    //         }
    //     }
    // }
    
    sessionStorage.setItem("tongSL",JSON.stringify(tongSL));

    sessionStorage.setItem("giohang1",JSON.stringify(giohang));
}
let tong=0;


let Slg = 0;
function showgiohang1() {
    var gh = sessionStorage.getItem("giohang1")
    var giohang = JSON.parse(gh);
    // console.log(giohang);
    //
    // var ok = sessionStorage.getItem("tongSL");
    // var oke = JSON.parse(ok);
    // sessionStorage.setItem("tongSLquayLai",JSON.stringify(oke));

    //
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
        
        // ttgh += "<tr>";
        // ttgh += "<td style='text-align: center;'>"+j+"</td>";
        // ttgh += "<td style='width: 45px;text-align: center;'>"+hinhsp+"</td>";
        // ttgh += "<td>"+tensp+"</td>";
        // ttgh += "<td style='text-align: center;'>"+dGia+"</td>";
        // ttgh += "<td style='text-align: center;'>"+Sl+"</td>";
        // ttgh += "<td style='text-align: center;'>"+tt+"</td>";
        // ttgh += "<td><input type='button' value='Sửa' style='width: 60px;height: 30px;' onclick='Sua(this)'></td>";
        // ttgh += "<td><input type='button' value='Xóa' style='width: 60px;height: 30px;' onclick='Xoa(this)'></td>";
        // ttgh += "<tr>";

        ttgh += "<tr>";
        ttgh += "<td>"+ s +"</td>";
        ttgh += "<td style='width: 45px;text-align: center;'>" + hinhsp + "</td>";
        ttgh += "<td style='text-align: center;'>"+ tensp +"</td>";
        ttgh += "<td style='text-align: center;' id='"+ j +"'>"+ dGia +"</td>";
        ttgh += "<td style='text-align: center;' id='"+ i +"'>"+ Sl +"</td>";
        ttgh += "<td style='text-align: center;' id='"+ z +"'>"+ tt +"</td>";
        ttgh += "<td style='text-align: center;'><input type='button' value='Xóa'></td>";
        ttgh += "<input onclick='sub2(\""+i+"\", \""+j+"\", \""+z+"\")' style='position: fixed;margin-top: -45px;margin-left: 450px;' type='button' value='-'>";
        ttgh += "<input onclick='plus2(\""+i+"\", \""+j+"\", \""+z+"\", "+dem+", "+s+","+Slg+")' style='position: fixed;margin-top: -45px;margin-left: 500px;' type='button' value='+'></input>";
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
    }else{
        x-=1;
        document.getElementById(m).innerText=parseInt(x);
    }
    let TT= x*y;
    document.getElementById(q).innerText=parseInt(TT);


    document.getElementById('tongSP').innerText=0;

}

function plus2(o,u,k,h,s,b) {
    console.log(b);
    let w = parseInt(document.getElementById(o).innerHTML);
    let e = parseInt(document.getElementById(u).innerHTML);
    w+=1;
    document.getElementById(o).innerHTML=parseInt(w);
    let TT2= w*e;
    document.getElementById(k).innerHTML=parseInt(TT2);

    if(parseInt(o) == parseInt(h-1)){
        console.log("Ok Chuan roi");
    }
    else{
        console.log("Sai rồi");
    }
    alert(document.getElementById('chitietgiohang').innerHTML);
}

// //hoàn thiện
// // function thanhTien(){
// //     let thanhTienAll = 0;
// //     for (let z = 0; z< tongTien.length; z++){
// //         thanhTienAll+=tongTien[z];
// //     }
// //     document.getElementById('TamTinh').innerHTML=thanhTienAll+'đ';
// //     document.getElementById('TongCong').innerHTML=thanhTienAll+'đ';

// //     // truTien = thanhTienAll;
// // }

// // let togSL;
// // let truTien = 0;
// // let capnhaptien = 0;
// function Xoa(x){
//     var ty=x.parentElement.parentElement;
//     var tr=x.parentElement.parentElement.children;
//     var truuSL = tr[4].innerHTML;
//     truTien-=parseInt(capnhaptien, 10);
//     document.getElementById('TamTinh').innerHTML=truTien+'đ';
//     document.getElementById('TongCong').innerHTML=truTien+'đ';
//     document.getElementById('tongSP').innerText=0;
//     togSL-=parseInt(truuSL);
//     ty.remove();   
// }