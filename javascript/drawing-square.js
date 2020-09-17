/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
class DrawingSquare extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextDraft.strokeStyle = colorPicker.colors[0].hexString;
        this.contextReal.strokeStyle = colorPicker.colors[0].hexString;
        this.contextReal.fillStyle = colorPicker.colors[1].hexString;
        this.contextDraft.fillStyle = colorPicker.colors[1].hexString;
        this.contextDraft.lineWidth = $('#pen-width').val();
        this.contextReal.lineWidth = $('#pen-width').val();

        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.fillRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[0] - this.origX,
        );
        this.contextDraft.strokeRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[0] - this.origX

        )
    }

    onMouseMove() {}
    onMouseUp(coord) {
        console.log()
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.fillRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[0] - this.origX,

        );
        this.contextReal.strokeRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[0] - this.origX,

        )
        saveState();


    }
    onMouseLeave() {}
    onMouseEnter() {}
}

