function myFunction(id) {
    var element = document.getElementById(id);
    if (element.getAttribute("aria-expanded") == "true") {
        element.parentNode.parentNode.classList.remove('shows');
        element.style.color = "black";
    } else {
        element.parentNode.parentNode.classList.add('shows');
        element.style.color = "rgb(251, 146, 60)";
    }
}