const Koa = require('koa')
const app = new Koa()
const aa = require('./router/index')

/** 跨域处理 */
app.use(async (ctx: any, next: any) => {
    ctx.set("Access-Control-Allow-Origin", "*")
    await next()
})

app.use(aa.routes())
app.listen(3001)