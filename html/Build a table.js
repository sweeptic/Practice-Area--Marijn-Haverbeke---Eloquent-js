$(document).ready(function () {

    let data =
        [
            { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
            { name: "Everest", height: 8848, place: "Nepal" },
            { name: "Mount Fuji", height: 3776, place: "Japan" },
            { name: "Vaalserberg", height: 323, place: "Netherlands" },
            { name: "Denali", height: 6168, place: "United States" },
            { name: "Popocatepetl", height: 5465, place: "Mexico" },
            { name: "Mont Blanc", height: 4808, place: "Italy/France" }

        ];



    //header
    let target = document.getElementById("mountains");

    data.unshift({ name: "name", height: "height", place: "place" })

    let tag = "th";

    data.map(x => {

        target.appendChild(document.createElement("tr"));
        let lastChild = target.lastChild;

        Object.values(x).map(y => {
            let text = document.createTextNode(y);
            let newElement = document.createElement(tag);

            if (Number(y)) newElement.style.backgroundColor = "red"

            lastChild.appendChild(newElement).appendChild(text);
        });
        tag = "td"
    })


});