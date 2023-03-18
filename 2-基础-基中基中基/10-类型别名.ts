export {}

// 类型别名也可以用来自定义类型
// 可以这么玩
type Aaa = string|number;
let aaa:Aaa = 'haha';
aaa = 1234;
// 也可以这么玩
type Bbb = {
  a:string,
  b:number
}
let bbb:Bbb = {
  a: '123',
  b: 123
}

// 类型别名不支持同名，但是接口支持