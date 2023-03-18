export {}

// 基本写法
function add (a:number, b:number):number {
  return a + b
}

// 下面的你就未必熟悉

// 通过接口定义函数
// 忘记了就回去看

// 通过类型别名定义函数
type Fun = (p:number)=>void;
let fn:Fun = (p:number):void=> {};
fn(1);