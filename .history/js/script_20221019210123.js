var startCountDown = function () {
    bdy.className = 'body-state2'
    bdy.content = 'temp'
    for (let i = 10; i >= 0; i--) {
        bdy.content = i;
    }
    //document.getElementById('rocket').className = 'rocket flying';
}
var abort = function () {
    document.getElementById("body").className = 'body-state1'
    //document.getElementById('rocket').className = 'rocket flying';
}