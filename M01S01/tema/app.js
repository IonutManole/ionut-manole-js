var inputLength = document.getElementById('length');
var inputWidth = document.getElementById('width');
var inputHeight = document.getElementById('height');
var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var elementResultVolume = document.getElementById('result-volume');
var elementResultSurface = document.getElementById('result-surface');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (e) {
    var length = inputLength.value || 0;
    var width = inputWidth.value || 0;
    var height = inputHeight.value || 0;
    var radius = inputRadius.value || 0;
    var result = 0;
    var resultVolume = 0;
    var resultSurface = 0;

    if (length != '' && width != '' && height != '') {
      result = 'Volumul este ' + length * width * height;
    } else if (length != '' && width != '') {
      result = 'Aria dreptunghiului este ' + length * width;
    } else if (radius != '') {
      result = 'Aria cercului este ' + Math.PI * Math.pow(radius, 2);
      resultVolume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      resultSurface = 4 * Math.PI * Math.pow(radius, 2);
    }

    elementResult.innerText = result;
    elementResultVolume.innerText = resultVolume;
    elementResultSurface.innerText = resultSurface;

    e.preventDefault();
  },
  false,
);
