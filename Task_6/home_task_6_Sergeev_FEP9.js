"use strict";

function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Line(x1, y1, x2, y2, color) {
    Figure.call(this, x1, y1, color);
    this.x2 = x2;
    this.y2 = y2;
    this.draw = (canvas) => {
        canvas.strokeStyle = this.color;
        canvas.moveTo(this.x, this.y);
        canvas.lineTo(this.x2, this.y2);
        canvas.stroke();
    };
}

function Wave(color) {
    Line.call(this, 0, 0, 10, 10, color);
    this.draw = (canvas) => {
        canvas.lineWidth = 1.2;
        canvas.strokeStyle = this.color;
        canvas.moveTo(0, 0);
        for (let i = 1; i < 51; i++) {
            let x2 = i * 10;
            let y2 = (i % 2) ? 10 : 0;
            canvas.lineTo(x2, y2);
        }
        canvas.stroke();
    };
}

function Circle(x, y, radius, color) {
    Figure.call(this, x, y, color);
    this.radius = radius;
    this.draw = (canvas) => {
        canvas.fillStyle = this.color;
        canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        canvas.fill();
    }
}

function Rect(x, y, w, h, color) {
    Figure.call(this, x, y, color);
    this.w = w;
    this.h = h;
    this.draw = (canvas) => {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.w, this.h);
    }
}


function Canvas(elementID) {
    let canvas = document.getElementById(elementID).getContext('2d');
    canvas.globalAlpha = 0.2;
    this.add = (...objs) => objs.forEach((obj) => {
        canvas.beginPath();
        obj.draw(canvas);
        canvas.closePath();
    });
}

function startDrawing() {
    let line1 = new Line(50, 250, 200, 200, 'blue');
    let line2 = new Line(60, 260, 210, 210, 'blue');
    let circle1 = new Circle(120, 120, 50, '#00B8FF');
    let circle2 = new Circle(100, 80, 30, '#00B8FF');
    let rect1 = new Rect(260, 130, 60, 120, "#00FF7D");
    let rect2 = new Rect(280, 120, 90, 50, "#DD12A8");
    let rect3 = new Rect(350, 150, 60, 40, "#DDDB00");
    let wave = new Wave('red');
    let drawArea = new Canvas('canvasID');
    drawArea.add(rect3);
    drawArea.add(wave, line1, line2, circle1, circle2, rect1, rect2);
}



