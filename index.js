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
  })

  .on('end', function () {

    function findunique(uniqueobj) {


      // uniqueobj.map(function (check) {

      //   if (check != '') {
      //     if (uniquearr.indexOf(check) == -1) {

      //       uniquearr.push(check);
      //     }
      //   }

      // });
      // return uniquearr;
      var uniquearr=uniqueobj.filter(function(elem,i,arr){
            return arr.indexOf(elem)==i&&elem!='';

      });
      return uniquearr;
    }

    function objectfactory(arr1, arr2) {


      var factvar = arr1.reduce((total, amount, index, array) => {
        var n = {};
        n[amount] = arr2[index];
        total.push(n);
        return total
      }, []);

      return factvar
    }


    var districts = findunique(obj.district_name);
    var blockname = findunique(obj.block_name);
    var medium = findunique(obj.moi);
    console.log(medium);
    var average = objectfactory(obj.district_name, obj.block_name);
    var medinst = objectfactory(obj.block_name, obj.moi);
    var districtobj = {};

    districts.map(function (district) {
      districtobj[district] = [];

    });

    average.map(function (dist) {
      for (var prop in dist) {
        if (districtobj.hasOwnProperty(prop)) {

          if (districtobj[prop].indexOf(dist[prop]) == -1) {
            {
              districtobj[prop].push(dist[prop]);
            }
          }
        }
      }

    });

    moiobj = {};
    blockname.map(function (block) {

      moiobj[block] = {};
      medium.map(function (lang) {

        moiobj[block][lang] = 0;
      });
   });

    medinst.map(function (block) {
      for (var blo in moiobj) {
        if (block.hasOwnProperty(blo)) {
          if (moiobj[blo].hasOwnProperty(block[blo])) {
            moiobj[blo][block[blo]] = moiobj[blo][block[blo]] + 1;
          }
        }

      }
    });
    for (var prop in districtobj) {
      for (i = 0; i < districtobj[prop].length; i++) {
        var obj3 = {};
        if (moiobj.hasOwnProperty(districtobj[prop][i])) {

          obj3[districtobj[prop][i]] = moiobj[districtobj[prop][i]];
          districtobj[prop][i] = obj3;
        }
     }
    }
    // var json = JSON.stringify(obj1);
    // var fs = require('fs');
    // fs.writeFile('moi.json', json, 'utf8');

  });
