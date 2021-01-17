export default function createElm(vnode) {
   const domNode = document.createElement(vnode.sel);
   if(vnode.text !== '' && vnode.children === undefined || vnode.children.length === 0) {
     // 相当于上树
     domNode.innerText = vnode.text;
     vnode.elm = domNode;
   } else if(Array.isArray(vnode.children) && vnode.children.length > 0) {
     // 递归创建子节点 递归结束条件是遇见文本节点
     for(let i = 0; i < vnode.children.length; i++) {
        let ch = vnode.children[i];
        createElm(ch);
     }
   }

   // elm是一个纯dom
   return vnode.elm;
}