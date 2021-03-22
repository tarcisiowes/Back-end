const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

let arrayC = []


for(let i = 0; i < arrayA.length; i++) {
    
    let position = i

    arrayA[i] < arrayB[position] ? arrayC.push(arrayA[i]) : arrayC.push(arrayB[position])

}
console.log(arrayC)