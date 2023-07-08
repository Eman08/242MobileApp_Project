function emailValidate(email){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    else{
        return false;
    }
}
function passwordValidate(password){
    if((password.trim()).length > 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function showError(num){
    let errorMSG = "";
    switch(num){
        case 1:
            errorMSG = "Email is invalid";
            break;
        case 2:
            errorMSG = "Password is invalid";
            break;
        case 3:
            errorMSG = "Password is invalid";
            break; 
        case 4:
            errorMSG = "Phone Number is invalid";
            break;       
    }
    document.getElementById('errMSG').innerHTML = errorMSG;
    document.getElementById('error').style.display = "block";
}
function goSign(){
    document.getElementById('error').style.display = "none";
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var passwordVerify = document.getElementById('password2');
    var pnumber = document.getElementById('pnumber');
    email.style.border = "";
    password.style.border = "";
    passwordVerify.style.border = "";
    pnumber.style.border = "";
    var proceed_e = emailValidate(email.value);
    var proceed_p = passwordValidate(password.value);
    var proceed_p2 = passwordValidate(passwordVerify.value);
    var proceed_p3 = passwordValidate(pnumber.value);
    if(proceed_e == false){
        showError(1);
        email.style.border = "2px solid red";
    }
    else if(proceed_p == false){
        showError(2);
        password.style.border = "2px solid red";
    }
    else if(proceed_p2 == false){
        showError(3);
        passwordVerify.style.border = "2px solid red";  
    }
    else if(proceed_p3 == false){
        showError(4);
        pnumber.style.border = "2px solid red";  
    }
    else{
        window.open("../homepage/homepage.html","_self") //Homepage
    }
    // if(proceed_p && proceed_e){

    // }
    // else{
    //     email.style.border = "2px solid red";
    //     password.style.border = "2px solid red";
    //     document.getElementById('error').style.display = "block";
    // }
}