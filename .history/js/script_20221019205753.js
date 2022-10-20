const { range } = require("express/lib/request")

var startCountDown = function () {
    bdy = document.getElementById("body")
    bdy.className = 'body-state2'
    for (let i = 10; i >= 0; i--) {
        bdy.content = i;
    }
    //document.getElementById('rocket').className = 'rocket flying';
}
var abort = function () {
    document.getElementById("body").className = 'body-state1'
    //document.getElementById('rocket').className = 'rocket flying';
}