const fs = require('fs');

const data = fs.readFileSync('./file.txt', 'utf-8');
const text = 'This is our node script!';

console.log(`${data} ${text}`);
