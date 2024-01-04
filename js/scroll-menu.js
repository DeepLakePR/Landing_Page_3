$(function(){

    $('nav a').click(()=>{
        var href = $(this).attr('href');
        var offSetTop = $(this).offset().top;

        $('html,body').animate({
            'scrollTop': offSetTop
        })

        return false;

    })

})