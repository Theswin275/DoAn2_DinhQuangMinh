function plus(x)
{
	
	a= parseInt(document.getElementById(x).value);
	a += 1;
	document.getElementById(x).value = a;
}

function sub(x)
{
	a= parseInt(document.getElementById(x).value);
	if(a>1)
		a-=1;
	document.getElementById(x).value = a;
}


function next(x)
{
	document.getElementById("product-photo").setAttribute("src","ToiVe"+x+".jpg");	
}

function inc(x,p){
    a = parseInt(document.getElementById(x).value);
    
    document.getElementById(x).value = a + 1;
    document.getElementById(p).value =  products[i].price * (a+1)+"đ";
}

function dec(x,p){
    a = parseInt(document.getElementById(x).value);
    if(a>1)
	{
    document.getElementById(x).value = a - 1;
    document.getElementById(p).value = products[i].price * (a-1) +"đ";
	}
}