export {}

// 继承 + 缺省 + 只读
interface A {
  readonly aaa:number
}

interface B {
  bbb?:string
}

interface C extends A,B {
  ccc: boolean
}

let haha:C = {
  aaa: 1,
  // bbb: 'ooo',
  ccc: true,
}
// haha.aaa = 2; 会报错

// 同名
// 接口可以同名  特点是，合并了(都具有)所有属性类型
interface AItf{
  a:number
}
interface AItf{
  b:string
}
let obj:AItf={
  a:1,
  b:"b"
}