const util = require('./util');

const matA = [
            [1, 2, 3], 
            [4, 5, 6], 
            [7, 8, 9]
            ];
const matB = [
            [9, 8, 7], 
            [6, 5, 4], 
            [3, 2, 1]
            ];

console.log('Product of two matrices');
console.table(util.matrixProduct(matA, matB));

console.log('Sum of two matrices');
console.table(util.sumOfMatrices(matA, matB));

console.log('Sum of each row of matix');
console.log(util.sumOfEachRow(matA));
