let html = document.querySelector(".html");
let style = document.querySelector(".style")
let draw = document.querySelector(".draw")


let str = `/*你好，我是一名前端新人。
下面开始画一个太极：*/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
}
.html {
    word-break: break-all; 
    padding: 10px;
}

/*无极生太极*/

.draw {
    border: 1px solid black;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border: none;
    background: linear-gradient(90deg, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%);
}

/*太极生两仪*/

.draw::before, .draw::after {
    content: "";
    display: block;
    width: 150px;
    height: 150px;
    border: 1px solid black;
    position: absolute; 
    left: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    border: none;
}
.draw::before {
    top: 0;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
.draw::after {
    bottom: 0;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);   
}
/*两仪生四象，四象生八卦*/


.draw {
    transition: 1.5s all;
    transform: translateX(-50%) rotate(450deg);   
}
/* 巴啦啦能量---木拉拉---开！*/

`



console.log(`字符长度：${str.length}`)
let str2 = ""

let n = 0;



//高手一般用setTimeout配合递归来是实现setInterval，因为可以添加条件随时停止
let step = () => {

    //判断长度与更改字符
    if(n < str.length) {

        //当太极开始旋转
        if(n === str.length - 1){
            setTimeout(() => {
                console.log("添加类")
                draw.classList += " rotateInfinite animationStart"
            }, 1500)   
        }

        //更改字符
        if (str[n] === "\n") {
            str2 += "<br>"
        } else if(str[n] === " "){
            str2 += "&nbsp"
        } else {
            str2 += str[n]
        }

        //替换页面字符
        html.innerHTML = str2
        style.innerHTML = str.substring(0, n+1)
       
        n += 1
        window.scrollBy(0, 9999)
        html.scrollBy(0, 9999 )
        
        //递归
        setTimeout(() => {
            step()
        }, 20)
    }

}
step()




