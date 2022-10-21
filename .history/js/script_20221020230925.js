setTimeout(() => {

}, 2000);

var car = {
    make: 'VW',
    type: 'Polo',
    color: 'blue',
    isTurnedOn: false,
    numOfWheels: 4,
    seats: [
        'seat1',
        'seat2',
        'seat3',
        'seat4'
    ],
    turnOn: function () {
        this.isTurnedOn = true;
    },
    turnOff: function () {
        this.isTurnedOn = false;
    },
    fly: function () {
        alert('fly');
    },
    switchCar: function (isOn) {
        console.log('turn car ' + isOn)
        if (isOn == true) {
            this.isTurnedOn = true;
        }
        else {
            this.isTurnedOn = false;
        }
    }

};

console.log('hello there friends!');

// this function gets the id of the cool div and swaps it's classname 
// between 'cool' and 'cool red' to make it swap between a bacground of
// green and red
var doCoolStuff = function () {
    coolDiv = document.getElementById('cool');
    if (coolDiv.className == 'cool') {
        coolDiv.className = 'cool red'
    }
    else {
        coolDiv.className = 'cool'
    }

}