// iro.js setup
var boxPicker = new iro.ColorPicker("#picker", {
    width: 200,
    colors: [
      "rgb(255, 0, 0)",
      "rgb(0, 255, 0)",
    ],
    borderWidth: 1,
    borderColor: "#fff",
    layout: [
      {
        component: iro.ui.Wheel,
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'value'
        }
      },
      {
        component: iro.ui.Slider,
        options: {
          sliderType: 'alpha'
        }
      }
      
    ]
});

