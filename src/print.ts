interface person{
  name: string,
  age: number,
  other: string
  sex: 1|2
}

function print(person: person): string {
  return '姓名：' + person.name + ' 年龄：' + person.age
}

const student:person = {
  name: '小强',
  age: 25,
  other: '所以说嘛是ss',
  sex: 2
}

const a = print(student);
console.log(a);

export default print
