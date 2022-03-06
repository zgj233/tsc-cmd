interface person{
  name: string,
  age: number,
  other: string
  sex: 1|2
}

function print(person: person): string {
  return '姓名：' + person.name + ' | 年龄：' + person.age + ' | 其他：' +person.other
}

const student:person = {
  name: '小白',
  age: 22,
  other: '爱好是踢足球',
  sex: 2
}

const a = print(student);
console.log(a);

export default print
