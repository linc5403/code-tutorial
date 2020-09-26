
$('.login-button').click(function(){

    var username = $('.login-input').val();

    if(username){
        $.ajax({
            type:'POST',
            url:'/goChat',
            data:{
                username
            },
            success: function(){

                location.href = '/chat'
            },
            error: function(error){

                console.log(error);
            }
        })
    }else{
        alert('请输入昵称');
    }
    
})