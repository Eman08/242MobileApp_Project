function cardNumberValidate(cardNumber){
    if(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/.test(cardNumber)){
        return true;
    }
    else{
        return false;
    }
}


function validateCardDate(cardDate){
    if(/^[0-9]{3, 4}$/.test(CVV)){
        return true;
    }
    else{
        return false;
    }
}