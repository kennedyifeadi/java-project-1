var FnameError = document.getElementById("FnameError");
var LnameError = document.getElementById("LnameError");
var EmailError = document.getElementById("EmailError");
var PassError = document.getElementById("PassError");
var SubmitError = document.getElementById("SubmitError");


function valFname(){
    var fname = document.getElementById("Fname").value;

    if(fname.length == 0){
        FnameError.innerHTML = "Fristname is required" + ' <i class="bi bi-exclamation-circle-fill"></i>';
        return  Fname.classList.add("invalid");
    }
    FnameError.innerHTML = ""
    return  Fname.classList.remove("invalid");
}

function valLname(){
    var lname = document.getElementById("Lname").value;

    if(lname.length == 0){
        LnameError.innerHTML = "lastname is required" + ' <i class="bi bi-exclamation-circle-fill"></i>';
        return Lname.classList.add("invalid");
    }
    LnameError.innerHTML = ""
    return Lname.classList.remove("invalid");
}

function valEmail(){
    var email = document.getElementById("Email").value;

    if(email.length == 0){
        EmailError.innerHTML = "Email is required" + ' <i class="bi bi-exclamation-circle-fill"></i>';
        return Email.classList.add("invalid");
    }
    EmailError.innerHTML = ""
    return Email.classList.remove("invalid");
}

function valPass(){
    var pass = document.getElementById("Pass").value;

    if (pass.length == 0){
        PassError.innerHTML = "Password is required" + ' <i class="bi bi-exclamation-circle-fill"></i>';
        return Pass.classList.add("invalid");
    }

    if(pass.length <= 7){
        PassError.innerHTML = "Password must contain at least 8 characters" + ' <i class="bi bi-exclamation-circle-fill"></i>';
        return Pass.classList.add("invalid");
    } else{
        PassError.innerHTML = "";
    }
    return Pass.classList.remove("invalid");
}

function valform(){
if(!valFname() || !valLname() || !valEmail() || !valPass()){
    SubmitError.style.display = "block";
    SubmitError.innerHTML = "please fill required filed";
    setTimeout(function(){SubmitError.style.display = "none";}, 2000);
    return false;
}
}