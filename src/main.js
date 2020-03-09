const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [headerB64, bodyB64,] = input.split(".");

const header = JSON.parse(Buffer.from(headerB64, "base64").toString());
const body = JSON.parse(Buffer.from(bodyB64, "base64").toString());
console.log("Token Header:")
console.log(header)
console.log("Token Body:")
console.log(body)
