export const debounce = (func, delay) => {
  let timer;

  return (arg) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arg);
    }, delay);
  };
};
