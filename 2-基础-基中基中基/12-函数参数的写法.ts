export {} 

// 默认参数
function add(a:number, b:number=3):number {
  return a+b;
}
add(1,1);
add(2);

// 缺省参数
function fun(a:number, b?:number):number {
  return 1;
}
add(1,1);
add(2);

// 剩余参数
function fun1(a:number,b:number,...array:number[]) {

}
fun1(1,2,3,4,5);