let demo = document.querySelector(".demo1");
let str = "你好，我是一名前端新人";

let n = 1;

//高手一般用setTimeout配合递归来是实现setInterval，因为可以添加条件随时停止

setInterval(() => {
    demo.innerHTML = str.substring(0, n);
    n += 1;

}, 500)


