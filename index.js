var csv = require('csv-parser');
var fs = require('fs')
const {objectfactory, findunique,groupBy} = require('./utils')
var rows = []

fs.createReadStream('primaryschool.csv')
  .pipe(csv()).on('data', function (data) {
    rows.push(data)
  })

   .on('end', function () {

     const a=groupBy(rows,'district_name');
     // Object.keys(a).forEach((key) => {
     //  a[key] = groupBy(a[key], 'block')
     // })
     console.log(Object.keys(a));

});
