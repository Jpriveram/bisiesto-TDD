function esbisiesto(anio){

    if (anio%400 === 0) {
        return true;  
    }else{
        if (anio%4 === 0 && anio%100 != 0) {
            return true;
        }else{
            return false;
        }
    }
    
}
//function bisiestoscreen (esbisiesto()){

//}

export default esbisiesto;