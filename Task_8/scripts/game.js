"use strict";

(function () {
    let lastTime = 0;
    let vendors = ['webkit', 'moz'];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            let currTime = new Date().getTime();
            let timeToCall = Math.max(0, 16 - (currTime - lastTime));
            let id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());

let canvas = document.querySelector('#canvasID');
let ctx = canvas.getContext('2d');

const cubes = [];
const color = ["#ff0000", "#ffaa00", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#ff00ff"];
let requestID;
let stopped = true;
let score = 0;
let speed = 10;
let value = 0;

function move() {
    ctx.clearRect(0, -value, canvas.width, canvas.height);
    ctx.translate(0, 1);

    addNewCube();
    drawAllCubes();
    checkLine();

    if (!stopped) {
        setTimeout(function () {
            requestID = requestAnimationFrame(move);
        }, 1000 / speed);
    }

    value++;
    showScoreAndLvl();
}

canvas.onclick = (e) => {
    let cx = e.pageX - (canvas.getBoundingClientRect().left + pageYOffset);
    let cy = e.pageY - (canvas.getBoundingClientRect().top + pageYOffset);
    cubes.forEach((rect, index) => {
        if (ctx.isPointInPath(rect, cx, cy)) {
            cubes.splice(index, 1);
            score++;
            levelUp();
        }
    });
};


let ramdomeX10 = () => {
    let randX;
    do {
        randX = Math.floor(Math.random() * 48);
    } while (randX % 2 === 0);
    return randX * 10;
};

function stop() {
    stopped = true;
    cancelAnimationFrame(move);
    ctx.clearRect(0, -value, canvas.width, canvas.height);
    speed = 10;
    cubes.length = 0;
}

function start() {
    if (stopped) {
        score = 0;
        stopped = false;
        move();
    }
}

function addNewCube() {
    if (value % 20 === 0) {
        let rect = new Path2D();
        rect.x = ramdomeX10();
        rect.y = -value;
        rect.color = color[Math.floor(Math.random() * 7)];
        cubes.push(rect);
    }
}

function drawAllCubes() {
    cubes.forEach((rect) => {
        rect.rect(rect.x, rect.y, 20, 20);
        ctx.fillStyle = rect.color;
        ctx.fill(rect);
    });
}

function showScoreAndLvl() {
    document.querySelector("#score").innerHTML = score;
    document.querySelector("#lvl").innerHTML = (speed / 10);
}

function levelUp() {
    if (score > 0 && score % 10 === 0) speed += 10;
}

function checkLine() {
    cubes.forEach((rect) => {
        if (rect.y + value > canvas.height - 20) {
            alert("You lose!\nYour score: " + score);
            stop();
        }
    });
}

