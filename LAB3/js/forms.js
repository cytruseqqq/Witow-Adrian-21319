 function validateName() {
        const name = document.getElementById("name");
        const errorName = document.getElementById("errorName");
        const formGroupName = document.getElementById("formGroupName");

        errorName.className = "d-none";
        formGroupName.classList.remove("is-valid", "is-invalid");

        if (name.value.trim() === "") {
            errorName.className = "alert alert-danger";
            formGroupName.classList.add("is-invalid");
        } else {
            formGroupName.classList.add("is-valid");
        }
    }

function validateEmail() {
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("errorEmail");
    const formGroupEmail = document.getElementById("formGroupEmail");
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    errorEmail.className = "d-none";
    formGroupEmail.classList.remove("is-valid", "is-invalid");
    if (emailValue === "") {
        errorEmail.innerHTML = "Podanie adresu email jest wymagane!";
        errorEmail.className = "alert alert-danger";
        formGroupEmail.classList.add("is-invalid");
    } else if (!emailRegex.test(emailValue)) {
        errorEmail.innerHTML = "Adres email jest w nieprawidłowym formacie!";
        errorEmail.className = "alert alert-danger";
        formGroupEmail.classList.add("is-invalid");
    } else {
        formGroupEmail.classList.add("is-valid");
    }
}

function validateMessage() {
    const message = document.getElementById("message");
    const errorMessage = document.getElementById("errorMessage");
    const formGroupMessage = document.getElementById("formGroupMessage");
    errorMessage.className = "d-none";
    formGroupMessage.classList.remove("is-valid", "is-invalid");
    if (message.value.trim() === "") {
        errorMessage.className = "alert alert-danger";
        formGroupMessage.classList.add("is-invalid");
    } else {
        formGroupMessage.classList.add("is-valid");
    }
}
