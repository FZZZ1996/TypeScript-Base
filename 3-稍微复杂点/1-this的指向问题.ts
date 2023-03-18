// // 在ts的书写中，需要指明this指向。 在函数的第一个形参的位置注明
// // ts提供了Window类型,window就是这个Window类型的对象
// // Window类型中没有myname这个属性，所以需要自己扩展这个属性
// interface Window {
//   myName: string;
// }
// function a (this:Window,name:string) {
//   this.myName = name;
// }

// window.a('fff');



// 上面是一开始的写法，然后，我要开始加export {}了，这里就不是全局了，变化会很大
export {}

function a (this:Window,name:string) {
  this.myName = name;
}
// window.a=a; 这一行写不写感觉都行
window.a('fff');