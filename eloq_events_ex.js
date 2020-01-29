


$(document).ready(function () {

    let balloon = document.querySelector("#balloon");
    let boom = document.querySelector("#boom");


    let size = 80;
    balloon.style.fontSize = `${size}px`;

    window.addEventListener("keydown", function myEvent(event) {
        if (event.key == "ArrowUp") {

            size++;
            if (balloon.style.fontSize == `${100}px`) {
                console.log("boom");       
                window.removeEventListener("keydown", myEvent)
                balloon.textContent = "💥"
            }
            event.preventDefault()

        } else if (event.key == "ArrowDown") {
            size--;
            event.preventDefault()
        }
        balloon.style.fontSize = `${size}px`;
    })




});