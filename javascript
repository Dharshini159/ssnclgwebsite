
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}




const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});




function showAboutMessage() {

    alert(
        "SSN College of Engineering\n\n" +
        "This is a student project website created " +
        "using HTML, CSS and JavaScript."
    );

}




function showDepartment(department) {

    alert(
        "You selected:\n\n" +
        department +
        "\n\n" +
        "More department information can be added here."
    );

}




function showContactMessage() {

    alert(
        "Thank you for your interest in SSN College of Engineering!\n\n" +
        "Please visit the official SSN website " +
        "for current information."
    );

}




const admissionForm =
    document.getElementById("admissionForm");


if (admissionForm) {

    admissionForm.addEventListener("submit", function (event) {

        event.preventDefault();


        

        const name =
            document.getElementById("studentName").value.trim();

        const email =
            document.getElementById("studentEmail").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const programme =
            document.getElementById("programme").value;


        
        if (name === "") {

            alert("Please enter your name.");

            return;

        }


        

        if (email === "") {

            alert("Please enter your email.");

            return;

        }


        

        if (phone.length < 10) {

            alert("Please enter a valid phone number.");

            return;

        }


        

        if (programme === "") {

            alert("Please select a programme.");

            return;

        }


        

        alert(
            "Admission Enquiry Submitted Successfully!\n\n" +

            "Student Name: " + name +

            "\nEmail: " + email +

            "\nPhone: " + phone +

            "\nProgramme: " + programme
        );



        admissionForm.reset();

    });

}