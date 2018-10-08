/**
 * 查询图书所有图书列表
 */
const { mysql } = require('../qcloud');

module.exports = async (ctx) =>{
  const {page} = ctx.request.query;
  const size = 10;
  const books = await mysql('books')
    .select('books.*', 'csessioninfo.user_info')
    .join('csessioninfo', 'books.openid', 'csessioninfo.open_id')
    .limit(10)
    .offset(Number(page) * size)
    .orderBy('books.id', 'desc');
  ctx.state = {
    code: 0,
    data: {
      list: books.map(item => {
        const userInfo = JSON.parse(item.user_info);
        return Object.assign({}, item, {
          user_info: userInfo.nickName
        })
      })
    }
  }
}
