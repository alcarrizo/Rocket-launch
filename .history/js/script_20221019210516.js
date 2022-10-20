var changeState = function (state) {
    bdy = document.getElementById("body")
    if (state == 1) {
        bdy.className = 'body-state1'
        bdy.content = 'temp'
    }
    else if (state == 2) {
        bdy.className = 'body-state2'
        bdy.content = 'temp'
    }
    else if (state == 3) {
        bdy.className = 'body-state3'
        bdy.content = 'temp'
    }
    else if (state == 4) {
        bdy.className = 'body-state4'
        bdy.content = 'temp'
    }
    else {
        bdy.className = 'body-state5'
        bdy.content = 'temp'
    }
    // for (let i = 10; i >= 0; i--) {
    //     bdy.content = i;
    // }
    //document.getElementById('rocket').className = 'rocket flying';
}
// var startCountDown = function () {
//     bdy = document.getElementById("body")
//     bdy.className = 'body-state2'
//     bdy.content = 'temp'
//     // for (let i = 10; i >= 0; i--) {
//     //     bdy.content = i;
//     // }
//     //document.getElementById('rocket').className = 'rocket flying';
// }
// var abort = function () {
//     document.getElementById("body").className = 'body-state1'
//     //document.getElementById('rocket').className = 'rocket flying';
// }