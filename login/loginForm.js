function emailValidate(email){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
    }
    else{
        return false;
    }
}
function passwordValidate(password){
    if((password.trim()).length > 0){
        return true;
    }
    else{
        return false;
    }
}
function goLogin(){
    document.getElementById('error').style.display = "none";
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    email.style.border = "";
    password.style.border = "";
    var proceed_e = emailValidate(email.value);
    var proceed_p = passwordValidate(password.value);
    if(proceed_p && proceed_e){

    }
    else{
        email.style.border = "2px solid red";
        password.style.border = "2px solid red";
        document.getElementById('error').style.display = "block";
    }
}