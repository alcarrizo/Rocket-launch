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
var timer = null;
var CountDownNum = 10;
var changeState = function (state) {
    document.body.className = 'body-state' + state;
    clearInterval(timer);
    CountDownNum = 10;
    if (state == 2) {
        timer = setInterval(() => {
            document.getElementById('countdown').innerHTML = CountDownNum;
            CountDownNum -= 1;
            if (CountDownNum <= -1) {
                changeState(3);

            }
        }, 200);
    }
    else if (state == 3) {
        var success = setTimeout(() => {
            var randomNum = Math.round(Math.random() * 10)
            //success
            console.log('random number: ' + randomNum)
            if (randomNum > 5) {
                changeState(4)
            }
            else {
                //fail
                changeState(5)
            }

        }, 2000);
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
