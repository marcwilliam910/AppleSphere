const inputs = document.querySelectorAll(".input-field input");
const button = document.querySelector(".verify");

inputs.forEach((input, index1) => {
input.addEventListener("input", (event) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if(event.inputType === "deleteContentBackward") {
    prevInput.focus;
    prevInput.select();
    currentInput.setAttribute("disabled", "true");
    }

    if(currentInput.value.length > 1) {
    currentInput.value = currentInput.value.slice(0, 1);
    }

    if( nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){  
    nextInput.removeAttribute("disabled"); nextInput.focus();
    }

    if(!currentInput.value && prevInput) {
    prevInput.focus();
    }

    if(inputs[5].value == "") {
    button.classList.add("disable");
    }else{
    button.classList.remove("disable");
    button.removeAttribute("disabled");
    }
});
});

window.addEventListener("load", () => {
    inputs[0].focus();
    inputs[0].value = "";
});

//form onsubmit
const otpForm = document.querySelector(".otp-form");
otpForm.addEventListener("submit", (event) => {
event.preventDefault();

const otpCode = [1, 2, 3, 4, 5, 6];
const userInput = document.querySelectorAll(".input-field input");

let isCorrect = Array.from(userInput).every((number, index) => {
    return parseInt(number.value) === otpCode[index];
});

if (isCorrect) {      
    document.querySelector(".container").style.display = "none";
    document.querySelector(".success").style.display = "block";
       
    setTimeout(() => window.location.href = "../admin/admin.html" , 3000);
} else {
    button.classList.add("disable");
    button.setAttribute("disabled", "true");
    document.querySelector(".otp-error").classList.remove("hide");
    inputs.forEach((input) => {
        input.value = "";
        input.setAttribute("disabled", "true");
        
    });
    inputs[0].removeAttribute("disabled");
     inputs[0].focus();
    }
});
