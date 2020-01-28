

$(document).ready(function () {


    var help_box = document.getElementById("help")
    var inputText = document.querySelectorAll("input")

    for (const item of inputText) {

        item.addEventListener("focus", event => {
            help_box.textContent = item.getAttribute("help-text")

        })
        item.addEventListener("blur", event => {
            help_box.textContent = "";
        })
    }



    window.addEventListener('beforeunload', (event) => {
        // Cancel the event as stated by the standard.
        event.preventDefault();
        // Chrome requires returnValue to be set.
        event.returnValue = '';
        console.log("quit");
    });

    window.addEventListener('load', (event) => {
        console.log('page is fully loaded');
    });

});

