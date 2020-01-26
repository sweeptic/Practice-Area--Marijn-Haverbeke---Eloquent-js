

$(document).ready(function () {



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



});