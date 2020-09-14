/**********************************************
 * Drawing Triangle Functionality
 * ==================================
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
class DrawingTriangle extends PaintFunction {
    constructor(contextReal, contextDraft, canvas) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
    }



    onMouseDown(coord, event) {
        this.contextReal.fillStyle = "#f44";
        this.origX = coord[0];
        this.origY = coord[1];


    }
    onDragging(coord, event) {
        this.contextDraft.fillStyle = "#f44";
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        // this.contextDraft.filltri() {


        // }
    }

    onMouseMove() {}
    onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        // this.contextReal.filltri() {}
    }
    onMouseLeave() {}
    onMouseEnter() {}

    draw(x, y) {
        var mouse = [];
        var triangles = [];
        for (var tIndex = 0; tIndex < triangles.length; tIndex++) {
            var triangle = triangles[tIndex];
            ctx.beginPath();
            ctx.moveTo(triangle.a.x, triangle.a.y);
            ctx.lineTo(triangle.b.x, triangle.b.y);
            ctx.lineTo(triangle.c.x, triangle.c.y);
            ctx.closePath();
            ctx.stroke();
        }
    }

}