$(document).ready(function(){
	
    $('h3').toggle(function () {

        var height = $(this).next('ul').height();

        $(this).next('ul').slideDown(1000);
        $('html, body').animate({
            scrollTop: '+=' + height
        }, 1000);
        return false;
    }, function () {
        $(this).next('ul').animate({
            height: "toggle"
        });
    });
    
});
