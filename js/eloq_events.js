

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




    /*
        window.addEventListener('load', (event) => {
            console.log('page is fully loaded');
        });
    
        let squareworker = new Worker(squareworker.js);
    
        squareworker.addEventListener("message", event => {
            console.log("the worker responded:", event.data);
        })
    
        squareworker.postMessage(10);
    */



    let bombTimer = setTimeout(() => {
        //console.log("BOOM");
    }, 1000);
    if (Math.random() < 0.5) {
        //console.log("Defused.");
        //clearTimeout(bombTimer);
    }
    let t = 0;

    let clock = setInterval(() => {
        //console.log("tick");
        t++;
        if (t == 10) {
            clearInterval(clock);
            //console.log("stop");
        }

    }, 300);


    let textarea = document.querySelector("textarea");
    let timeout;
    textarea.addEventListener("input", () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => console.log("Typed!"), 500);
    });

    let scheduled = null

    window.addEventListener("mousemove", (event) => {
 
        if (!scheduled)
         {
            setTimeout(() => {
                document.body.textContent =
                    "Mouse at: " + event.pageX + ", " + event.pageY;
                scheduled = null;
            }, 250);

        }
        
        scheduled = event;
        

    })


});

