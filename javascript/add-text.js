let inputAdded = false;
class AddText2 extends PaintFunction {
    /**********************************************
    * Drawing Eraser Functionality
    * ==================================
    ***********************************************/

    // This class extends the PaintFunction class
    constructor(contextReal) {
        super();
        this.context = contextReal;
        this.origX = null;
        this.origY = null;
        
    }

    // On mouse down, ensure that the pen has these features
    onMouseDown(coord, event) {
        if (!inputAdded) {
            let fontSize = $('#font-size').val();
            let font = $('#font').val();
            this.origX = coord[0];
            this.origY = coord[1];
            this.context.font = `${fontSize}px ${font}`;
            this.context.fillStyle = colorPicker.colors[0].hexString;
            var input = document.createElement('input');
            input.type = 'text';
            input.style.position = 'fixed';
            input.style.borderBottom = "2px gray dash";
            input.style.placeholder = "Type and push 'Enter'";
            input.style.height = 40;
            input.style.width = 350;
            input.style.font = "Arial";
            input.style.fontSize = "20px";
            input.placeholder = "Type and push 'Enter'";
            input.style.left = (this.origX + 365) + 'px'; //the position of input when you click mouse//
            input.style.top = (this.origY + 66) + 'px';
            input.id = 'txtInput'
            document.body.appendChild(input);
            inputAdded = true;

            input.onkeydown = function handleEnter(input) {
                if (input.key == 'Enter') {
                    var typedText = document.getElementById("txtInput").value;
                    contextReal.fillText(typedText, coord[0] - 3, coord[1] + 20);
                    document.body.removeChild(this);
                    inputAdded = false;
                    saveState();
                }
            };
        }
    }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave(coord, event) { 
        if(!(coord[0] < this.origX + 350 && coord[0] > this.origX - 350 && coord[1] < this.origY + 40 && coord[1] > this.origY - 40)) {
            $('#txtInput').remove();
            inputAdded = false;
        }

    }
    onMouseEnter() { }

}
