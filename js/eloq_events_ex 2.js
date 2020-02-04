


$(document).ready(function () {

    let mouse_1 = document.getElementById("mouse1")
    let mouse_2 = document.getElementById("mouse2")
    let mouse_3 = document.getElementById("mouse3")
    let mouse_4 = document.getElementById("mouse4")

    window.addEventListener("mousemove", (event) => {
        console.log(event.clientX);
        console.log(event.clientY);

        mouse_1.style.top = `${event.clientY}px`;
        mouse_1.style.left = `${event.clientX}px`;

        let old_y = event.clientY;
        let old_x = event.clientX;

    

        setTimeout(() => {
            mouse_2.style.top = `${old_y}px`;
            mouse_2.style.left = `${old_x}px`;
        }, 50);

        setTimeout(() => {
            mouse_3.style.top = `${old_y}px`;
            mouse_3.style.left = `${old_x}px`;
        }, 100);

        setTimeout(() => {
            mouse_4.style.top = `${old_y}px`;
            mouse_4.style.left = `${old_x}px`;
        }, 150);











    })








});