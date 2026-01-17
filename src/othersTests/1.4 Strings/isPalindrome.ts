//Exercício 12: Verificar palíndromo. lê da mesma forma de trás para frente e de frente para trás
//arara, ovo

function isPalindrome(text: string): boolean {
    const toLowerCase = text.toLowerCase()
    let left = 0;
    let right = toLowerCase.length - 1

    while (left < right) {
        if(toLowerCase[left] !== toLowerCase[right]){
            return false
        }
        right--
        left++
    }
    return true
}
console.log(isPalindrome('oie'));
