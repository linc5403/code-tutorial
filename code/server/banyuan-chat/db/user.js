const moment = require('moment');
const { connection } = require('./connection');


/* 查找user表信息 */
async function getUserInfo(){

    return new Promise((resolve,reject)=>{

        connection.query(`select * from user where TO_DAYS(NOW()) - TO_DAYS(createdAt) <= 1 order by createdAt`,(error, results)=>{

            if(error){
                reject(error);
            }else{

                resolve(results)
            }
        });
    })
}

/* 更新user表信息 */
async function insertUserInfo(data){
    return new Promise((resolve,reject)=>{

        const { name, content,avatar } = data;

        connection.query('INSERT INTO user SET ?', {name,content,avatar,createdAt:new Date()}, function (error, results) {
            if (error) {
               
                reject(error)
            };

            resolve(results);
          });
    })
}  


module.exports = {
    getUserInfo,
    insertUserInfo
}