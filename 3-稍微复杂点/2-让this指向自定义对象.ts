export{}
type ObjType = {myName:string,a:(m:string)=>void}


let obj:ObjType = {
  myName:"zhangsan",
  a:()=>{}
}

// 定义函数的时候，this的类型，必须和调用的时候的类型一致
// this:Window|ObjType  可以给多种类型所对应的对象，让this去指向
function a(this:Window|ObjType,name:string){
  this.myName=name
}

obj.a = a
obj.a("xxx")

window.a("")