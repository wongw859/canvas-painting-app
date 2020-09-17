// The first and second click is start and end points
// the third click is control point

class QuadraticCurves extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.canvasReal = canvasReal;
        this.canvasDraft = canvasDraft;
        this.clickNum = 0;
        this.pointX = [];
        this.pointY = [];
    }

    onMouseDown(coord, e) {
        this.contextDraft.strokeStyle = colorPicker.colors[0].hexString;
        this.contextDraft.fillStyle = colorPicker.colors[0].hexString;
        this.contextDraft.lineWidth = $('#pen-width').val();
        this.contextReal.strokeStyle = colorPicker.colors[0].hexString;
        this.contextReal.fillStyle = colorPicker.colors[0].hexString;
        this.contextReal.lineWidth = $('#pen-width').val();

        // second click is shows control point
        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.origX = coord[0];
            this.origY = coord[1];
            this.drawPoint(this.origX, this.origY);
            this.pointX.push(this.origX);
            this.pointY.push(this.origY);
            this.clickNum++;
            drawing = true;
        } else if (this.clickNum === 1) {
            this.origX = coord[0];
            this.origY = coord[1];
            this.pointX.push(this.origX);
            this.pointY.push(this.origY);
            this.drawPoint(this.origX, this.origY);
            this.drawLine(this.pointX[0], this.pointY[0], this.pointX[1], this.pointY[1], this.contextDraft);
            this.clickNum++;
        } else if (this.clickNum === 2) {
            this.contextDraft.clearRect(0, 0, this.canvasDraft.width, this.canvasDraft.height)
            this.origX = coord[0];
            this.origY = coord[1];
            this.pointX.push(this.origX);
            this.pointY.push(this.origY);
            this.drawPoint(this.origX, this.origY);
            // clear lines
            this.contextDraft.clearRect(0, 0, this.canvasDraft.width, this.canvasDraft.height)
            this.drawQuadratic(this.pointX[0], this.pointY[0], this.pointX[1], this.pointY[1], this.pointX[2], this.pointY[2], this.contextReal);
            this.pointX = [];
            this.pointY = [];
            this.clickNum = 0;
            saveState();

        }
    }
    onDragging() {}
    onMouseMove() {

    }
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
    drawLine(x1, y1, x2, y2, context) {
        this.contextDraft.strokeStyle = colorPicker.colors[0].hexString;
        this.contextDraft.fillStyle = colorPicker.colors[0].hexString;
        this.contextDraft.lineWidth = $('#pen-width').val();
        this.contextReal.strokeStyle = colorPicker.colors[0].hexString;
        this.contextReal.fillStyle = colorPicker.colors[0].hexString;
        this.contextReal.lineWidth = $('#pen-width').val();

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }

    drawQuadratic(x1, y1, x2, y2, x3, y3, context) {
        this.contextDraft.strokeStyle = colorPicker.colors[0].hexString;
        this.contextDraft.fillStyle = colorPicker.colors[0].hexString;
        this.contextDraft.lineWidth = $('#pen-width').val();
        this.contextReal.strokeStyle = colorPicker.colors[0].hexString;
        this.contextReal.fillStyle = colorPicker.colors[0].hexString;
        this.contextReal.lineWidth = $('#pen-width').val();

        context.beginPath();
        context.moveTo(x1, y1);
        context.quadraticCurveTo(x2, y2, x3, y3);
        context.stroke();
    }

}