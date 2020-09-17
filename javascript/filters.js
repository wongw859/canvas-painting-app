$(function() {

    // Invert color
    $("#filter1").click(() => {
        var drawingData = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);

        // Algorithm
        var i;
        for (i = 0; i < drawingData.data.length; i += 4) {
        drawingData.data[i] = 255-drawingData.data[i];
        drawingData.data[i + 1] = 255-drawingData.data[i + 1];
        drawingData.data[i + 2] = 255-drawingData.data[i + 2];
        }
    
        contextReal.putImageData(drawingData, 0, 0);
    })
    
    // Greyscale
    $("#filter2").click(() => {
        var drawingData = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);

        // Algorithm        
        var d = drawingData.data;
        for (var i = 0; i < d.length; i += 4) {
            const color = (d[i] + d[i+1] + d[i+2]) / 3;
            d[i] = d[i+1] = d[i+2] = color;
        } 
    
        contextReal.putImageData(drawingData, 0, 0);
    })

    // Brightness
    $("#filter3").click(() => {
        var drawingData = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);

        let adj = 10;

        // Algorithm
        var d = drawingData.data;
        for (var i = 0; i < d.length; i += 4) {
        d[i] += adj;
        d[i + 1] += adj;
        d[i + 2] += adj;
        }
        contextReal.putImageData(drawingData, 0, 0);
    })

})
