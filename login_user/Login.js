//for login user and admin slide
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
x.style.left = "-400px";
y.style.left = "50px";
z.style.left = "115px";
clearAllInput();
}

function login() {
x.style.left = "50px";
y.style.left = "500px";
z.style.left = "5px";
clearAllInput();
}

//user login onsubmit
const userLogin = document.getElementById("login");
const loginError = document.querySelectorAll(".login-error");
const loginInput = document.querySelectorAll("#login .login-input input");

//free account
let userID = ["appleproduct"];
let userPassword = ["appleproduct_123"];

userLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    let userIDInput = document.getElementById("login").elements[0].value;
    let userPasswordInput = document.getElementById("login").elements[1].value;

    if(userIDInput == ""){
        loginError[0].style.visibility = "visible";
        loginInput[0].classList.add("input-field-error");
        loginInput[0].focus();
        return;
    }else if(userPasswordInput == ""){
        loginError[0].style.visibility = "hidden";
        loginInput[0].classList.remove("input-field-error");

        loginError[1].style.visibility = "visible";
        loginInput[1].classList.add("input-field-error");

        loginError[1].textContent = "Password is required.";

        loginInput[1].focus();
        return;
    }else{
        loginError[0].style.visibility = "hidden";
        loginInput[0].classList.remove("input-field-error");
        loginError[1].style.visibility = "hidden";
        loginInput[1].classList.remove("input-field-error");
    }


    for(let i = 0; i < userID.length; i++){
        if (userIDInput === userID[i] && userPasswordInput === userPassword[i]) {
            clearAllInput();
            formBox.classList.add('hide');

            // show the success message
            forgotPassSuccessLabel.textContent = "Login Success!"
            forgotPassSuccess.classList.remove("hide");
            setTimeout(() => window.location.href = "../user_privilege/mainpage.html", 3000);

        } else {
            loginError[1].style.visibility = "visible";
            loginError[1].textContent = "Sorry, we don't recognize this account.";
            loginInput[0].focus();
        }
    }
});

//sign up in login when click
const loginSignupBtn = document.querySelector(".signup-btn");
loginSignupBtn.addEventListener("click", ()=>{
    formBox.classList.add("hide");
    signupContainer.classList.remove("hide");
});


//forgot pass
const forgotPass = document.querySelector(".Forgotpass");
const formBox = document.querySelector(".form-box");
const forgotPassInput = document.querySelector(".forgot-pass");
forgotPass.addEventListener("click", ()=>{
    clearAllInput();
    formBox.classList.add("hide")
    forgotPassInput.style.display = "block";
});

const exit = document.querySelector(".exit");
exit.addEventListener("click", ()=>{
    clearAllInput();
    formBox.classList.remove("hide");
    forgotPassInput.style.display = "none";
});

//forgot pass & signup success message
const forgotPassSuccess = document.querySelector(".forgot-success-container");
const forgotPassSuccessLabel = document.querySelector(".forgot-success-container p");


document.querySelector(".forgot-form").addEventListener("submit", (event)=>{
    event.preventDefault();

    const forgotInputs = document.querySelectorAll(".forgot-form input");
    const forgotErrors = document.querySelectorAll(".forgot-error");


    if(forgotInputs[0].value == ""){
        forgotErrors[0].textContent = "User ID is required"
        forgotInputs[0].classList.add("input-field-error");
        forgotErrors[0].style.display = "block";

        //for password does not match
        forgotErrors[2].style.display = "none";

        forgotInputs[0].focus();
        return;
    }else if(forgotInputs[1].value == ""){
        forgotInputs[0].classList.remove("input-field-error");
        forgotErrors[0].style.display = "none";

        forgotInputs[1].classList.add("input-field-error");
        forgotErrors[1].style.display = "block";

        forgotInputs[1].focus();
        return;
    }else if(forgotInputs[2].value == ""){
        forgotErrors[2].textContent = "Confirming is required";

        forgotInputs[0].classList.remove("input-field-error");
        forgotErrors[0].style.display = "none";

        forgotInputs[1].classList.remove("input-field-error");
        forgotErrors[1].style.display = "none";

        forgotInputs[2].classList.add("input-field-error");
        forgotErrors[2].style.display = "block";

        forgotInputs[2].focus();
        return;
    }else{
        forgotInputs[0].classList.remove("input-field-error");
        forgotErrors[0].style.display = "none";

        forgotInputs[1].classList.remove("input-field-error");
        forgotErrors[1].style.display = "none";

        forgotInputs[2].classList.remove("input-field-error");
        forgotErrors[2].style.display = "none";
    }


    let isMatched = false;
    for(let i = 0; i < userID.length; i++){
        if(forgotInputs[0].value === userID[i]){
            isMatched = true;
            if(forgotInputs[1].value.length <= 7){
                forgotErrors[1].textContent = "Password must have 8 or more characters long";
                forgotErrors[1].style.display = "block";
                forgotInputs[1].focus();
            }else if(forgotInputs[1].value !== forgotInputs[2].value){
                forgotErrors[2].textContent = "Password and Confirm Password does not match";
                forgotErrors[2].style.display = "block";
                forgotInputs[2].focus();
            }else{
                userPassword[i] = forgotInputs[1].value;        
                //hide the forgot pass and reopen the login  
                forgotPassInput.style.display = "none"; 
                forgotPassSuccessLabel.textContent = "Password changed successfully!";
                forgotPassSuccess.classList.remove("hide");

                setTimeout(() =>{
                    forgotPassSuccess.classList.add("hide");
                    formBox.classList.remove("hide");
                }, 2000);
            }
        }
    }

    if(!isMatched){
       forgotErrors[0].textContent = "Email does not exist";
       forgotErrors[0].style.display = "block";
       forgotInputs[0].focus();
       return;
    }

});




