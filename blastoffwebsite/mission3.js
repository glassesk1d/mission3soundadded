function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sum1Res").innerHTML = sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    }
    else {
        document.getElementById("finalRes").innerHTML = "DRAW - please try again"
    }
}
function blastOff() {
    var currtime = 50;
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 5000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 10000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 15000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 20000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 25000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 30000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 35000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 40000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = currtime;
    }, 45000);
    document.getElementById("Timer").innerHTML = currtime;
    setTimeout(function () {
        currtime = currtime - 5;
        document.getElementById("Timer").innerHTML = "BLASTOFF!";
    }, 50000);
}//this function isn't being used but it's a countdown

function btrBlastOff() {
    console.log("btrBlastOff() started");
    var currtime = 50;
    for (var i = 0; i < 10; i = i + 1) {
        setTimeout(function () {
            document.getElementById("Timer").innerHTML = currtime;
            currtime = currtime - 5;

            if (currtime > 25) {
                document.getElementById("Timer").innerHTML = currtime;
            }
            else {
                document.getElementById("Timer").innerHTML = "Warning Less than 1/2 way to launch, time left = " + currtime;
            }
        }, 5000 * i);
    }
    setTimeout(function () {
        document.getElementById("Timer").innerHTML = "Blastoff!";
    }, 50000);
}//a countdown using a for loop. when the timer is less than or equal to 25 a message will pop up along with the number.

function start(){
    console.log("start() function has begun");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}//if the start button is clicked it will be disabled. the stop button is enabled.

function playStation(){
    console.log("playStation() has begun");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}//plays a sound after a button is pressed

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}