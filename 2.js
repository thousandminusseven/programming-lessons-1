const fs = require('fs')
const url = '/code/100';
const number = url.split('/').reverse()[0];


fs.readFile('code.json',(err,json)=>{
    if (err) return console.error(err);
    const code = JSON.parse(json);
console.log (JSON.stringify(code[number]))
})
