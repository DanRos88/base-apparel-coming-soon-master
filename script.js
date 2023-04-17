const mailBox = document.querySelector(".mail-sub input.text");
const mailAction = document.querySelector(".mail-sub input.btn");
const errorIcon = document.querySelector(".mail-sub img");
const errorMsg = document.querySelector(".mail-form div.invalid");



const resetHidden = () => { 
    errorIcon.classList.add("hidden");
    errorMsg.classList.add("hidden");
}


mailBox.addEventListener("focus", () => {
    mailBox.value="";
})

mailBox.addEventListener("focusout", () =>{
    if (mailBox.value === ""){
        mailBox.value="Email Address";
    }
})

mailBox.addEventListener("click", resetHidden);

mailAction.addEventListener("click", () => {
    resetHidden();
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailBox.value.match(mailFormat)){
        console.log("messaggio inviato");
    } else {
        errorIcon.classList.remove("hidden");
        errorMsg.classList.remove("hidden");
        console.log("mail invalida");
    }
})