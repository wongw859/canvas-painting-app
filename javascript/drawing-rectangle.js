/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
class DrawingRectangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextDraft.strokeStyle = 'none';
        this.contextReal.strokeStyle = 'none';
        this.contextReal.fillStyle = "none";
        this.contextDraft.fillStyle = "none";
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.fillRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
        );
    }

    onMouseMove() {}
    onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.fillRect(
            this.origX,
            this.origY,
            coord[0] - this.origX,
            coord[1] - this.origY
        );
    }
    onMouseLeave() {}
    onMouseEnter() {}
}