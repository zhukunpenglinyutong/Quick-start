// 排序一个数组中的 时间，并输出排序好的数组
let data = [
  {
    id: 1,
    time: '2019-01-14 21:10:29'
  },
  {
    id: 2,
    time: '2019-05-14 16:10:29'
  },
  {
    id: 3,
    time: '2019-05-12 11:10:29'
  }
]
function time(data) {
  return data.sort(function(a, b) {
    return b.time> a.time ? 1 : -1;
  });
}
console.log(time(data))
/**
 * 结果 
  [ { id: 2, time: '2019-05-14 16:10:29' },
  { id: 3, time: '2019-05-12 11:10:29' },
  { id: 1, time: '2019-01-14 21:10:29' } ]
 */
