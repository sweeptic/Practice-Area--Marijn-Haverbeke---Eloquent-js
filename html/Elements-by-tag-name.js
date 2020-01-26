

$(document).ready(function () {


    let e1 = document.body.childNodes;
    let e2 = document.getElementsByTagName("td");
    let e3 = document.querySelectorAll("td");

    let _str = Object.prototype.toString;

    console.log(_str.call(e1));
    console.log(_str.call(e2));
    console.log(_str.call(e3));



/*
    function myGetElementsByTagName(node, str) {

        if (node.nodeType == Node.ELEMENT_NODE) {

            for (let i = 0; i < node.children.length; i++) {
                if (node.children[i].nodeName == str.toUpperCase()) {
                    arr.push(node.children[i]);
                }
                myGetElementsByTagName(node.children[i], str);
            }
        }
        return arr
    }

    var arr = [];
    console.log(document.getElementsByTagName("TD"))
    console.log(myGetElementsByTagName(document.body, "td"));

    //document.body.nodeType == Node.ELEMENT_NODE

*/

});