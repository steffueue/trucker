
$( document ).ready(function(){

    $("#btn_startDrive").click(function(){
        startDrive();
    });

    $("#btn_brake").click(function(){
        brake();
    });

    $("#btn_accelerate").click(function(){
        accelarate();
    });
});

var driveIntervalId;
var START_VELOCITY = 10;
var velocity = START_VELOCITY;

function startDrive() {
    driveIntervalId = setInterval(function(){
            requestNextLocation();
            drawSnappedPolyline();
    }, 1000/velocity);
}

function accelarate() {
    velocity = velocity + 5;
    refreshInterval();
    console.log("Acceletate to velocity: " + velocity);
}

function brake() {
    if(velocity != 0) {
        velocity = velocity - 5;
    }

    if(velocity == 0) {
        stopDrive();
        console.log("Stopped");
    } else {
        refreshInterval();
        console.log("Decelerate to velocity: " + velocity);
    }
}

function stopDrive() {
    clearInterval(driveIntervalId);
}

function refreshInterval() {
    stopDrive();
    startDrive();
}