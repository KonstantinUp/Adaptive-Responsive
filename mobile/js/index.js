var maxNumber;


$(document).ready(function() {

    $('.center').slick({
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    // slidesToShow: 1,
                    vertical:true,
                    verticalSwiping:true,
                    arrows:false
                    // infinite: false
                    // centerMode: true,
                    //                     //
                    // centerPadding:'258px'
                }
            }
        ]
    });


    var containerBottom = $('.center').offset().top +  $('.center').height();


    $('img').each(function (index) {
        if(!maxNumber){
            maxNumber =   + $(this).height();
        }
        if($(this).height() > maxNumber){
            maxNumber =   $(this).height();
        }
    });

    // $('.slick-slide').each(function (index) {
    //     if(!maxNumber){
    //         maxNumber =   $(this).position().top + $(this).outerHeight();
    //     }
    //     if($(this).position().top + $(this).outerHeight() > maxNumber){
    //         maxNumber =   $(this).position().top + $(this).outerHeight();
    //     }
    // });

    var newPadding;
    var prev;
    var flagSlider;
    var obj ={};
    var number;
    var arr=[];

    var initialPadding = $('.slick-list').css('padding-top');


    $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        // var a;
        // var contentBottom =  $('.slick-active').offset().top + slick.$slides[nextSlide].clientHeight;
        // var diff = containerBottom - contentBottom;
        //
        //  if($('.slick-list.draggable').scrollTop() === 0){
        //      $('.slick-list.draggable').scrollTop(323);
        //  } else {
        //      var currentvalue =  $('.slick-list.draggable').scrollTop() + 323;
        //
        //      $('.slick-list.draggable').scrollTop(currentvalue);
        //
        //  }

        // $('.slick-list.draggable').animate({ scrollTop: slick.$slides[nextSlide].clientHeight+15 },1000);
    });



    $('.center').on('afterChange', function(event, slick, currentSlide){

       //
       // var contentBottom = slick.$slides[currentSlide].clientHeight;
       //
       // var diff =515-contentBottom;



        // $(".slick-active").offset(function(i,val){
        //     return {top:$('.slick-active').offset().top+diff-55, left:val.left};
        // });

        // var scroll =  $('.slick-list.draggable').scrollTop() - diff+40;
        //
        //
        //
        //
        //
        // $('.slick-list.draggable').animate({ scrollTop: scroll },1000);

            if(currentSlide === 0 && arr.length >=2 ){
                  arr =[];
                  obj ={};

                // $('.slick-list.draggable').animate({paddingTop: initialPadding},300,"linear",function () {
                //
                // });

            }

           if(currentSlide < flagSlider ){
               if(obj[currentSlide]){
                   number = obj[arr.length-1];
                   $('.slick-list').css({'padding-top':number+'px'});
                    return;
               }
               // arr.pop();
               delete obj[flagSlider ];
               arr.pop();
               flagSlider = arr[arr.length-1];
               if(jQuery.isEmptyObject(obj)=== true){
                   // $('.slick-list').css({'padding-top':'140px'});


                   $('.slick-list.draggable').animate({paddingTop: initialPadding},300,"linear",function () {

                   });

               } else{
                    number = obj[flagSlider];
                   // $('.slick-list').css({'padding-top':number+'px'});

                   $('.slick-list.draggable').animate({paddingTop: number+'px'},300,"linear",function () {

                   });
               }

           }

                    // newPadding = undefined;


            if(currentSlide  === flagSlider){
                newPadding = obj[flagSlider];
                // $('.slick-list').css({'padding-top':newPadding+'px'});


                $('.slick-list.draggable').animate({paddingTop: newPadding+'px'},300,"linear",function () {

                });

            } else {

                var padding =  maxNumber -  slick.$slides[currentSlide].clientHeight;
                if( padding > 1){

                    newPadding  =   padding + parseInt(initialPadding, 10) ;

                    if(jQuery.isEmptyObject(arr)=== true){
                        obj[currentSlide] = newPadding;
                    } else{
                        newPadding = obj[flagSlider]+ padding;
                        obj[currentSlide] = newPadding;
                    }

                    // $('.slick-list').css({'padding-top':newPadding+'px'});

                    $('.slick-list.draggable').animate({paddingTop: newPadding+'px'},300,"linear",function () {

                    });

                    flagSlider = currentSlide;

                    arr.push(flagSlider);

                }



            }




        // } else {
        //     $('.slick-list').css({'padding-top':'140px'});
        // }


    });
    console.log(maxNumber);




});