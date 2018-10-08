/**
 * 新增图书
 * 1. 获取豆瓣信息
 * 2. 入库
 * https://api.douban.com/v2/book/isbn/xxx
 */
const https = require('https');
const { mysql } = require('../qcloud');
module.exports = async (ctx) => {
  const {isbn, openId} = ctx.request.body;
  if (isbn && openId) {
    const findRes = await mysql('books').select().where('isbn',isbn)
    if (findRes.length) {
      ctx.state = {
        code: -1,
        data: {
          msg: "图书已存在"
        }
      };
      return;
    }
    let url = 'https://api.douban.com/v2/book/isbn/' + isbn;
    // 一定记得加 await啊  我操
    const bookInfo = await getJSON(url);
    const rate = bookInfo.rating.average;
    const { title, image, alt, publisher, summary ,price } = bookInfo;
    const tags = bookInfo.tags.map(v => {
      return `${v.title} ${v.count}`;
    }).join(',');
    const author = bookInfo.author.join(",");
    try {
      await mysql('books').insert({
        isbn, openId, rate, author, title, image, alt, publisher, summary ,price, tags
      })
      ctx.state = {
        code: 0,
        data: {
          title,
          msg: 'success'
        }
      }
    } catch (e) {
      ctx.state = {
        code: -1,
        data: {
          msg: '新增失败'
        }
      }
    }
  }
};

function getJSON(url){
  return new Promise((reslove, reject)=>{
    https.get(url,res=>{
      let urlData = ''
      res.on('data', data=>{
        urlData += data
      })
      res.on('end', data=>{
        const bookInfo = JSON.parse(urlData);
        if(bookInfo){
          reslove(bookInfo);
        }
        reject(bookInfo);
      })
    })
  })
}
