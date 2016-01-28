/**
 * Created by james on 16/1/26.
 */
//wayppoint
$(document).ready(function(){
    window.onload = function(){
        var arr = [];
        for(var i=0;i<$('.tg__wrap').length;i++){
            arr.push($('.tg__wrap')[i].offsetTop);
        }
        console.log(arr)
        $(window).on('scroll', function(e){

            for(var j=0;j<arr.length;j++){
                if($(window).scrollTop()>arr[j]){
                    $('.tg__wrap').removeClass('actived').eq(j).addClass('actived');
                }
            }

        });
    };

});


