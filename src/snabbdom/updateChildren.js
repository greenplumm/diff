import { sameVnode } from './utils';

export default function updateChildren(parentElm, oldCh, newCh) {
   
  let oldStartIdx = 0 // 旧前
  let newStartIdx = 0 // 新前
  let oldEndIdx = oldCh.length - 1 // 旧后 
  let newEndIdx = newCh.length - 1 // 新后
  
  let oldStartVnode = oldCh[0]  //
  let oldEndVnode = oldCh[oldEndIdx] 
  let newStartVnode = newCh[0]
  let newEndVnode = newCh[newEndIdx]

  // 循环终止条件
  while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
     
    // 旧前 和 新前比较 是否相同
    if(sameVnode(oldStartVnode, newStartVnode)) {
     
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if(sameVnode(oldEndVnode, newEndVnode)) {

      oldEndVnode = oldCh[--oldEndIdx]
      newEndVnode = newCh[--newEndIdx]

    } else if (sameVnode(oldStartVnode, newEndVnode)) {

      oldStartVnode = oldCh[++oldStartIdx]
      newEndVnode = newCh[--newEndIdx]

    } else if (sameVnode(oldEndVnode, newStartVnode)) {

      oldEndVnode = oldCh[--oldEndIdx]
      newStartVnode = newCh[++newStartIdx]

    } else {
      // 没有找到 利用循环来查找

    }
  }

}