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
        // let offset = $("#canvas-real").offset();
        // let offsetX = offset.left;
        // let offsetY = offset.top;
        // let mouseX = event.offsetX;
        // let mouseY = event.offsetY;
      
        // console.log(mouseX, mouseY)
        // let canMouseX = parseInt(event.clientX - offsetX);
        // let canMouseY = parseInt(event.clientY - offsetY);

        this.context.clearRect(0, 0, this.width, this.height);
        // console.log(canMouseX, canMouseY)
        this.context.drawImage(this.img, coord[0] - this.width/2.2, coord[1] - this.height/2.2, this.width, this.height);
    }

    
    onMouseMove(event) {
        $('#canvas-container').css({ "cursor": "move" });
    }
    onMouseUp(event) {
        $('#canvas-container').css({ "cursor": "move" });
    }
    onMouseLeave(event) {
        $('#canvas-container').css({ "cursor": "default"});
    }
    onMouseEnter() {}

}