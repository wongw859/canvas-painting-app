class Move extends PaintFunction {
    constructor(contextReal, canvasReal) {
        super();
        this.context = contextReal;
        this.data = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);
        this.width = canvasReal.width;
        this.height = canvasReal.height;
        this.img = new Image();
        this.img.src = canvasReal.toDataURL()  
        
    }

    onMouseDown() {}

    onDragging(coord, event) {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.drawImage(this.img, coord[0] - this.width/3, coord[1] - this.height/6, this.width, this.height);
    }

    
    onMouseMove(event) {
        $('.canvas-container').css({ "cursor": "move" });
    }
    onMouseUp(event) {
        $('.canvas-container').css({ "cursor": "move" });
        
    }
    onMouseLeave(event) {
        $('.canvas-container').css({ "cursor": "default"});
    }
    onMouseEnter() {}

}