const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for(let i = 0; i < original.length; i++) {
    
    
    original[i] % 2 === 0 ? pares.push(original[i]) : impares.push(original[i])

}
console.log(pares)
console.log(impares)

// ===========================================================================

let x = 0

const pares2 = []
const impares2 = []

while(x < original.length){
    
    if(original[x] % 2 === 0) {
        pares2.push(original[x])
    } else {
        impares2.push(original[x])
    }
    x++
}   
console.log(pares2)
console.log(impares2)

// ============================================================================

const pares3 = []
const impares3 = []
for (let n of original) {

    if( n % 2 === 0) {
        pares3.push(n)
    } else {
        impares3.push(n)
    }

}
console.log(pares3)
console.log(impares3)