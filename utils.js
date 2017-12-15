function findunique(uniqueobj) {
  return uniqueobj.filter(function(elem,i,arr){
    return arr.indexOf(elem)==i&&elem!='';

  });
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

function groupBy(rows,groupId){

      return rows.reduce((sofar,current)=>{

              if(sofar[current[groupId]]==undefined){

                  sofar[current[groupId]]=[];

                  sofar[current[groupId]].push(current);



            }
            else
            {

              sofar[current[groupId]].push(current);


          }

        return sofar;



        },{});



}

module.exports = {
  findunique: findunique,
  objectfactory: objectfactory,
  groupBy:groupBy
}
