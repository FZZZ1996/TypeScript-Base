"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 感觉这部分应该放在交叉类型后面
// & 优先级高于 |
let obj;
obj = {
    name: "zhangsan",
    age: 17
};
obj = {
    name: 2,
    age: "17"
};
