"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 默认参数
function add(a, b = 3) {
    return a + b;
}
add(1, 1);
add(2);
// 缺省参数
function fun(a, b) {
    return 1;
}
add(1, 1);
add(2);
// 剩余参数
function fun1(a, b, ...array) {
}
fun1(1, 2, 3, 4, 5);
