const moment = require('moment');
const _ = require('lodash');
const { getUserInfo, insertUserInfo } = require('../db/user');

/* 获取用户某个时间段的聊天列表 */
async function getUserChatContent(){

    /* 获取用户信息 */
    try {
        
        const result =  await getUserInfo();

        return result;
    
    } catch (error) {
       throw error;
    }

}


async function insertUserChatContent(data){

    const result =  await insertUserInfo(data);

}



module.exports = {
    getUserChatContent,
    insertUserChatContent
}