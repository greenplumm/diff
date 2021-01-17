import h from './snabbdom/h.js';
import patch from './snabbdom/patch.js';

const myVnode1 = h('ul', {}, 'xxxx');
console.log(myVnode1)
// 得到盒子和按钮
const container = document.getElementById('container');
const btn = document.getElementById('btn');

// 第一次上树
patch(container, myVnode1);

// 新节点
// const myVnode2 = h('ul', {}, [
//     h('li', { key: 'Q' }, 'Q'),
//     h('li', { key: 'T' }, 'T'),
//     h('li', { key: 'A' }, 'A'),
//     h('li', { key: 'B' }, 'B'),
//     h('li', { key: 'Z' }, 'Z'),
//     h('li', { key: 'C' }, 'C'),
//     h('li', { key: 'D' }, 'D'),
//     h('li', { key: 'E' }, 'E')
// ]);
const myVnode2 = h('ul', {}, [
    h('li', { key: 'Q' }, 'Q'),
    h('li', { key: 'T' }, 'T'),
    h('li', { key: 'A' }, 'A'), 
]);
btn.onclick = function () {
    patch(myVnode1, myVnode2);
}