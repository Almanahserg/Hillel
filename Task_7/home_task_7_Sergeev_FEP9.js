"use strict";

class Figure {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    drawing(canvas, arrayActions) {
        let draw = new Draw(canvas, this);
        canvas.globalAlpha = 0.2;
        canvas.beginPath();
        arrayActions.forEach((key) => draw[key]());
        canvas.closePath();
    }
}

class Draw {
    constructor(canvas, obj) {
        this.canvas = canvas;
        this.obj = obj;
    }

    globalAlpha() {
        this.canvas.globalAlpha = 0.2;
    }

    strokeStyle() {
        this.canvas.strokeStyle = this.obj.color;
    }

    fillStyle() {
        this.canvas.fillStyle = this.obj.color;
    }

    moveTo() {
        this.canvas.moveTo(this.obj.x, this.obj.y);
    }

    lineTo() {
        for (let i = 0; i < this.obj.lineTo.length; i++) {
            this.canvas.lineTo(this.obj.lineTo[i][0], this.obj.lineTo[i][1]);
        }
    }

    arc() {
        this.canvas.arc(this.obj.x, this.obj.y, this.obj.radius, 0, 2 * Math.PI);
    }

    fillRect() {
        this.canvas.fillRect(this.obj.x, this.obj.y, this.obj.w, this.obj.h);
    }

    stroke() {
        this.canvas.stroke();
    }

    fill() {
        this.canvas.fill();
    }
}

class Line extends Figure {
    constructor(moveTo, lineTo, color) {
        super(moveTo[0], moveTo[1], color);
        this.lineTo = lineTo;
    }

    draw(canvas) {
        let arrayActions = ['strokeStyle', 'moveTo', 'lineTo', 'stroke'];
        this.drawing(canvas, arrayActions);
    }
}

class Circle extends Figure {
    constructor(x, y, radius, color) {
        super(x, y, color);
        this.radius = radius;
    }

    draw(canvas) {
        let arrayActions = ['fillStyle', 'arc', 'fill'];
        this.drawing(canvas, arrayActions);
    }
}

class Rect extends Figure {
    constructor(x, y, w, h, color) {
        super(x, y, color);
        this.w = w;
        this.h = h;
    }

    draw(canvas) {
        let arrayActions = ['fillStyle', 'fillRect'];
        this.drawing(canvas, arrayActions);
    }
}

function Canvas(elementID) {
    let canvas = document.getElementById(elementID).getContext('2d');
    this.add = (...objs) => objs.forEach((obj) => {
        obj.draw(canvas);
    });
}

function startDrawing() {
    let arrayLineTo = [[0, 0]];
    for (let i = 1; i < 51; i++) {
        let x = i * 10;
        let y = (i % 2) ? 10 : 0;
        arrayLineTo.push([x, y]);
    }

    let line1 = new Line([50, 250], [[200, 200]], 'blue');
    let line2 = new Line([60, 260], [[210, 210]], 'blue');
    let wave = new Line([0, 0], arrayLineTo, 'red');

    let circle1 = new Circle(120, 120, 50, '#00B8FF');
    let circle2 = new Circle(100, 80, 30, '#00B8FF');
    let rect1 = new Rect(260, 130, 60, 120, "#00FF7D");
    let rect2 = new Rect(280, 120, 90, 50, "#DD12A8");
    let rect3 = new Rect(350, 150, 60, 40, "#DDDB00");

    let drawArea = new Canvas('canvasID');
    drawArea.add(wave, line1, line2, circle1, circle2, rect1, rect2, rect3);
}



