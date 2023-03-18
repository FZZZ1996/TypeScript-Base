export {}

let a:number|string = 1;
a = 'aa';

let obj:{a:1}|{b:'a'};
obj = {a:1};
obj = {a:1,b:'a'};
// 报错  obj = {a:1,c:22};