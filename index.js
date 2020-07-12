var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

var email = document.querySelector(".email");


document.querySelector('button').addEventListener("click", function() {

    if(!email.value.match(mailformat)) {
        document.querySelector(".error-msg").classList.add("isVisible");
        document.querySelector(".error-icon").classList.add("isVisible");
        document.querySelector(".email").classList.add("email-error");
        console.log("MALI "+ email.value);
    } else {
        console.log("EMAIL "+ email.value);     
    }

});

document.querySelector(".email").addEventListener("focus", function() {
    console.log("KEYDOWN");
    document.querySelector('.error-msg').classList.remove("isVisible");
    document.querySelector(".error-icon").classList.remove("isVisible");
    document.querySelector(".email").classList.remove("email-error");
})


