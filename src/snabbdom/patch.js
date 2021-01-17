import vnode from './vnode';
import createElm from './createElm';
import patchVnode from './patchVone';

export default function patch(oldVnode, newVnode) {
  // 虚拟节点上树
  // 如果oldVnode 不是虚拟dom
  if(!oldVnode.sel) {
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);
  }
  if(oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key) {
    // 同一个节点 精细化比较
    patchVnode(oldVnode, newVnode);
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

