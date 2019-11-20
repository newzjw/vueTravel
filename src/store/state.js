let defaultCity = '上海'
// 使用localStorage的时候最好使用try...catch异常机制
// 因为如果用户关闭了本地存储，或者使用隐身模式，使用localStorage可能导致浏览器抛出异常，影响整段代码的运行
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
