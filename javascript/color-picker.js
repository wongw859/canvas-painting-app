// iro.js setup
var colorPicker = new iro.ColorPicker("#picker", {
    width: 200,
    colors: [
      "rgb(255, 0, 0)",
      "rgb(0, 255, 0)",
    ],
    borderWidth: 2,
    borderColor: "#ccc",
    layout: [
      {
        component: iro.ui.Wheel,
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'saturation'
        }
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'value'
        }
      }
      
    ]
});

// Showing primary and secondary colors
colorPicker.on('color:change', function(color) {
  // if the first color changed
  if (color.index === 0) {
    // log the color index and hex value
    // console.log(color.index, color.hexString);
    console.log(colorPicker.colors[0].hexString);

    // Change the preview box
    $(".primary-color").css("background-color", color.hexString);
  } else if (color.index === 1) {
    // log the color index and hex value
    // console.log(color.index, color.hexString);
    console.log(colorPicker.colors[1].hexString);

    // Change the preview box
    $(".secondary-color").css("background-color", color.hexString);
  }

});
