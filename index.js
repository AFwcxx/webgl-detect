"use strict"

import { webgl } from './webgl.js'

const w = await webgl();

$('#agent').append(w.agent);
$('#canvas').append(w.canvas);
$('#fingerprint').append(w.fingerprint);

const cycle= ['info', 'params', 'functions'];

for (let i = 0; i < cycle.length; i++) {
  const data = w.configurations[cycle[i]];

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
