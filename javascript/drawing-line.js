/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/
class DrawingLine extends PaintFunction {
    // This class extends the PaintFunction class
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
        this.context.fillStyle = colorPicker.colors[0].hexString;
        this.context.strokeStyle = colorPicker.colors[0].hexString;
        this.context.lineJoin = "round";
        this.context.lineWidth = $('#pen-width').val();;
        
        this.context.beginPath();
        this.context.moveTo(coord[0], coord[1]);
        this.draw(coord[0], coord[1]);
    }
    onDragging(coord, event) {
        this.context.fillStyle = "none";
        this.context.lineJoin = "round";

        this.draw(coord[0], coord[1]);
    }

    onMouseMove() {}
    onMouseUp() {
        saveState();
    }
    onMouseLeave() {}
    onMouseEnter() {
        this.context.fillStyle = "none";
    }
    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.moveTo(x, y);
        // this.context.arc(x, y, this.context.lineWidth, 0, 2 * Math.PI);
        this.context.fill();
        this.context.closePath();
        this.context.stroke();
    }
}