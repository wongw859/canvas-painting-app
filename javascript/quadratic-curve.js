class QuadraticCurves extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0;
        this.pointX = [];
        this.pointY = [];
    }

    onMouseDown(coord, e) {
        this.contextDraft.strokeStyle = '#f44';
        this.contextDraft.fillStyle = '#f44';
        this.contextDraft.lineWidth = 10;

        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.origX = coord[0];
            this.origY = coord[1];
            this.contextReal.fillRect(this.origX, this.origY, 10, 10);
            this.pointX.push(coord[0]);
            this.pointY.push(coord[1]);
            this.clickNum++;
            console.log(this.origX, this.origY);
            drawing = true;
        } else if (this.clickNum === 1) {
            this.pointX.push(coord[0]);
            this.pointY.push(coord[1]);
            this.contextReal.fillRect(this.origX, this.origY, 10, 10);
            this.clickNum++;
            console.log(this.origX, this.origY);
        } else if (this.clickNum === 2) {
            this.pointX.push(coord[0]);
            this.pointY.push(coord[1]);
            this.contextReal.fillRect(this.origX, this.origY, 10, 10);
            this.drawQuadratic(this.pointX[0], this.pointY[0], this.pointX[1], this.pointY[1], this.pointX[2], this.pointY[2], this.contextReal);
            this.pointX = [];
            this.pointY = [];
            this.clickNum = 0;
            console.log(this.origX, this.origY);
        }
    }
    onDragging() {}
    onMouseMove() {
        this.contextDraft.strokeStyle = '#f44';
        this.contextDraft.fillStyle = 'none';
        this.contextDraft.lineWidth = 10;

    }
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
    drawQuadratic(x1, y1, x2, y2, x3, y3, context) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.quadraticCurveTo(x2, y2, x3, y3);
        context.stroke();
    }

}