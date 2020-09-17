class BezierCurves extends PaintFunction {
    constructor(contextReal, contextDraft) {
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
        this.contextDraft.strokeStyle = 'none';
        this.contextDraft.fillStyle = 'none';
        this.contextDraft.lineWidth = 5;
        this.contextReal.strokeStyle = 'none';
        this.contextReal.fillStyle = 'none';
        this.contextReal.lineWidth = 5;

        // starting point
        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.origX = coord[0];
            this.origY = coord[1];
            this.drawPoint(this.origX, this.origY);
            this.clickNum++;
            drawing = true;
            // end point 
        } else if (this.clickNum === 1) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.pointX.push(coord[0]);
            this.pointY.push(coord[1]);
            this.drawPoint(coord[0], coord[1]);
            this.drawLine(this.origX, this.origY, coord[0], coord[1], this.contextDraft);
            this.clickNum++;
            // cp1:
        } else if (this.clickNum === 2) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.pointX.push(coord[0]);
            this.pointY.push(coord[1]);
            this.drawPoint(coord[0], coord[1]);
            this.clickNum++;
            // cp2:
        } else if (this.clickNum === 3) {
            this.drawPoint(coord[0], coord[1]);
            this.pointX.push(coord[0]);
            this.pointY.push(coord[1]);
            this.contextDraft.clearRect(0, 0, this.canvasDraft.width, this.canvasDraft.height)
            this.drawBezier(this.pointX[2], this.pointY[2], this.pointX[1], this.pointY[1], this.pointX[0], this.pointY[0], this.contextReal);
            this.pointX = [];
            this.pointY = [];
            this.clickNum = 0;
            // end point
        }
    }
    onMouseMove(e) {

    }
    onDragging(coord, e) {

    }
    onMouseUp() {

    }
    onMouseLeave() {}
    onMouseEnter() {}
    drawLine(x1, y1, x2, y2, context) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }


    drawBezier(cpx1, cpy1, cpx2, cpy2, x3, y3, context) {
        context.beginPath();
        context.moveTo(this.origX, this.origY);
        context.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x3, y3);
        context.stroke();
    }
}