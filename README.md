# WebGL fingerprint

WebGL canvas fingerprint algorithm implementation in JavaScript.
Based on WebGL 2.0 (OpenGL ES 3.0) parameters and the values are hashed with SHA-256.

Detect your browser:

```sh
$ npm ci
$ npm start
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080) in your browser.

Use it in your code:

```javascript
import { webgl } from './webgl.js'

const w = await webgl();
console.log("Fingerprint", w.fingerprint);
```
