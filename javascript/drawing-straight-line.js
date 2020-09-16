/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/
class DrawingStraightLine extends PaintFunction {
  // This class extends the PaintFunction class
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  // On mouse down, ensure that the pen has these features
  onMouseDown(coord, event) {
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.drawLine(this.origX, this.origY, coord[0], coord[1], contextDraft);
  }

  onMouseMove() { }
  onMouseUp(coord, event) {
    saveState();
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.drawLine(this.origX, this.origY, coord[0], coord[1], contextReal);
  }
  onMouseLeave() {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
   }
  onMouseEnter() { }

  drawLine(x1, y1, x2, y2, context) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }

}
