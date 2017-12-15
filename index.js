var csv = require('csv-parser');
var fs = require('fs')
const {objectfactory, findunique,groupBy,tally} = require('./utils')
var rows = []

fs.createReadStream('primaryschool.csv')
  .pipe(csv()).on('data', function (data) {
    rows.push(data)
  })
   .on('end', function () {
     const a=groupBy(rows,'district_name');
     Object.keys(a).forEach((key) => {
      a[key] = groupBy(a[key], 'block_name');

      });

      for(var prop in a){

          for(var key in a[prop])
              {
               a[prop][key]=tally(a[prop][key],'moi');

              }
      }

    Object.keys(a).forEach((key)=>{
          var g=[];
          for(var props in a[key]){
                g.push{}

          }


    });
});
