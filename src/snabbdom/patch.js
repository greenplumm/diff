import vnode from './vnode';
import patch from './patch';
import createElm from './createElm';
export default function patch(oldVnode, newVnode) {
  // 虚拟节点上树
  // 如果oldVnode 不是虚拟dom
  if(!oldVnode.sel) {
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);
  }
  if(oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key) {
    // 同一个节点 精细化比较
  } else {
    // 否则粗暴的删除
    // 根据虚拟
    const newVNodeElm = createElm(newVnode);
    // 插入老节点之前
    if(oldVnode.elm.parentNode != undefined) {
      oldVnode.elm.parentNode.insertBefore(newVNodeElm, oldVnode.elm);
    }
    
  }
  return oldVnode;
}