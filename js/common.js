;(function(){
    var ua = navigator.userAgent.toLowerCase();
    var Common = {
        errorMsg : {
            add:function(ele,msg){
                if(!ele.find('.error').length){
                    ele.append('<div class="error">'+msg+'</div>');
                }else{
                    ele.find('.error').html(msg);
                }
            },
            remove:function(ele){
                if(ele.find('.error').length){
                    ele.find('.error').remove();
                }
            }
        },
        msgBox:function(msg,long){
            if(long){
                $('body').append('<div class="ajaxpop msgbox minwidthbox"><div class="loading">'+msg+'</div></div>');
            }else{
                $('body').append('<div class="ajaxpop msgbox"><div class="loading">'+msg+'</div></div>');
            }
        },
        formAddress:function(){
            var validate = true;
            if(!$('.input-name').val()){
                Common.errorMsg.add($('.input-name').parent(),'用户名填写错误');
                validate = false;
            }else{
                Common.errorMsg.remove($('.input-name').parent());
            }

            if(!$('.input-province').val() || !$('.input-city').val() || !$('.input-province')[0].selectedIndex || !$('.input-city')[0].selectedIndex){
                Common.errorMsg.add($('.input-province').parent(),'地址不能为空');
                validate = false;

            }else{
                Common.errorMsg.remove($('.input-province').parent());

            }

            if(!$('.input-phone').val()){
                Common.errorMsg.add($('.input-phone').parent(),'联系方式填写错误');
                validate = false;
            }else{
                var reg=/^\d/;
                if(!(reg.test($('.input-phone').val()) && $('.input-phone').val().length>2)){
                    validate = false;
                    Common.errorMsg.add($('.input-phone').parent(),'手机号格式错误，请重新输入');
                }else{
                    Common.errorMsg.remove($('.input-phone').parent());
                }

            }
            if(validate){
                return true;
            }else{
                return false;
            }
        },
    };

    //alert(Common.isWx());

    this.Common = Common;

}).call(this);