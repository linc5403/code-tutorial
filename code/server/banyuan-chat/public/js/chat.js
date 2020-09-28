$(document).ready(function(){
    
    // 初始化页面的时候，滚动到最底部
    scrollToBottom();

    // 为input增加enter按键监听
    addClickListenerOnInput();

    // 轮询获取聊天信息
    polling();

    // 定时器实例
    var timer;

    // 是否是自己发送信息
    var isSelf = false;

    /*
     * 轮询获取聊天信息 
     */
    function polling(){

        // 如果存在，先清除
        if(timer){

            clearInterval(timer); 
        }
        
        setInterval(function(){

            $.ajax({
                type:'GET',
                url:'/chatContent',
                success: function(result){

                    if(Array.isArray(result)){

                        renderChatContent(result)
                        
                    }
                },
                error: function(error){

                    console.log(error);
                }
            })
        },3000)
    }


    /*  
     * 渲染聊天信息 
     */
    function renderChatContent(data){

        var html = '';

        for(var i = 0; i< data.length; i++){

            html += "<div class='chat-content-container'>"+

            "<div class='chat-detail clearFix'>"+
                "<div class='chat-detail-left'>"+
                    `<img src='${data[i].avatar}' class='chat-avatar'/>`+
                    `<div class='chat-name'>${data[i].name}</div>`+
                    
                "</div>"+
                
                `<div class='chat-detail-right'>
                    ${data[i].content}
                </div>`+
            "</div>" +
            `<div class='chat-time'>${moment(data[i].createdAt).locale('zh_cn').format('YYYYMMMMDo  aH:MM:SS')}</div>`+
            '</div>'
            
        }
        // 先清空聊天记录
        $('.chat-content').html('');

        // 再添加聊天记录
        $('.chat-content').append(html);
        
    }

    /* 
     * 滚动到最底部 
     */
    function scrollToBottom(){

        // let ele = document.getElementsByClassName('chat-content')[0];
        // ele.scrollTop = ele.scrollHeight
        // 以上相等
        $('.chat-content').scrollTop($('.chat-content').prop('scrollHeight'));
    }


    /* 
     * 为input添加enter事件 
     */
    function addClickListenerOnInput(){

        $('.chat-input').keypress(function (e) {
            var key = e.which;

            // 13 代表 enter 按键
            if(key == 13){

                sendMessage();

            }
        });  
    }

    /* 
     * 发送信息
     */
    function sendMessage(){

        // 如果input里没有东西，则不需要发送
        if(!$('.chat-input').val()){
            return;
        }

        // 标记是自己发送的，以备后面聊天框滑动到最后
        isSelf = true;

        $.ajax({
            type:'POST',
            url:'/updateContent',
            data:{
                content:$('.chat-input').val(),
                name:$('.chat-header').text().trim()
            },
            success: function(result){

                if(Array.isArray(result)){

                    renderChatContent(result)
                    
                    if(isSelf){
                        scrollToBottom();
                        isSelf = false;
                    }
                    
                }
                // 成功后，清空input
                $('.chat-input').val('');
            },
            error: function(error){

                console.log(error);
            }
        })
    }

})