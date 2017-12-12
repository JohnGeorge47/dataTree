$(document).ready(function(){
    var tree=$('.tree');
    var j=0;
    $.ajax({
       type: "GET",
       url :"moi.json",
       success:function(data)
       {
            console.log(data);

         for(var props in data)
         {
            var id='district'+j;
            tree.append("<li><span class='collapsable'>"+props+"</span><ul id='"+id+"'>"+"<ul></li>" );
            for(i=0;i<data[props].length;i++){
                for(var key in data[props][i])
                {
                    $(`#${id}`).append("<li><span class='collapsable'>"+key+"</span><ul<ul></li>");
                }
            }
            j++;
         }



       },
       dataType:"json",
    });
       $(".collapsable").click(function () {

        $(this).parent().children().toggle();
        $(this).toggle();

    });

$(".collapsable").each(function(){

        $(this).parent().children().toggle();
        $(this).toggle();
});


});
