var csv =require('csv-parser');
var fs=require('fs')
var obj = {
  "district_name": [],
  "block_name": [],
  "moi":[]
};
fs.createReadStream('primaryschool.csv')
  .pipe(csv()).on('data', function (data) {
    obj.district_name.push(data.district_name);
    obj.block_name.push(data.block_name);
    obj.moi.push(data.moi);
  })

  .on('end', function () {
   var districts=[];
   obj.district_name.map(function(dist){
        if(districts.indexOf(dist)==-1){
            districts.push(dist);
        }

   });
   var blockname=[];
    obj.block_name.map(function(dist){
        if(blockname.indexOf(dist)==-1){
            blockname.push(dist);
        }

   });
    var medium=[];
    obj.moi.map(function(med){
        if(med!=''){
        if(medium.indexOf(med)==-1){
            medium.push(med);
        }
    }

    });


 const average = obj.district_name.reduce((total, amount, index, array) => {
      var n = {};
      n[amount] = obj.block_name[index];
      total.push(n);
      return total
    }, []);

var blockno = obj.block_name.reduce(function (total, mo) {
      total[mo] = (total[mo] || 0) + 1;
      return total;
  },{});

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
    console.log(blockno);
    for(var prop in obj1){
        for(i=0;i<obj1[prop].length;i++){
            var obj3={};
            if(blockno.hasOwnProperty(obj1[prop][i]))
            {
                obj3[obj1[prop][i]]=blockno[obj1[prop][i]];
                obj1[prop][i]=obj3;
            }
        }
    }
    console.log(obj1);

  });
