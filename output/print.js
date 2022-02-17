"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function print(person) {
    return '姓名：' + person.name + '年龄：' + person.age;
}
var student = {
    name: '小强',
    age: 25,
    sex: 2
};
var a = print(student);
console.log(a);
exports.default = print;
//# sourceMappingURL=print.js.map