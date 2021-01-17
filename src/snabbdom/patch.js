import vnode from './vnode';
import createElm from './createElm';
export default function patch(oldVnode, newVnode) {
  // 虚拟节点上树
  // 如果oldVnode 不是虚拟dom
  if(!oldVnode.sel) {
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);
  }
  if(oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key) {
    // 同一个节点 精细化比较

    // 是否是同一个vnode
    if(oldVnode === newVnode) {
      return;
    }
    // 判断新旧节点是否有text属性
    if(oldVnode.text !== undefined && (!newVnode.children)) {
      // 新的vnode有text属性 并且两个text不一样
      if(oldVnode.text !== newVnode.text) {
        oldVnode.elm.innerText = newVnode.text;
      }
    } else {
      // 新的vnode 没有text属性 有children
      if(oldVnode.children !== undefined && oldVnode.children.length) {
        // 新老节点都有children是最复杂的情况
      } else {
        // 老的节点是文字 没有children
        oldVnode.elm.innerText = '';
        for(let i = 0; i < newVnode.children.length; i++) {
          const chDom = createElm(newVnode.children[i]);
          oldVnode.elm.appendChild(chDom);
        }
      }
    }
  } else {
    // 否则粗暴的删除
    // 根据虚拟节点递归生成
    const newVNodeElm = createElm(newVnode);
    // 插入老节点之前
    if(oldVnode.elm.parentNode != undefined && newVNodeElm) {
      oldVnode.elm.parentNode.insertBefore(newVNodeElm, oldVnode.elm);
    }
    
  }
  return oldVnode;
}