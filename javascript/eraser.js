class DrawingEraser extends PaintFunction {
    /**********************************************
     * Drawing Eraser Functionality
     * ==================================
     ***********************************************/

    // This class extends the PaintFunction class
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
        this.context.fillStyle = "#fff";
        this.context.beginPath();
        this.draw(coord[0], coord[1]);
    }
    onDragging(coord, event) {
        this.draw(coord[0], coord[1]);
    }

    onMouseMove() {}
    onMouseUp() {
        saveState();
    }
    onMouseLeave() {}
    onMouseEnter() {}

    draw(x, y) {
        this.context.arc(x, y, this.eraser_width, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
    }
}