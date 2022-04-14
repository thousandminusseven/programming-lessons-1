const fs = require('fs');
const Path = require('path');  
const axios = require('axios');
const http = require('http');


axios.get('https://jsonplaceholder.typicode.com/todos') 
.then (res=> {
const json= JSON.stringify(res.data);
fs.writeFile('code.json',json,(err)=>{
        if (err) return reject(err);

        console.log('wrote');
        let arr = JSON.parse(json)
        console.log(typeof(arr));
        console.log(arr.id == 2)
        //console.log(json.search('delectus'))
    })
})
.catch(e => console.error(e));

var data;
var arr = JSON.parse("[" + data + "]");
console.log( arr)
console.log(typeof arr[0])


let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;
  
  schedule = JSON.parse(schedule, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });
  
  alert( schedule.meetups[1].date.getDate() ); // 18 - отлично!