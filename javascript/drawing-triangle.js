/**********************************************
 * Drawing Triangle Functionality
 * ==================================
 ***********************************************/
drawing = false;

class DrawingTriangle extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0;
    }

    onMouseDown() {}

    onDragging() {}

    onMouseMove(coord, event) {
        this.contextDraft.strokeStyle = 'none';
        this.contextDraft.lineJoin = 'miter';
        this.contextDraft.lineWidth = 10;
        this.contextDraft.fillStyle = 'none';

        if (this.clickNum != 0 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.clickNum = 0
        } else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.draw(coord[0], coord[1], 3, this.contextDraft);
        }
    }

    onMouseUp(coord, event) {
        this.contextDraft.strokeStyle = 'none';
        this.contextDraft.lineJoin = 'miter';
        this.contextDraft.lineWidth = 10;
        this.contextDraft.fillStyle = 'none';

        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

            this.origX = coord[0];
            this.origY = coord[1];
            this.clickNum++
                drawing = true
        } else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.draw(coord[0], coord[1], 3, this.contextReal);
            this.clickNum = 0
        }
        saveState();
    }

    onMouseLeave() {}
    onMouseEnter() {}

    draw(x, y, sides, context) {
        context.beginPath();
        context.moveTo(x, y);
        for (let i = 1; i < sides; i++) {
            let angle = i * 2 * Math.PI / sides
            let rotatedX = Math.cos(angle) * (x - this.origX) - Math.sin(angle) * (y - this.origY) + this.origX;
            let rotatedY = Math.sin(angle) * (x - this.origX) + Math.cos(angle) * (y - this.origY) + this.origY;
            context.lineTo(rotatedX, rotatedY);
        }
        context.closePath();
        context.fill();
        context.stroke();
    }
}