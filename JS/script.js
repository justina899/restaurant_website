$(function(){
    $("#navbar-toggler").blur(function(event){
        var screenWidth = window.innerWidth;    //window.innerWidth - screen of the browser
        if(screenWidth < 768){
            $("#collapsable-nav").collapse({ 'toggle': false }).collapse('hide');
        }
    });
});