let cStep = 0;
let canvasArray = [canvasReal.toDataURL("image/png")];

function saveState() {
    canvasArray[++cStep] = canvasReal.toDataURL("image/png");
    if (cStep < canvasArray.length - 1) {
      for (let i = cStep; i < canvasArray.length; i++) {
        canvasArray.pop();
      }
    }
  }

function undo() {
    if (cStep > 0) {
        cStep--;
        let canvasPic = new Image();
        canvasPic.src = canvasArray[cStep];
        contextReal.clearRect(0, 0, contextReal.canvas.width, contextReal.canvas.height);
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
    }
}

function redo() {
    if (cStep < canvasArray.length - 1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = canvasArray[cStep];
        contextReal.clearRect(0, 0, contextReal.canvas.width, contextReal.canvas.height);
        canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
    }
}