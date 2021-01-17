import updateChildren from './updateChildren';

export default function patchVnode(oldVnode, newVnode) {
   // 是否是同一个vnode
   if(oldVnode === newVnode) {
    return;
  }
  const elm = oldVnode.elm;
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
      updateChildren(elm, oldVnode.children, newVnode.children);
    } else {
      // 老的节点是文字 没有children, 新节点有children
      oldVnode.elm.innerText = '';
      for(let i = 0; i < newVnode.children.length; i++) {
        const chDom = createElm(newVnode.children[i]);
        oldVnode.elm.appendChild(chDom);
      }
    }
  }
}