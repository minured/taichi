let demo = document.querySelector(".demo1");
let str = "你好，我是一名前端新人";
console.log(str.length)

let n = 0;

//高手一般用setTimeout配合递归来是实现setInterval，因为可以添加条件随时停止
let step = () => {
    
    
    if (n >= str.length) {return}
    n += 1;
    console.log(n)
    demo.innerHTML = str.substring(0, n)
    console.log("完成打印")
    
    setTimeout(() => {
        step()
    }, 500)
}

step()



