var csv =require('csv-parser');
var fs=require('fs')
var obj = {
  "district_name": [],
  "block_name": []
};
fs.createReadStream('primaryschool.csv')
  .pipe(csv()).on('data', function (data) {
    obj.district_name.push(data.district_name);
    obj.block_name.push(data.block_name);
  })

  .on('end', function () {
   var districts=[];
   obj.district_name.map(function(dist){
        if(districts.indexOf(dist)==-1){
            districts.push(dist);
        }

   });
   var blockname=[]
    obj.block_name.map(function(dist){
        if(blockname.indexOf(dist)==-1){
            blockname.push(dist);
        }

   });


 const average = obj.district_name.reduce((total, amount, index, array) => {
      var n = {};
      n[amount] = obj.block_name[index];
      total.push(n);
      return total
    }, []);
    var arr=[];
    var brr=[];
    var obj1={};
    districts.map(function(district){
        obj1[district]=[];

    });
    average.map(function(dist){
        for(var prop in dist){
          if(obj1.hasOwnProperty(prop))
          {
            if(obj1[prop].indexOf(dist[prop])==-1){
              {
                obj1[prop].push(dist[prop]);
              }
            }
          }
        }

    });
    console.log(obj1);

  });
