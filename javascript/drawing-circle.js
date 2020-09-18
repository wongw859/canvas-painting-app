drawing = false; // add to variables folder

class DrawingCircle extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.clickNum = 0
        this.contextDraft.lineWidth = $('#pen-width').val();
        this.contextReal.lineWidth = $('#pen-width').val();

    }
    onMouseDown() {}

    onDragging() {}

    onMouseMove(coord, event) {
        this.contextDraft.strokeStyle = colorPicker.colors[0].hexString;
        this.contextDraft.fillStyle = colorPicker.colors[1].hexString;

        if (this.clickNum != 0 && drawing === false) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.clickNum = 0
        } else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawCircle(coord[0], coord[1], this.contextDraft);
        }
    }
    onMouseUp(coord, event) {
        this.contextDraft.strokeStyle = colorPicker.colors[0].hexString;
        this.contextDraft.fillStyle = colorPicker.colors[1].hexString;
        this.contextReal.strokeStyle = colorPicker.colors[0].hexString;
        this.contextReal.fillStyle = colorPicker.colors[1].hexString;
        this.contextDraft.lineWidth = $('#pen-width').val();
        this.contextReal.lineWidth = $('#pen-width').val();


        if (this.clickNum === 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.origX = coord[0];
            this.origY = coord[1];
            this.clickNum++;
            drawing = true;
        } else if (this.clickNum != 0) {
            this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
            this.drawCircle(coord[0], coord[1], this.contextReal);
            this.clickNum = 0;
        }
        saveState();
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


}