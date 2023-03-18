export {}
// object Object {} 不要瞎写
// object更常用

// 先看这个
let obj:object = {a:1};
let arr:object = [1];

// 再看下面这两个
let obj1:Object = {b:1};
let arr1:Object = [2,3];
let num1:Object = 2;
let str1:Object = "2";
let bool1:Object = true;
//  Object 包含基础数据类型

let obj2:{} = {b:1};
let arr2:{} = [2,3];
let num2:{} = 2;
let str2:{} = "2";
let bool2:{} = true;
// {} 等效于Object  也包含基础数据类型