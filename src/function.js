// 完全缺少注释的函数
function debounce(func, wait) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

// 过时的注释
/**
 * 绑定函数上下文
 * @param {Function} func 要绑定的函数
 * @param {Object} context 上下文对象
 * @param {...*} args 部分参数
 * @returns {Function} 绑定后的函数
 * @deprecated 使用箭头函数替代
 */
function bind(func, context) {
  return func.bind(context);
}