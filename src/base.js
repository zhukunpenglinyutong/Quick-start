/**
 * 获取指定的 querystring 中指定 name 的 value
 * @param {String} name
 * @param {String} querystring
 * @return {String|undefined}
 *
 * query('hello', '?hello=js') 结果是 js
 *
 */
const query = (name, querystring) => {
  let reg = new RegExp("(?:\\?|&)" + name + "=(.*?)(?:&|$)")
  let ret = reg.exec(querystring) || []
  return ret[1]
}

/**
 * 序列化对象，就是把对象转成 url 字符串
 * @param {Obj} data
 * @return {String}
 *
 * serialize({hello: 'js', hi: 'test'}) 结果是 'hello=js&hi=test'
 */
const serialize = (data) => {
  dataKeys = Object.keys(data)
  dataValues = Object.values(data)
  let len = dataKeys.length
  let url = ''
  for (let i = 0 ; i < len; i++) {
    (i === len -1) ? url += `${dataKeys[i]}=${dataValues[i]}` : url += `${dataKeys[i]}=${dataValues[i]}&`
  }
  return url
}

/**
 * 根据选择器查找 DOM
 * 就是模拟 $() ，当然，这里返回元素的 DOM 对象即可
 * @param {String} selector
 * @return {DOM|Null}
 */
const $ = (selector) => {
  return document.querySelector(selector);
}


/**
 * 删除 DOM 节点
 * @param {DOM} node
 * @return {DOM}
 */
const removeNode = (node) => {
  // 知识点一：node.parentNode 表示某一个节点的父节点
  node.parentNode.removeChild(node);
}

/**
 * 在 target 节点之后插入 node 节点
 * 类似 $().insertAfter()
 * @param {DOM} node
 * @param {DOM} target
 */
const insertAfter = (node, target) => {
  // 获取 目标节点的下一位Element节点, 在下一位之前插入 node 节点
  if (target.nextElementSibling) { // 有下一级节点
    target.parentNode.insertBefore(node, target.nextElementSibling)
  } else { // 没有下一级节点
    target.parentNode.appendChild(node)
  }
}

/**
 * 添加类名
 * @param {DOM} node
 * @param {String|Array} className
 */
const addClass = (node, className) => {
  node.classList.add(className)
}


/**
 * 移除类名
 * @param {DOM} node
 * @param {String|Array} className
 */
const removeClass = (node, className) => {
  node.classList.remove(className);
}

/**
 * 获取绝对路径
 * @param {String} url
 * @return {String}
 *
 * getAbsoluteUrl('/jerojiang') => 'http://imweb.io/jerojiang'
 * 在当前页面获取绝对路径，这里要创建 A 元素，测试用例看你们的了
 */
const getAbsoluteUrl = (url) => {
  return `http://imweb.io${url}`
}

/**
 * 防抖动
 * 防抖动函数了啦，有做个这个习题，不清楚回去复习
 */
const debounce = (callback, time) => {
  // 持久化一个定时器 timer
  let timer = null;
  // 闭包函数可以访问 timer
  return function() {
    // 通过 'this' 和 'arguments'
    // 获得函数的作用域和参数
    let context = this;
    let args = arguments;
    // 如果事件被触发，清除 timer 并重新开始计时
    clearTimeout(timer);
    timer = setTimeout(function() {
      callback.apply(context, args);
    }, time);
  }
}

/**
 *  根据索引移出数组的某一项
 * @param {Number} index
 * @param {Array} arr
 * @return {Array}
 *
 * removeItemByIndex(1, [1,2,3]) => [1, 3]
 */
const removeItemByIndex = (index, arr) => {
    if(index <= (arr.length - 1)) {
      for(var i = index; i < arr.length; i++) {
        arr[i] = arr[i+1]
      }
    }
    arr.length = arr.length - 1
    return arr;
}

// 判断一个对象是否是空对象
const isNotObj = (obj) => {
  return (JSON.stringify(obj) == '{}')
}

module.exports = {
  query,
  serialize,
  $,
  removeNode,
  insertAfter,
  addClass,
  removeClass,
  getAbsoluteUrl,
  debounce,
  removeItemByIndex,
  isNotObj
}