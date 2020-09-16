/**********************************************
 * The Canvas
 * ==================================
 ***********************************************/

let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
// let mousePos = getMousePos(contextReal, evt);
let clickNum = 0;
// size
let eraser_width;


$("#canvas-draft").mousedown(function(e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX, mouseY], e);
    dragging = true;
});

$("#canvas-draft").mousemove(function(e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if (dragging) {
        currentFunction.onDragging([mouseX, mouseY], e);
    }
    currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function(e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function(e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function(e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX, mouseY], e);
});

//When save button is clicked, creates a Blob object representing the image contained in the canvas
/*https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob 
https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
*/

$("#save").mousedown(function() {
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('download', 'CanvasAsImage.png');
    let myCanvas = document.getElementById('canvas-real');
    myCanvas.toBlob(function(blob) {
        let url = URL.createObjectURL(blob);
        downloadLink.setAttribute('href', url);
        downloadLink.click();
    });
})

// change size of linewidths
$('#choose-size .radio-group').on('click', function() {
    var s = $('input[name=size]:checked', '#choose-size').val();
    if (s === '1') {
        contextDraft.lineWidth = 1;
        contextReal.lineWidth = 1;
        contextDraft.lineJoin = "round";
        contextReal.lineJoin = "round";
        eraser_width = 1;
    }
    if (s === '2') {
        contextDraft.lineWidth = 6;
        contextReal.lineWidth = 6;
        contextDraft.lineJoin = "round";
        contextReal.lineJoin = "round";
        eraser_width = 6;
    }
    if (s === '3') {
        contextDraft.lineWidth = 10;
        contextReal.lineWidth = 10;
        eraser_width = 10;
    }
    if (s === '4') {
        contextDraft.lineWidth = 20;
        contextReal.lineWidth = 20;
        eraser_width = 20;
    }
});



/** # Class (all classes will have these methods) #
 /*  ====================== */
class PaintFunction {
    construct() {}
    onMouseDown() {}
    onDragging() {}
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}

    // getting length between 2 points
    getChordLength(x1, y1, x2, y2, x3, y3) {
        let diffX01 = x1 - x2;
        let diffY01 = y1 - y2;
        let lengthSquare01 = Math.pow(diffX01, 2) + Math.pow(diffY01, 2);
        let length01 = Math.pow(lengthSquare01, 0.5);

        if (x3) {
            let diffX02 = x1 - x3;
            let diffY02 = y1 - y3;
            let lengthSquare02 = Math.pow(diffX02, 2) + Math.pow(diffY02, 2);
            let length02 = Math.pow(lengthSquare02, 0.5);

            return length01 < length02 ? length01 : length02
        }

        return length01;
    };


    // drawing a st line
    drawLine(x1, y1, x2, y2, context) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }


    drawPoint(x, y) {
        this.contextDraft.fillRect(x, y, 20, 20);
        this.contextDraft.strokeStyle = 'black';
        this.contextDraft.fillStyle = 'black';
        this.contextReal.strokeStyle = 'black';
        this.contextReal.fillStyle = 'black';
    };


}