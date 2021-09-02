"use strict";

$(document).ready(function () {
  let webgl = new WebGl();

  webgl.ready.then(() => {
    $('#agent').append(webgl.agent);
    $('#webgl-fingerprint').append(webgl.fingerprint);
    $('#canvas').append(webgl.canvas);
    $('#hash').append(webgl.hash);

    let data = false;
    let cycle= ['info', 'params', 'functions'];

    for (let i = 0; i < cycle.length; i++) {
      data = webgl.configurations[cycle[i]];

      for (let k in data) {
        if (data.hasOwnProperty(k)) {
          if (Array.isArray(data[k])) {
            data[k] = data[k].join(', ');
          } else if (typeof data[k] === 'object') {
            let theString = "";

            for (let j in data[k]) {
              if (data[k].hasOwnProperty(j)) {
                theString += `${data[k][j]}</br>`;
              }
            }

            data[k] = theString;
          }

          $('#table-' + cycle[i] + ' tbody').append(`
        <tr>
          <td>${k}</td>
          <td>${data[k]}</td>
        </tr>
        `);
        }
      }
    }
  });
});
