export {}

// interface, 用来自定义类型

// 对象接口
interface ObjItf{
  aaa: number;
  bbb: string;
}
let fff:ObjItf = {
  aaa: 111,
  bbb: 'df',
}

// 数组接口
interface ArrInf{
  [index:number]: string|number;
}
let ggg:ArrInf = [1,3,4,'dfa'];

// 函数接口
interface FuncInf{
  (p:number,q:number):number
}
let hhh:FuncInf = (p:number,q:number) => p+q;
hhh(1,1);