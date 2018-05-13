var maxNumber;


$(document).ready(function() {

    $('.center').slick({
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    // slidesToShow: 1,
                    // slidesToScroll:1,
                    vertical:true,
                    verticalSwiping:true,
                    arrows:false,
                    speed:100,
                    // rtl: true
                    // infinite: false
                    // centerMode: true
                    // adaptiveHeight:true
                    //                     //
                    // centerPadding:'258px'
                }
            }
        ]
    });


    var containerBottom = $('.center').offset().top +  $('.center').height();


    $('img').each(function (index) {
        if(!maxNumber){
            maxNumber = $(this).height();
        }
        if($(this).height() > maxNumber){
            maxNumber = $(this).height();
        }
    });

    $('.slick-slide').each(function (index) {
        if(!maxNumber){
            maxNumber =   $(this).position().top + $(this).outerHeight();
        }
        if($(this).position().top + $(this).outerHeight() > maxNumber){
            maxNumber =   $(this).position().top + $(this).outerHeight();
        }
    });

    var newPadding =0;
    var prev;
    var flagSlider;
    var obj ={};
    var number;
    var arr=[];

    var initialPadding = $('.slick-list').css('padding-top');

    // $('.center').on('setPosition', function(event, slick){
    //
    // }

    $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){




         // берем высоту next slide
         // от высоты контейнера отнимаем высоту  next slide и высоту на которую нужно отступить от нижнего края
         // устанавливаем padding top равную значению на пред строке



        var heightVeiw = 515;
        var slide = $(`div[data-slick-index ='${nextSlide}']`);
        var heightSlider  = slide.height();

        var diff = heightVeiw - heightSlider -20;

        // $('.slick-list.draggable').animate({paddingTop: diff},1000,"linear")

        $('.slick-list.draggable').css({'padding-top':diff+'px'});



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

          // if(currentSlide === 0 &&  nextSlide >=2){
          //     arr =[];
          //     obj ={};
          //
          //   var arrSliders = $("div[data-slick-index]:not(.slick-cloned)");
          //
          //   arrSliders.each(function () {
          //       if(!maxNumber){
          //           maxNumber = $(this).height();
          //       }
          //       if($(this).height() > maxNumber){
          //           maxNumber = $(this).height();
          //       }
          //   });
          //
          //   arrSliders.each(function () {
          //
          //       var sliderNumber = $(this).attr("data-slick-index");
          //
          //       var padding = maxNumber - $(this).height();
          //
          //       if(padding > 1){
          //
          //
          //
          //           newPadding = padding + parseInt(initialPadding, 10);
          //
          //           if(jQuery.isEmptyObject(arr)=== true){
          //
          //               obj[sliderNumber] = newPadding;
          //           } else{
          //               newPadding = obj[flagSlider]+ padding;
          //               obj[sliderNumber] = newPadding;
          //           }
          //
          //           flagSlider = sliderNumber;
          //           arr.push(flagSlider);
          //       }
          //   });



          // }






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

           //  if(currentSlide === 0 && arr.length >=2 ){
           //        arr =[];
           //        obj ={};
           //        newPadding =0;
           //
           //      var idTimer = setTimeout((function() {
           //          $('.slick-list.draggable').animate({paddingTop: initialPadding},1000,"linear", function () {
           //              clearTimeout(idTimer);
           //          });
           //      }), 1000);
           //
           //      return;
           //
           //  }
           //
           // if(currentSlide < flagSlider ){
           //     if(obj[currentSlide]){
           //         arr.pop();
           //         delete obj[flagSlider];
           //
           //         flagSlider = currentSlide;
           //         number = obj[currentSlide];
           //         // $('.slick-list').css({'padding-top':number+'px'});
           //
           //         $('.slick-list.draggable').animate({paddingTop: number},300,"linear",function () {
           //
           //         });
           //
           //            return;
           //     }
           //     // arr.pop();
           //     delete obj[flagSlider ];
           //     arr.pop();
           //     flagSlider = arr[arr.length-1];
           //     if(jQuery.isEmptyObject(obj)=== true){
           //         // $('.slick-list').css({'padding-top':'140px'});
           //
           //
           //         $('.slick-list.draggable').animate({paddingTop: initialPadding},300,"linear",function () {
           //
           //         });
           //
           //     } else{
           //          number = obj[flagSlider];
           //         // $('.slick-list').css({'padding-top':number+'px'});
           //
           //         $('.slick-list.draggable').animate({paddingTop: number+'px'},300,"linear",function () {
           //
           //         });
           //     }
           //
           // }
           //
           //          // newPadding = undefined;
           //
           //
           //  if(currentSlide  == flagSlider){
           //      newPadding = obj[flagSlider];
           //      // $('.slick-list').css({'padding-top':newPadding+'px'});
           //
           //
           //      $('.slick-list.draggable').animate({paddingTop: newPadding+'px'},300,"linear",function () {
           //
           //      });
           //
           //  } else {
           //
           //      var padding =  maxNumber -  slick.$slides[currentSlide].clientHeight;
           //      if(padding < 2 && newPadding !=0){
           //
           //          // $('.slick-list.draggable').animate({paddingTop: newPadding+'px'},300,"linear",function () {
           //          //
           //          // });
           //
           //            var idTimer = setTimeout((function() {
           //                $('.slick-list.draggable').animate({paddingTop: newPadding+'px'},1000,"linear", function () {
           //                    clearTimeout(idTimer);
           //              });
           //          }), 1000);
           //      }
           //      if( padding > 1){
           //
           //          newPadding  =   padding + parseInt(initialPadding, 10);
           //
           //          if(jQuery.isEmptyObject(arr)=== true){
           //              obj[currentSlide] = newPadding;
           //          } else{
           //              newPadding = obj[flagSlider]+ padding;
           //              obj[currentSlide] = newPadding;
           //          }
           //
           //          // $('.slick-list').css({'padding-top':newPadding+'px'});
           //
           //          $('.slick-list.draggable').animate({paddingTop: newPadding+'px'},300,"linear",function () {
           //
           //          });
           //
           //          flagSlider = currentSlide;
           //
           //          arr.push(flagSlider);
           //
           //          newPadding = 0;
           //
           //      }
           //
           //
           //
           //  }




        // } else {
        //     $('.slick-list').css({'padding-top':'140px'});
        // }


    });
    console.log(maxNumber);




});