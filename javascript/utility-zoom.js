let zooming = false;

class Zoom extends PaintFunction {
    constructor(contextReal, canvasReal) {
        super();
        this.context = contextReal;
        this.data = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);
        this.scale = 1;
        this.factor = 1.1;
        this.width = canvasReal.width;
        this.height = canvasReal.height;
        this.img = new Image();
        this.img.src = canvasReal.toDataURL()
    }

    onMouseDown(event) {
        if (zooming) {
            this.scale *= this.factor;
            this.draw(this.scale);
        } else {
            this.scale /= this.factor;
            this.draw(this.scale);
        }
    }

    onDragging() {}

    
    onMouseMove(event) {
        if (zooming) {
            $('.canvas-container').css({ "cursor": "zoom-in" });
        } else {
            $('.canvas-container').css({ "cursor": "zoom-out" });
        };
    }
    onMouseUp(event) {
        if (zooming) {
            $('.canvas-container').css({ "cursor": "zoom-in" });
        } else {
            $('.canvas-container').css({ "cursor": "zoom-out" });
        };
    }
    onMouseLeave(event) {
        $('.canvas-container').css({ "cursor": "default"});
    }
    onMouseEnter() {}

    draw(scale){
        this.context.save();

        this.context.clearRect(0, 0, this.width, this.height);
        this.context.scale(scale, scale);
        this.context.translate(0, 0);
        this.context.drawImage(this.img, 0, 0);
        this.context.restore(); 
    }

}








// $(".filter4").click(() => {
//     var drawingData = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);

//     drawingData.scale(1.25, 1.25);
//     return drawingData;

//     // 1) Clear the existing Image
//     // 2) Scale
//     // 3) Show the image again
// })