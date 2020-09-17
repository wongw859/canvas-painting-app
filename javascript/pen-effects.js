// Core
// Take the values of the canvas rect first


$(function () {
  $("#filter7").click(() => {
    var img = new Image();
    img.src = canvasReal.toDataURL()

    contextReal.filter = 'blur(4px)';
    contextReal.drawImage(img, 0, 0);
  })
})

$(function () {
  $("#filter8").click(() => {
    var img = new Image();
    img.src = canvasReal.toDataURL()

    contextReal.filter = 'drop-shadow(3px 3px 2px #1C1C1C)';
    contextReal.drawImage(img, 0, 0);
  })
})

// Reset pen effect
$(function () {
  $("#filter9").click(() => {
    var img = new Image();
    img.src = canvasReal.toDataURL()

    contextReal.filter = 'none';
    contextReal.drawImage(img, 0, 0);
  })
})


