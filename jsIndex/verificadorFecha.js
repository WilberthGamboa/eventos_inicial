
let esFecha = (Cadena) =>{

    var Fecha= new String(Cadena)   // Crea un string  
    var RealFecha= new Date()   // Para sacar la fecha de hoy  
    // Cadena Año  
    var Ano= new String(Fecha.substring(Fecha.lastIndexOf("-")+1,Fecha.length))  
    // Cadena Mes  
    var Mes= new String(Fecha.substring(Fecha.indexOf("-")+1,Fecha.lastIndexOf("-")))  
    // Cadena Día  
    var Dia= new String(Fecha.substring(0,Fecha.indexOf("-")))  
  
    // Valido el año  
    if (isNaN(Ano) || Ano.length<4 || parseFloat(Ano)<1900){  
            alert('Año inválido')  
        return false  
    }  
    // Valido el Mes  
    if (isNaN(Mes) || parseFloat(Mes)<1 || parseFloat(Mes)>12){  
        alert('Mes inválido')  
        return false  
    }  
    // Valido el Dia  
    if (isNaN(Dia) || parseInt(Dia, 10)<1 || parseInt(Dia, 10)>31){  
        alert('Día inválido')  
        return false  
    }  
    if (Mes==4 || Mes==6 || Mes==9 || Mes==11 || Mes==2) {  
        if (Mes==2 && Dia > 28 || Dia>30) {  
            alert('Día inválido')  
            return false  
        }  
    }  
      
  //para que envie los datos, quitar las  2 lineas siguientes  
  //alert("Fecha correcta.")  
  return true;    
    
}

