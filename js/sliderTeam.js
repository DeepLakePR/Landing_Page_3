$(function(){

    var currentIndex = 0;
    var delay = 5000;
    var amt;

    initSlider();
    autoPlay();

    function initSlider(){
        amt = $('.sobre-autor').length;
        var containerSize = 100 * amt;
        var boxSingleSize = 100 / amt;

        $('.sobre-autor').css('width', boxSingleSize + '%');
        $('.scrollWrapper').css('width', containerSize + '%');

        for(var i = 0; i < amt; i++){
            if(i == 0)
                $('.slider-bullets').append('<span style="background-color:rgb(170,170,170)"></span>');
            else
                $('.slider-bullets').append('<span></span>');
            

        }

    }

    function autoPlay(){
        setInterval(()=>{

            currentIndex++;

            if(currentIndex == amt)
                currentIndex = 0;

            goToSlider(currentIndex);

        }, delay)
    }

    function goToSlider(index){

        var offSetX = $('.sobre-autor').eq(index).offset().left + $('.scrollWrapper').offset().left;

        $('.slider-bullets span').css('background-color', 'rgb(200, 200, 200)');
        $('.slider-bullets span').eq(index).css('background-color', 'rgb(170, 170, 170)');

        $('.scrollEquipe').stop().animate({'scrollLeft': offSetX + 'px'});
    }

    $(window).resize(()=>{

        $('.scrollEquipe').stop().animate({'scrollLeft': 0});

    })

})