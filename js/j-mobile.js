/**
 * Created by james on 16/1/26.
 */
//wayppoint
$(document).ready(function(){
    //select the region
    var province='';
    for(var i=0;i<region.length;i++){
        province = province+'<option name="'+region[i].name+'">'+region[i].name+'</option>'
    }
    $('.input-province').html(province);
    $('.input-province').on('change',function(e){

        var curCity = '';
        var curIndex = this.selectedIndex;
        if(curIndex==0){
             //    no select
            $(this).removeClass('hasvalue');
            $('.input-city').removeClass('hasvalue');
        }else{
            //no select
            $(this).addClass('hasvalue');
        }
        for(var k=0;k<region[curIndex].sub.length;k++){
            curCity= curCity+'<option name="'+region[curIndex].sub[k]+'">'+region[curIndex].sub[k]+'</option>';
        }
        $('.input-city').html(curCity);
    });
    $('.input-city').on('change', function(){
        var curIndex = this.selectedIndex;
        if(curIndex==0){
            //    no select
            $(this).removeClass('hasvalue');
        }else{
            //no select
            $(this).addClass('hasvalue');
        }
    });

    window.onload = function(){
        var arr = [];
        for(var i=0;i<$('.tg_item2 li').length;i++){
            arr.push($('.tg_item2 li')[i].offsetTop+$('.tg_item2').offset().top);
        }
        
        var startPoint = window.innerHeight/2;
        $(window).on('scroll', function(e){

            //for list animate of tg_item2
            if($(window).scrollTop()>arr[0]-startPoint && $(window).scrollTop()<arr[3]-startPoint+100){

                for(var j=0;j<arr.length;j++){
                    if($(window).scrollTop()>arr[j]-startPoint){
                        $('.tg_item2 li').eq(j).addClass('animated');
                    }
                }
            }else if($(window).scrollTop()>$('.watch').offset().top-startPoint && $(window).scrollTop()<$('.watch').offset().top-startPoint+100){
                $('.watch').addClass('animated');
            }else if($(window).scrollTop()>$('.football').offset().top-startPoint && $(window).scrollTop()<$('.football').offset().top-startPoint+100){
                $('.football').addClass('animated');
            };


        });
    };

    $('.btn-submit').on('click', function(){

        if(Common.formAddress()){
            if(!enableClick) return;
            enableClick = false;
            var name = $('.input-name').val(),
                mobile = $('.input-phone').val(),
                address = $('.input-address').val();
            //    true
            //service.formFinish({
            //    name:name,
            //    mobile:mobile,
            //    address:address,
            //    type:0
            //},function(data){
            //    enableClick = true;
            //    if(data.code==1){
            //        //    success
            //        Common.msgBox('<h4>您的申请已成功提交</h4>请耐心等待<br>小K正在打包礼品中！<br><p>点击右上角与朋友共享<br>睡美人青春容颜的秘密！</p>');
            //    }else if(data.code==4){
            //        Common.msgBox('<h4>很遗憾</h4>目前小样已经派送完咯<br>不过还会有<br>Kenzo“睡美人”面膜正装<br>降临10位幸运睡美人~<br>名单将会在公众号<br>【KenzoParfums凯卓】公布<br>请密切留意',true);
            //    }else{
            //        alert(data.msg);
            //    }
            //});
        }
    })

});


