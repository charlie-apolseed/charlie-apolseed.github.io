const form = document.querySelector("contact-me-form");
const fullName = document.getElementById("name");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const subject = document.getElementById("subject");
const address = document.getElementById("email");

function sendEmail(event) {
    const bodyMessage = `Email from website: <br> <br> Full Name: ${fullName.value}<br>Email: ${address.value}<br>Phone number: ${phone.value}<br>Message: ${message.value}`;
    event.preventDefault();

    checkInputs();

    if (!fullName.classList.contains("error") && !phone.classList.contains("error") && !message.classList.contains("error") && !subject.classList.contains("error") && !address.classList.contains("error")) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "charlie.apolinsky@gmail.com",
            Password: "15B5F59AEFDA7387E807DF474EC438EC1BEA",
            To: 'charlie.apolinsky@gmail.com',
            From: "charlie.apolinsky@gmail.com",
            Subject: subject.value,
            Body: bodyMessage
        }).then(
            message => {
                if (message == "OK") {
                    Swal.fire({
                        title: "Success!",
                        text: "Message sent successfully!",
                        icon: "success"
                    });
                }
            }
        );
        document.getElementById("contactForm").reset();
        return false;
    }
}

function checkInputs() {
    const items = document.querySelectorAll(".contact-me-form .item")
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }

}

function submitRecipe(event) {
    const recipe = document.getElementById("recipe");
    const bodyMessage = `Recipe from website: ${recipe.value}`;
    event.preventDefault();

    if (recipe.value != "") {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "charlie.apolinsky@gmail.com",
            Password: "15B5F59AEFDA7387E807DF474EC438EC1BEA",
            To: 'charlie.apolinsky@gmail.com',
            From: "charlie.apolinsky@gmail.com",
            Subject: "Recipe Suggestion from Personal Website",
            Body: bodyMessage
        }).then(
            message => {
                if (message == "OK") {
                    Swal.fire({
                        title: "Success!",
                        text: "Recipe sent successfully!",
                        icon: "success"
                    });
                }
            }
        );
        document.getElementById("recipe-form").reset();
        return false;
    } else {
        recipe.classList.add("error");

        recipe.addEventListener("keyup", () => {
            if (recipe.value != "") {
                recipe.classList.remove("error");
            }
            else {
                recipe.classList.add("error");
            }
        });
    }
}
