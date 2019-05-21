const {isNotObj, query, serialize, $, removeNode, insertAfter, addClass, removeClass, getAbsoluteUrl, debounce, removeItemByIndex} = require('../src/base.js')

// part 10
describe('Jest 测试', () => {

  test('part 1 获取指定的 querystring 中指定 name 的 value', () => {
    expect(query('hello', '?hello=js')).toBe('js')
    expect(query('hello', '?hello=')).toBe('')
    expect(query('hello1', '?hello=js')).toBeUndefined()
  })

  test('part 2 序列化对象，就是把对象转成 url 字符串', () => {
    expect(serialize({hello: 'js', hi: 'test'})).toBe('hello=js&hi=test')
    expect(serialize({hello: 'js', hi: 'test', name: '朱昆鹏'})).toBe('hello=js&hi=test&name=朱昆鹏')
  })

  test('part 3 根据选择器查找 DOM', () => {
    document.body.innerHTML =  `
      <div>
        <span id="username">span</span>
        <button class="button">button</button>
      </div>
    `
    expect($('#username').innerHTML).toBe('span')
    expect($('.button').innerHTML).toBe('button')
    expect($('#username').id).toBe('username')
    expect($('.button').className).toBe('button')
  })

  test('part 4 删除 DOM 节点', () => {
    document.body.innerHTML =  `
      <div>
        <span id="username">span</span>
        <button class="button">button</button>
      </div>
    `
    removeNode($('#username'))
    expect($('#username')).toBeNull()
    expect($('.button')).not.toBeNull()

  })

  test('part 5 在 target 节点之后插入 node 节点', () => {
    document.body.innerHTML =  `
      <div>
        <span id="username">span</span>
        <button class="button">button</button>
      </div>
    `
    let div1 = document.createElement('div')
    div1.className = 'div1'
    div1.innerHTML = 'Hello World1'
    let div2 = document.createElement('div')
    div2.className = 'div2'
    div2.innerHTML = 'Hello World1'

    insertAfter(div1, $('#username'))
    insertAfter(div2, $('.button'))
    
    expect($('.div1').className).toBe('div1')
    expect($('.div2').className).toBe('div2')
    expect($('.div1').nextElementSibling.className).toBe('button')
    expect($('.div2').nextElementSibling).toBeNull()
  })

  test('part 6 添加类名', () => {
    document.body.innerHTML =  `
      <div>
        <span id="username">span</span>
        <button class="button">button</button>
      </div>
    `
    addClass($('div'), 'jest-div')
    expect($('.jest-div')).not.toBeNull()
    expect($('.jest-div').className).toBe('jest-div')
  })

  test('part 7 移除类名', () => {
    document.body.innerHTML =  `
      <div>
        <span class="username test-username">span</span>
        <button class="button test-button">button</button>
      </div>
    `
    removeClass($('button'), 'test-button')
    expect($('button').className).toBe('button')
    expect($('span').className).toBe('username test-username')
  })

  test('part 8 获取绝对路径', () => {
    expect(getAbsoluteUrl('/jerojiang')).toBe('http://imweb.io/jerojiang')
    expect(getAbsoluteUrl('')).toBe('http://imweb.io')
    expect(getAbsoluteUrl('/')).toBe('http://imweb.io/')
  })

  test('part 9 防抖动', () => {
    // debounce()
    // expect()
  })

  test('part 10 根据索引移出数组的某一项', () => {
    expect(removeItemByIndex(0, [1,2,3])).toStrictEqual([2,3])
    expect(removeItemByIndex(1, [1,2,3])).toStrictEqual([1,3])
    expect(removeItemByIndex(2, [1,2,3])).toStrictEqual([1,2])
  })

  test('part 11 判断对象是否为空对象', () => {
    // isNotObj
    expect(isNotObj({})).toBeTruthy()
    expect(isNotObj({"name":"1"})).toBeFalsy()
  })

})
