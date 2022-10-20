var countDown = function () {
    var i = 10;
    setTimeout(function () {
        i--
        document.getElementById("countdown").innerHTML = i;
    }, 1000)
}

var changeState = function (state) {
    bdy = document.getElementById("body")
    if (state == 1) {
        bdy.className = 'body-state1'
    }
    else if (state == 2) {
        bdy.className = 'body-state2'
        countDown()
        // for (let i = 10; i >= 0; i--) {
        //     setTimeout()
        //     document.getElementById("countdown").innerHTML = i;
        // }
    }
    else if (state == 3) {
        bdy.className = 'body-state3'
    }
    else if (state == 4) {
        bdy.className = 'body-state4'
    }
    else {
        bdy.className = 'body-state5'
    }
    // for (let i = 10; i >= 0; i--) {
    //     bdy.content = i;
    // }
    //document.getElementById('rocket').className = 'rocket flying';
}
