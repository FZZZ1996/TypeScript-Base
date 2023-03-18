export {}
// 感觉这部分应该放在交叉类型后面

// & 优先级高于 |
let obj:{name:string} & {age:number} | {name:number} & {age:string};

obj = {
  name:"zhangsan",
  age:17
}

obj = {
  name:2,
  age:"17"
}