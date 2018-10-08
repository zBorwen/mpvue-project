// 工具函数
import config from './config';

export function get(url, data) {
  return request(url, 'GET', data);
}

export function post(url, data) {
  return request(url, 'POST', data);
}

function request(url, method, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      data: data,
      method: method,
      url: config.host + url,
      success: function(res) {
        if (res.data.code === 0) {
          resolve(res.data);
        } else {
          showModal('失败', `${res.data.data.msg}`);
          reject(res.data);
        }
      }
    });
  });
}

export function showModal(title, content) {
  wx.showModal({
    title: title,
    content: content,
    showCancel: false
  })
}

export function showSuccess(text) {
  wx.showToast({
    title: text,
    icon: 'success'
  })
}

export function chunk(array, size) {
  if(!Array.isArray(array)){
    return [];
  }
  size = size || 1;
  let index = 0,
      resIndex = 0,
      length = array === null ? 0 : array.length,
      resLen = Math.ceil(length / ( size|0)),
      result = Array(resLen);
  while(index < resLen){
    result[index++] = array.slice(resIndex, resIndex+=size);
  }
  return result;
}
