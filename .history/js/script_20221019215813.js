/*var countDown = function (i) {
    console.log(i)
    setTimeout(function () {
        i--
        document.getElementById("countdown").innerHTML = i;
        if (document.getElementById('body').className != 'body-state1') {
            if (i > 0) {
                countDown(i)
            }
            else {
                changeState(3)
            }
        }

    }, 1000)
}*/

var changeState = function (state) {
    document.body.className = 'body-state' + state;
    if (state == 2) {
        document.getElementById('countdown').innerHTML = 9
    }
    // if (state == 1) {
    //     document.body.className = 'body-state1'
    // }
    // else if (state == 2) {
    //     document.body.className = 'body-state2'
    //     countDown(10)
    //     // for (let i = 10; i >= 0; i--) {
    //     //     setTimeout()
    //     //     document.getElementById("countdown").innerHTML = i;
    //     // }
    // }
    // else if (state == 3) {
    //     document.body.className = 'body-state3'
    //     document.getElementById('rocket').className = 'rocket flying';
    // }
    // else if (state == 4) {
    //     document.body.className = 'body-state4'
    // }
    // else {
    //     document.body.className = 'body-state5'
    // }
    // for (let i = 10; i >= 0; i--) {
    //     bdy.content = i;
    // }
    //document.getElementById('rocket').className = 'rocket flying';
}
