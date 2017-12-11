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
    blockname.map(function(block){
      average.map(function(avg){
          for(var prop in avg){
            if(avg[prop]==block)
            {
              if(arr.indexOf(block)==-1)
              {
                arr.push(block);
                brr.push(prop);
              }
            }
          }


      });
    });
    var a=[];
     for(i=0;i<arr.length;i++){
        var obj2={};
        obj2[brr[i]]=arr[i];
        a.push(obj2);
     }

     var obj3={};
     var res=[];
      a.map(function(blo){

          for(var prop in blo){
            if(obj1.hasOwnProperty(prop))
            {
              obj1[prop].push(blo[prop])
            }
          }


      });

 console.log(obj1);



    // average.map(function(district){
    //     for(var dist in obj1){

    //         if(district.hasOwnProperty(dist)){

    //             if()
    //         }

    //     }


    // });
  });
