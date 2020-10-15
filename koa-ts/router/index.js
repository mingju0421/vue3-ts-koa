"use strict";
const Router = require('koa-router');
const router = new Router();
router.get('/', (ctx) => ctx.body = 'router');
router.get('/slider/list', (ctx) => {
    ctx.body = [
        { url: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gjoz3pkqo8j30et08cdg2.jpg' },
        { url: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gjoz46pxuaj30dw08p0th.jpg' },
        { url: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gjoz4kuy7rj30dw08paae.jpg' }
    ];
    return ctx;
});
router.get('/lesson/list', (ctx) => {
    let item = { 'title': '1.React全栈架构', video: 'http://www.bilibili.com/video/av24519888?from=search&seid=7429755154545811971', poster: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gjoz4kuy7rj30dw08paae.jpg', price: 100, category: 1 };
    let { limit } = ctx.query;
    let list = [];
    for (let i = 0; i < limit; i++) {
        list.push(item);
    }
    ctx.body = {
        list
    };
    return ctx;
});
module.exports = router;
