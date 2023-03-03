

/*
    等价
    let myVariable = '李雷';

    有五种变量
    String:字符串,单双均可，必须成对
    Number：数字，无需引号
    Boolean:布尔值（真/假），无需引号
    Array：数组，存储多个值
    Object：对象，js里一切皆对象

    运算符
    加  +
    减、乘、除  -, * , /
    赋值运算符  =
    等于    ===
    不等于  !==
    取非    !

    条件语句
    if……else……

    函数（Function）
    document.querySelector 和 alert 是浏览器内置的函数，随时可用。
    alert() 函数在浏览器窗口内弹出一个警告框，
    还应为其提供一个字符串参数，
    以告诉它警告框里要显示的内容。

    定义函数需要注意作用域

    事件
    效果：用户点击网页，弹窗提示“别戳我，我怕疼”。
    document.querySelector("html").addEventListener
    ("click", function () {
        alert("别戳我，我怕疼。");
    });
    将事件与元素绑定有许多方法。在这里选用了 <html> 元素，
    然后调用了它的 addEventListener() 方法，
    将事件名称（'click'）以及其回调函数（当事件发生时，调用该函数）
    传入该函数中作为调用参数。

    addEventListener() 的函数被称为匿名函数，因为它没有名字。
    匿名函数还有另一种我们称之为箭头函数的写法，
    箭头函数使用 () => 代替 function ()：
    document.querySelector('html').addEventListener
    ('click', () => {
        alert('别戳我，我怕疼。');
    });
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/MyImage.jpg') {
      myImage.setAttribute('src', 'images/MyImage2.jpg');
    } else {
      myImage.setAttribute('src', 'images/MyImage.jpg');
    }
}
/*
    这里首先把 <img> 元素的引用存放在 myImage 变量里。
    然后将这个变量的 onclick 事件与一个匿名函数绑定。
    每次点击图片时：

        1.获取这张图片的 src 属性值。
        2.用一个条件句来判断 src 的值是否等于原始图像的路径：
            如果是，则将 src 的值改为第二张图片的路径，并在 <img> 内加载该图片。
            如果不是（意味着它已经修改过）, 则把 src 的值重新设置为原始图片的路径，即原始状态。
 */

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字。');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }    
}

if(!localStorage.getItem('name')){
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' +
    storedName;
}

myButton.onclick = function() {
    setUserName();
}
/*
    声明一个名为myHeading的变量
    使用document.querySelector函数调用h1属性值
    并传给变量myHeading
    修改变量myHeading属性值

    alert() 函数在浏览器窗口内弹出一个警告框，
    还应为其提供一个字符串参数，
    以告诉它警告框里要显示的内容。

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

alert('欢迎来到 莫凡 的私人博客');

*/