//admin login onsubmit
const registerAdmin = document.getElementById("register");
registerAdmin.addEventListener("submit", (event) => {
    event.preventDefault();

    let adminID = document.getElementById("register").elements[0].value;
    let email = document.getElementById("register").elements[1].value;
    let password = document.getElementById("register").elements[2].value;
    //admin error
    const adminError = document.querySelectorAll(".admin-error");
    const adminInput = document.querySelectorAll("#register .login-input input");
    
    if(adminID == ""){
        adminError[0].style.visibility = "visible";
        adminInput[0].classList.add("input-field-error");

        adminInput[0].focus();
        return;
    }else if(email == ""){
        adminError[0].style.visibility = "hidden";
        adminInput[0].classList.remove("input-field-error");

        adminError[1].style.visibility = "visible";
        adminInput[1].classList.add("input-field-error");

        adminInput[1].focus();
        return;
    }else if(password == ""){
        adminError[0].style.visibility = "hidden";
        adminInput[0].classList.remove("input-field-error");

        adminError[1].style.visibility = "hidden";
        adminInput[1].classList.remove("input-field-error");

        adminError[2].style.visibility = "visible";
        adminInput[2].classList.add("input-field-error");

        adminError[2].textContent = "Password is required"

        adminInput[2].focus();
        return;
    }else{
        adminError[0].style.visibility = "hidden";
        adminInput[0].classList.remove("input-field-error");

        adminError[1].style.visibility = "hidden";
        adminInput[1].classList.remove("input-field-error");

        adminError[2].style.visibility = "hidden";
        adminInput[2].classList.remove("input-field-error");
    }

    if(adminID === "appleproduct" && password === "appleproduct123" && email.includes("@")){
        clearAllInput();
        window.location.href = "admin_2fa.html";
    } else {
        adminError[2].style.visibility = "visible";
        adminError[2].textContent = "Sorry, we don't recognize this account."
        adminInput[0].focus();
    }

    
});



//captcha
function captcha(){
    const captchaImages = [["captcha/captcha1.png","captcha/captcha2.png","captcha/captcha3.png","captcha/captcha4.png","captcha/captcha5.png","captcha/captcha6.png","captcha/captcha7.png","captcha/captcha8.png"],
                    ["226md","22d5n","2356g","23mdg","23n88","243mm","244e2","245y5"]];

    const captchaImageContainer = document.querySelector(".captcha-image");
    captchaImageContainer.innerHTML = "";
    const captchaInput = document.querySelector(".captcha-input");
    captchaInput.value = "";
    captchaInput.focus();
    const submit = document.querySelector(".captcha-form");
    const errorMessage = document.querySelector(".error-message");

    

    let randomIndex = Math.floor(Math.random() * captchaImages[0].length);
    const imageTag = document.createElement("img");
    imageTag.setAttribute("src", captchaImages[0][randomIndex]);
    captchaImageContainer.appendChild(imageTag);

    submit.addEventListener("submit", (event)=>{
        event.preventDefault();

        let captchaString = captchaInput.value;

        if(captchaString == captchaImages[1][randomIndex]){
            document.querySelector(".captcha-container").classList.add("hide");


            forgotPassSuccessLabel.textContent = "Account Created Successfully!"
            forgotPassSuccess.classList.remove("hide");

            setTimeout(()=>{
                forgotPassSuccess.classList.add("hide");
                formBox.classList.remove("hide");
            }, 2000);

           

        }
        else{
            errorMessage.style.display = "block";
            captchaInput.value = "";
            captchaInput.focus();
            captchaImageContainer.innerHTML = "";
            randomIndex = Math.floor(Math.random() * captchaImages[0].length);
            const newImageTag = document.createElement("img");
            newImageTag.setAttribute("src", captchaImages[0][randomIndex]);
            captchaImageContainer.appendChild(newImageTag);
        }
    });

    clearAllInput();

}

