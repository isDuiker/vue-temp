/**
 * 防抖
 * @param {Function} func 需要防抖的函数
 * @param {number} delay 延迟时间（ms）
 * @param {boolean} immediate 是否立即执行（true: 先执行再防抖，false: 先防抖再执行）
 * @returns {Function} 经过防抖处理的函数
 */
export const debounce = (func, delay = 300, immediate = false) => {
  let timer = null;
  let isInvoked = false;
  return function (...args) {
    // 清除之前的定时器
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    // 立即执行模式
    if (immediate && !isInvoked) {
      func.apply(this, args);
      isInvoked = true;

      // 设置一个定时器，在延迟时间后将isInvoked重置
      timer = setTimeout(() => {
        isInvoked = false;
        timer = null;
      }, delay);
    } else {
      // 延迟执行模式
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
        isInvoked = false;
      }, delay);
    }
  };
};

/**
 * 节流
 * @param {Function} func 需要节流的函数
 * @param {number} delay 延迟时间（ms）
 * @returns {Function} 经过节流处理的函数
 */
export const throttle = (func, delay = 300) => {
  let lastTime = 0; // 上次触发的时间
  return function (...args) {
    const now = Date.now();
    // 如果距离上次执行的时间超过了延迟时间
    if (now - lastTime >= delay) {
      lastTime = now;
      func.apply(this, args); //执行函数
    }
  };
};
