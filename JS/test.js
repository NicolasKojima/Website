// Get the button and form container
var openFormButton = document.getElementById("openFormButton");
var formContainer = document.getElementById("formContainer");

// Get the close button
var closeFormButton = document.getElementById("closeFormButton");

// Open the form when the button is clicked
openFormButton.onclick = function() {
    formContainer.style.display = "block";
}

// Close the form when the close button is clicked
closeFormButton.onclick = function() {
    formContainer.style.display = "none";
}

// Close the form if the user clicks outside the form
window.onclick = function(event) {
    if (event.target == formContainer) {
        formContainer.style.display = "none";
    }
}
