$(document).ready(function(){


    var tree=$('.tree');
    var j=0;
    var k=0;
    $.ajax({
       type: "GET",
       url :"moi.json",
       success:function(data)
       {


         for(var props in data)
         {
            var id='district'+j;
            tree.append("<li class='branch twig'>"+props+"<ul id='"+id+"'>"+"<ul></li>" );
            for(i=0;i<data[props].length;i++){
                for(var key in data[props][i])
                {
                    id2='newId'+k;

                    $(`#${id}`).append("<li class='aj hide'>"+key+"<ul class='hide' id='"+id2+"''>"+"</ul></li>");
                    for(var next in data[props][i][key]){

                            $(`#${id2}`).append("<li class='af'>"+next+":"+data[props][i][key][next]+"</li>");

                    }
                    k++;
                }
            }
            j++;
         }



       },
       dataType:"json",
    });


     $('.tree').on('click','.branch',function(event){


             event.stopPropagation();
             $(this).find(".aj").toggleClass('hide');
             $(this).toggleClass('twig');
             $(this).toggleClass('leaf');

    });
      $('.tree').on('click','.aj',function(event){

            event.stopPropagation();
            $(this).children().toggleClass('hide');

    });

});
