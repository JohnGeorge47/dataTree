var csv = require('csv-parser');
var fs = require('fs')
var obj = {
  "district_name": [],
  "block_name": [],
  "moi": [],
  "cluster_name": []
};

fs.createReadStream('primaryschool.csv')
  .pipe(csv()).on('data', function (data) {
    obj.district_name.push(data.district_name);
    obj.block_name.push(data.block_name);
    obj.moi.push(data.moi);
    obj.cluster_name.push(data.cluster_name);
  })

  .on('end', function () {

      function findunique(uniqueobj){

          var uniquearr=[];
          uniqueobj.map(function(check){

          if(check!=''){
          if(uniquearr.indexOf(check)==-1){

              uniquearr.push(check);
          }
        }

         });
          return uniquearr;
    }
    var districts=findunique(obj.district_name);
    var blockname=findunique(obj.block_name);
    var medium= findunique(obj.moi);
    console.log(medium);

    // var medium = [];
    // obj.moi.map(function (med) {
    //   if (med != '') {
    //     if (medium.indexOf(med) == -1) {
    //       medium.push(med);
    //     }
    //   }

    // });


    const average = obj.district_name.reduce((total, amount, index, array) => {
      var n = {};
      n[amount] = obj.block_name[index];
      total.push(n);
      return total
    }, []);

    const medinst = obj.block_name.reduce((total, amount, index, array) => {

      var n = {};
      n[amount] = obj.moi[index];
      total.push(n);
      return total;

    }, []);




    var blockno = obj.block_name.reduce(function (total, mo) {
      total[mo] = (total[mo] || 0) + 1;
      return total;
    }, {});

    var arr = [];
    var brr = [];
    var obj1 = {};
    districts.map(function (district) {
      obj1[district] = [];

    });
    average.map(function (dist) {
      for (var prop in dist) {
        if (obj1.hasOwnProperty(prop)) {

          if (obj1[prop].indexOf(dist[prop]) == -1) {
            {
              obj1[prop].push(dist[prop]);
            }
          }
        }
      }

    });

    var arr = [];
    obj4 = {};
    blockname.map(function (block) {

      obj4[block] = {};
      medium.map(function (lang) {

        obj4[block][lang] = 0;



      });

    });

    medinst.map(function (block) {
      for (var blo in obj4) {
        if (block.hasOwnProperty(blo)) {
          if (obj4[blo].hasOwnProperty(block[blo])) {
            obj4[blo][block[blo]] = obj4[blo][block[blo]] + 1;
          }
        }

      }
    });
    for (var prop in obj1) {
      for (i = 0; i < obj1[prop].length; i++) {
        var obj3 = {};
        if (obj4.hasOwnProperty(obj1[prop][i])) {

          obj3[obj1[prop][i]] = obj4[obj1[prop][i]];
          obj1[prop][i] = obj3;
        }


      }

    }
    // var json = JSON.stringify(obj1);
    // var fs = require('fs');
    // fs.writeFile('moi.json', json, 'utf8');

  });
