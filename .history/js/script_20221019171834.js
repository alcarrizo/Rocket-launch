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

var doCoolStuff = function () {
    cool = document.getElementById('cool')
}