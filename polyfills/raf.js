/* eslint no-multi-assign: off */

const raf = (global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
});

export default raf;
