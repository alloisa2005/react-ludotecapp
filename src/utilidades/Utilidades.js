
export function separadorMiles(num) {
    let reg = /\d{1,3}(?=(\d{3})+$)/g;
    return (num + '').replace(reg, '$&.');
}

export function tituloMayuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function transformarFecha(fechaStamp){

    let dia = fechaStamp.toDate().getDate();    
    let mes = fechaStamp.toDate().getMonth() + 1;    
    let anio = fechaStamp.toDate().getFullYear();        

    if(mes < 10){
        mes = '0' + mes;
    }
    return  dia + '/' + (mes) + '/' + anio;    
}