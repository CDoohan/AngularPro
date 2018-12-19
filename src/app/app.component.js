$(document).ready(function(){
    //CUSTOM LABEL
    $(".customHolder .customInput").focus(function(){
        $(this).parent().addClass("active");
    }).blur(function(){
        if($(this).val()){
            return true;
        }else{
            $(this).parent().removeClass("active");
        }
    });
    
    //CUSTOM LABEL
    $(window).on('load', function(){
        $('.customHolder .customInput').each(function(){
            if($(this).val()){
                return true;
            }else{
                $(this).parent().addClass("active");
            }
        });
    });
});