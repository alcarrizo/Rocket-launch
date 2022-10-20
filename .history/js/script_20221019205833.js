var startCountDown = function () {
    bdy = document.getElementById("body")
    bdy.className = 'body-state2'

    //document.getElementById('rocket').className = 'rocket flying';
}
var abort = function () {
    document.getElementById("body").className = 'body-state1'
    //document.getElementById('rocket').className = 'rocket flying';
}