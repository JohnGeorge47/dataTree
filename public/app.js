$(document).ready(function(){
    var tree=$('.tree');
    var j=0;
    var k=0;
    $.ajax({
       type: "GET",
       url :"moi.json",
       success:function(data)
       {
            console.log(data);

         for(var props in data)
         {
            var id='district'+j;
            tree.append("<li>"+props+"<ul id='"+id+"'>"+"<ul></li>" );
            for(i=0;i<data[props].length;i++){
                for(var key in data[props][i])
                {
                    id2='newId'+k;

                    $(`#${id}`).append("<li>"+key+"<ul id='"+id2+"''>"+"</ul></li>");
                    for(var next in data[props][i][key]){

                            $(`#${id2}`).append("<li>"+next+"</li>");

                    }
                    k++;
                }
            }
            j++;
         }



       },
       dataType:"json",
    });
       $(".tree").click(function () {

        $(this).parent().children().toggle();


    });




});
