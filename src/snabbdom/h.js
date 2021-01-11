import vnode from './vnode';

export default function (sel, data, c) {
  if (arguments.length !== 3) {
    throw new Error('sorry, 参数必须是三个');
  }
  if (typeof c === 'string' || typeof c === 'number') {
    return vnode(sel, data, undefined, c, undefined);
  } else if (Array.isArray(c)) {
    // 多个嵌套
    const children = [];
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel'))) {
        throw new Error('第三个参数有不是h函数的格式！');
      }
      children.push(c[i]);
    }
    return vnode(sel, data, children, undefined, undefined);
  } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
    // 这个说明是嵌套的形式
    const children = [c];
    return vnode(sel, data, children, undefined, undefined);
  } else {
    throw new Error('传入的参数有误！');
  }
}
