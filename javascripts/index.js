"use strict";

$(document).ready(function () {
  let webgl = new WebGl();

  webgl.ready.then(() => {
    $('#agent').append(webgl.agent);
    $('#webgl-fingerprint').append(webgl.fingerprint);
    $('#canvas').append(webgl.canvas);
    $('#hash').append(webgl.hash);
  });
});
