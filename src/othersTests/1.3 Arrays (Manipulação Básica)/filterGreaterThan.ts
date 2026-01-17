//Exercício 9: Filtrar números maiores que X
function filterGreaterThan(numbers: number[], threshold: number): number[] {
  return numbers.filter((n => n > threshold ))
}
console.log(filterGreaterThan([1,2,3,10,12,17], 10));
