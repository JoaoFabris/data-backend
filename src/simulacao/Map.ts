// 🧪 EXERCÍCIO 3 — TWO SUM (clássico de entrevista)
// 🧠 Contexto (como o avaliador falaria)

// “Agora vamos para um problema um pouco mais lógico. Não precisa ser a solução mais otimizada de primeira.”

// 📌 Enunciado

// Crie uma função que receba:

// um array de números

// um número alvo (target)

// E retorne os índices dos dois números que somam exatamente o target.

// Regras:

// Sempre existe uma única solução

// Não pode usar o mesmo elemento duas vezes

// Retorne os índices, não os valores

// Exemplos:
// nums = [2, 7, 11, 15]
// target = 9
// retorno → [0, 1]

// nums = [3, 2, 4]
// target = 6
// retorno → [1, 2]

// ===========PSEUDOCODIGO

//funcarTwoSum(nums, target)
// para i de zero ate tamanho(nums) 
//  para cada j + 1 dentro i
//   se num[i] + nums[j] === target
//       retorna [i] e [j] 
//fim da func


function TwoSum(nums: number[], target: number): number[] {
    let result: number[] = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return result = [i, j]
            }
        }
    }

    return []
}

console.log(TwoSum([2, 7, 11, 6, 3, 15], 9));


// “Qual a complexidade dessa solução?”

// ✔️ Resposta correta:

// Tempo: O(n²) (dois loops aninhados)

// Espaço: O(1)

// ============ PSEUDOCODIGO

// funcao TwoSumMap(nums, target)
//  criar mapa vazio
//   para i de 0 ate tamanho(nums)
//    complemento = target - nums[i]
//    se mapa contém complemento
//      retornar [mapa[complemento], i]
//
//    adicionar nums[i] no mapa com valor i
//   fim para
// fim funcao

function TwoSumMap(nums:number[], target: number): number[]{
    const map = new Map<number, number> ()

    for(let i =0; i < nums.length; i++) {
        const complemento = target - nums[i] //qual número eu preciso encontrar para somar com nums[i] e dar target?”.

        if(map.has(complemento)) { //Pergunta ao Map: “eu já vi esse complement antes?”
            return [map.get(complemento)!, i]
        }
        map.set(nums[i], i) //Guarda o número atual no Map: chave = nums[i] (valor) e valor = i (índice)
    }
    return []
}

console.log(TwoSumMap([2, 7, 11, 6, 3, 15], 9));

// map.set(1, 10)
// map.set(2, 20)
// map.set(3, 30)
// console.log(map.has(2)) // true

// Map vs Object - Quando Usar?
// Característica	Map	Object
// Tipos de chaves	Qualquer tipo	String ou Symbol
// Tamanho	map.size	Object.keys(obj).length
// Performance	Melhor para adição/remoção frequente	Melhor para records estáticos
// Iteração	Ordem de inserção garantida	Ordem nem sempre garantida
// Serialização JSON	Não nativo	Nativo

