
const verVentana = (url) =>{
    var ventana = window.open(url, "ventana", "width=500, height=400");
	ventana.focus();

}


const verReloj = () =>{
    var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();

	document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
	t=setTimeout('verReloj()',500);
	
	// clearTimeout(t);

}
