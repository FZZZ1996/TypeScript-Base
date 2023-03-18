"use strict";
// // 在ts的书写中，需要指明this指向。 在函数的第一个形参的位置注明
// // ts提供了Window类型,window就是这个Window类型的对象
// // Window类型中没有myname这个属性，所以需要自己扩展这个属性
// interface Window {
//   myName: string;
// }
// function a (this:Window,name:string) {
//   this.myName = name;
// }
Object.defineProperty(exports, "__esModule", { value: true });
function a(name) {
    this.myName = name;
}
// window.a=a; 这一行写不写感觉都行
window.a('fff');
