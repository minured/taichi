let demo = document.querySelector(".demo1");
let str = `
你好，我是一名前端新人！
下面是效果的实现代码：
let demo = document.querySelector(".demo1");
let str = "你好，我是一名前端新人";
let n = 0;
let step = () => {
    if (n < str.length) {
        n += 1;
        demo.innerHTML = str.substring(0, n)
        setTimeout(() => {
            step()
        }, 500)
    }
}
step()`;

str = str.replace(/\n/g, "<br>");
console.log(str.length)

let n = 0;

//高手一般用setTimeout配合递归来是实现setInterval，因为可以添加条件随时停止
let step = () => {
    
    if (n < str.length) {
        n += 1;
        console.log(n)
        demo.innerHTML = str.substring(0, n)
        setTimeout(() => {
            step()
        }, 30)
    }

}

step()



