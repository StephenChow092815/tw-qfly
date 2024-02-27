const fs = require('fs')

var path = require("path");

// 发推
function getTweet() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, './soul.txt'), 'utf-8', (err, result) => {
            if (result) {
                var lis = result.split(/\n/).map(i => i.trim().replace('"', '').replace('"', ''))
                var random = RandomNumBoth(0, lis.length - 1)
                resolve(`https://twitter.com/intent/tweet?text=${lis[random]}`)
            } else {
                reject()
            }
        });
    })
}
// 转推
function retweet(id) {
    if (id) {
        console.log(`https://twitter.com/intent/retweet?tweet_id=${id}`);
    } else {

    }
}
// 关注
function follow(name) {
    if (name) {
        console.log(`https://twitter.com/intent/follow?screen_name=${name}`);
    } else {

    }
}
// 随机数
function RandomNumBoth(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range); //四舍五入
    return num;
}
module.exports = {
    getTweet,
    retweet,
    follow
}