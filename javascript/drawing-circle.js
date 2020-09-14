let drawing = false; // add to function folder?

class DrawingCircle extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0
    }
    onMouseDown() {}

    onDragging() {}

    onMouseMove(coord, event) {

        this.contextDraft.strokeStyle = '#f44';
        this.contextDraft.fillStyle = 'none';
        this.contextDraft.lineWidth = 10;

        if (this.clickNum != 0 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.clickNum = 0
        } else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawCircle(coord[0], coord[1], this.contextDraft);
        }
    }
    onMouseUp(coord, event) {
        this.contextDraft.strokeStyle = '#f44';
        this.contextDraft.fillStyle = '#f44';
        this.contextDraft.lineWidth = 10;

        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            this.origX = coord[0];
            this.origY = coord[1];
            this.clickNum++;
            drawing = true
        } else if (this.clickNum != 0) {


            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawCircle(coord[0], coord[1], this.contextReal);
            this.clickNum = 0;
            cPush()
        }
    }

    onMouseLeave() {}
    onMouseEnter() {}

    drawCircle(x, y, context) {
        context.beginPath();
        let radius = this.getChordLength(this.origX, this.origY, x, y)
        context.arc(this.origX, this.origY, radius, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }

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

        return length01
    }
}