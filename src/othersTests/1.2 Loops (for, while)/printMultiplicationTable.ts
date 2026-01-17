function printMultiplicationTable(num: number): void {
  for(let i = 1; i <= 10; i++ ){
    console.log(`${num} * ${i}  =`, num * i); 
  }
}
console.log(printMultiplicationTable(1));
