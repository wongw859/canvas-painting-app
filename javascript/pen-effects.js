// Blur effect
$(function () {

  $(".blur-button").click(() => {
    let value = $("#blur").val();
    var img = new Image();
    // img.src = canvasReal.toDataURL()
    contextReal.filter = `blur(${value}px)`;
    contextReal.drawImage(img, 0, 0);

    $("#blur").on("change mousemove",function (e) {
      value = $("#blur").val();
      contextReal.filter = `blur(${value}px)`;

    })

  })
})

// Shadow effect
$(function () {
  $(".shadow-button").click(() => {
    let value = $("#shadow").val();
    var img = new Image();
    // img.src = canvasReal.toDataURL();
    console.log(value, colorPicker.colors[1].hexString)
    contextReal.filter = `drop-shadow(3px 3px ${value}px ${colorPicker.colors[1].hexString})`;
    contextReal.drawImage(img, 0, 0);

    $("#shadow").on("change mousemove",function (e) {
      value = $("#shadow").val();
      contextReal.filter = `drop-shadow(3px 3px ${value}px ${colorPicker.colors[1].hexString})`;
    })

    colorPicker.on('color:change', function(color) {
      // if the secondary color changed
      if (color.index === 1) {
        contextReal.filter = `drop-shadow(3px 3px ${value}px ${colorPicker.colors[1].hexString})`;
      }
    })

  
  })
})

// Reset pen effect
$(function () {
  $(".reset-button").click(() => {
    var img = new Image();
    // img.src = canvasReal.toDataURL()

    contextReal.filter = 'none';
    contextReal.drawImage(img, 0, 0);
  })
})


