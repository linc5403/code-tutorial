const { getUserChatContent,insertUserChatContent } = require('../services/chat');
const user = require('../db/user');

/* 随机分配的头像 */
let avatars = [
  'http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/chat/avatar1.png',
  'http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/chat/avatar2.png',
  'http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/chat/avatar3.png',
  'http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/chat/avatar4.png',
  'http://by-image.oss-cn-shanghai.aliyuncs.com/frontend/chat/avatar5.png'
];

function getRandomAvatar(){

  // 随机index
  let index = Math.floor((Math.random() * (avatars.length)));

  return avatars[index];
}

module.exports =  (router) => {


  router.get('/', async (ctx, next) => {
    // ctx.body = 'Hello World'
    ctx.state = {
      title: '聊天'
    }
    await ctx.render('index', ctx.state)
  })


  /*  
   * 设置cookies
   */
  router.post('/goChat', async (ctx, next) => {
    
    // 获取 用户名
    const { username } = ctx.request.body;

    const avatar = getRandomAvatar();

    ctx.cookies.set('user', JSON.stringify({
      username,
      avatar
    })); 

    ctx.response.body =  { ok : 1 };
  })
  

  /*  
   * chat 主页面
   */
  router.get('/chat', async (ctx, next) => {
    
    // 获取 用户名
    const { username,avatar } = JSON.parse(ctx.cookies.get('user'));

    const content = await getUserChatContent();

    ctx.state = {
      title: '聊天',
      username,
      content,
      avatar
    };

    await ctx.render('chat', ctx.state);
  })


  router.get('/chatContent', async (ctx, next) => {
    
    // 获取1天内的聊天记录
    const result = await getUserChatContent();

    ctx.response.body = result;
    
  })


  router.post('/updateContent', async (ctx, next) => {
    
    const data = ctx.request.body;

    const { avatar } = JSON.parse(ctx.cookies.get('user'));

    data.avatar = avatar;

    // 添加聊天
    await insertUserChatContent(data);

    const result = await getUserChatContent();

    ctx.response.body = result;
    
  })

}