//to exit captcha
    const exitCaptcha = document.querySelector(".captcha-exit");
    exitCaptcha.addEventListener("click", ()=>{
        document.querySelector(".captcha-container").classList.add('hide');
        signupContainer.classList.remove("hide");
    });

//clear all the input field when refreshed
function clearAllInput(){
    const allInputField = document.querySelectorAll("input");
    allInputField.forEach(input =>{
        input.value = "";
        input.classList.remove("input-field-error");
    });

    const allErrorMessage = document.querySelectorAll(".admin-error, .login-error");
    allErrorMessage.forEach(message =>{
        message.style.visibility = 'hidden';
    });

    const signupErrorMessage = document.querySelectorAll(".signup-error, .forgot-error");
    signupErrorMessage.forEach(error =>{
        error.style.display = "none";
    })


}

// sign up
const signupLoginBtn = document.querySelector(".login-btn");
//login click
const signupContainer =  document.querySelector(".signup-container");
signupLoginBtn.addEventListener("click", ()=>{
    clearAllInput();
    signupContainer.classList.add("hide");
    formBox.classList.remove("hide");
});

const signUpForm = document.querySelector(".signup-form");
const signupInputs = document.querySelectorAll(".signup-form input");
const signupErrors = document.querySelectorAll(".signup-form p");
signUpForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    if(signupInputs[0].value == ""){
        signupInputs[0].classList.add("input-field-error");
        signupErrors[0].style.display = "block";

        //for password does not matched
         signupErrors[2].style.display = "none";

        signupInputs[0].focus();
        return;
    }else if(signupInputs[1].value == ""){
        signupInputs[0].classList.remove("input-field-error");
        signupErrors[0].style.display = "none";

        signupInputs[1].classList.add("input-field-error");
        signupErrors[1].style.display = "block";

        signupInputs[1].focus();
        return;
    }else if(signupInputs[2].value == ""){
        signupErrors[2].textContent = "Confirming is required";

        signupInputs[0].classList.remove("input-field-error");
        signupErrors[0].style.display = "none";

        signupInputs[1].classList.remove("input-field-error");
        signupErrors[1].style.display = "none";

        signupInputs[2].classList.add("input-field-error");
        signupErrors[2].style.display = "block";

        signupInputs[2].focus();
        return;
    }else{
         signupInputs[0].classList.remove("input-field-error");
        signupErrors[0].style.display = "none";

        signupInputs[1].classList.remove("input-field-error");
        signupErrors[1].style.display = "none";

        signupInputs[2].classList.remove("input-field-error");
        signupErrors[2].style.display = "none";
    }



    if(signupInputs[1].value.length <= 7){
        signupErrors[1].textContent = "Password must be 8 or more characters long."
        signupErrors[1].style.display = "block";
        signupInputs[1].focus();
    } else if(signupInputs[1].value !== signupInputs[2].value){
        signupErrors[2].textContent = "Password and Confirm Password does not match"
        signupErrors[2].style.display = "block";
        signupInputs[2].focus();
    }else{
        userID.push(signupInputs[0].value);
        userPassword.push(signupInputs[1].value);
        clearAllInput();
        signupContainer.classList.add("hide");


        document.querySelector(".captcha-container").classList.remove("hide");
        captcha();

    }

});


// show password button
// in login
const loginShowPass = document.querySelector(".password-login-container img");
const loginPass = document.querySelector(".login-pass");

loginShowPass.addEventListener("click", ()=>{

    if(loginPass.type == "password"){
        loginPass.type = "text";
        loginShowPass.src = "icons/eye-open.png";
    }else{
        loginPass.type = "password";
        loginShowPass.src = "icons/eye-close.png";
    }
});

// in admin
const adminShowPass = document.querySelector(".password-admin-container img");
const adminPass = document.querySelector(".admin-pass");

adminShowPass.addEventListener("click", ()=>{

    if(adminPass.type == "password"){
        adminPass.type = "text";
        adminShowPass.src = "icons/eye-open.png";
    }else{
        adminPass.type = "password";
        adminShowPass.src = "icons/eye-close.png";
    }
});

