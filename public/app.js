$(document).ready(function(){

    var arr=[];
    var tree=$('.tree');
    var idcount1=0;
    var idcount2=0;
    var n=0;
    $.ajax({
       type: "GET",
       url :"moi.json",
       success:function(data)
       {


         for(var props in data)
         {
            var id='district'+idcount1;
            tree.append("<li class='branch twig'>"+props+"<ul id='"+id+"'>"+"<ul></li>" );
            for(i=0;i<data[props].length;i++){
                for(var key in data[props][i])
                {
                    id2='newId'+idcount2;
                    id3='i'+idcount2

                    $(`#${id}`).append("<li class='aj hide twig2' id='"+id3+"''>"+key+"<ul class='hide' id='"+id2+"''>"+"</ul></li>");
                    for(var next in data[props][i][key]){
                            var id4='j'+n;
                            var g='';
                            $(`#${id2}`).append("<li class='af' id='"+id4+"'>"+next+"</li>");
                            g=g+next+':'+data[props][i][key][next]+' ';
                            arr[n]=g;
                            n++;
                    }

                    idcount2++;
                }
            }
            idcount1++;
         }



       },
       dataType:"json",
    });
console.log(arr);

     $('.tree').on('click','.branch',function(event){


             event.stopPropagation();
             $(this).find(".aj").toggleClass('hide');
             $(this).toggleClass('twig');
             $(this).toggleClass('leaf');

    });
      $('.tree').on('click','.aj',function(event){

            event.stopPropagation();
            $(this).children().toggleClass('hide');
            $(this).toggleClass('twig2');
            $(this).toggleClass('leaf2');

    });
      $('.tree').on('click','.af',function(event){

            event.stopPropagation();
            var id=$(this).attr('id');
            console.log(id);
            var g=id.slice(1);
            $('.panel').empty();
            $('.panel').text(arr[g]);
      });

});
