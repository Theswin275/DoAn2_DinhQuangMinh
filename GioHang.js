function plus(x) {
	console.log(x);
    // let inputField = document.getElementById(x);
	// console.log(inputField);


	// console.log(inputField);
    // let value = parseInt(inputField.value);
    // value += 1;
    // inputField.value = value;
}

// function sub(x) {
//     let inputField = document.querySelector();
//     let value = parseInt(inputField.value);
//     if (value > 1) {
//         value -= 1;
//     }
//     inputField.value = value;
// }


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

































// function plus(x)
// {
	
// 	a= parseInt(document.getElementById(x).value);
// 	a += 1;
// 	document.getElementById(x).value = a;
// }

// function sub(x)
// {
// 	a= parseInt(document.getElementById(x).value);
// 	if(a>1)
// 		a-=1;
// 	document.getElementById(x).value = a;
// }


// function next(x)
// {
// 	document.getElementById("product-photo").setAttribute("src","ToiVe"+x+".jpg");	
// }

// function inc(x,p){
//     a = parseInt(document.getElementById(x).value);
    
//     document.getElementById(x).value = a + 1;
//     document.getElementById(p).value =  products[i].price * (a+1)+"đ";
// }

// function dec(x,p){
//     a = parseInt(document.getElementById(x).value);
//     if(a>1)
// 	{
//     document.getElementById(x).value = a - 1;
//     document.getElementById(p).value = products[i].price * (a-1) +"đ";
// 	}
// }