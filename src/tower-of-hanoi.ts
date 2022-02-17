function hanoi(plate: number, a:string, b:string, c:string){
  if (plate === 1) {
    console.log(`将盘子从${a}  -->  ${c}\n`)
  }
  else {
    hanoi(plate - 1, a, c, b);
    console.log(`将盘子从${a}  --> 移动到${c}\n`);
    hanoi(plate - 1, b, a, c);
  }
}


hanoi(5, 'A', 'B', 'C');
