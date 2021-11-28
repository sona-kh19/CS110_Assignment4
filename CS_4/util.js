module.exports = {
    matrixProduct : function (matA, matB){
    
        if(matA[0].length !== matB.length){
            console.log("The product cannot be completed, number of columns in matrix 1 must be equal to the number of rows in matrix 2.");
            return;
        }
        let matProduct = [];
    
        for(let rowIndexA = 0; rowIndexA < matA.length; rowIndexA++){
           let arrProduct = [];
            for(let columnIndexB = 0; columnIndexB < matB[0].length; columnIndexB++){
                let sumOfProducts = 0;
                
                for(let i = 0; i < matA[0].length; i++){
                    let product = matA[rowIndexA][i] * matB[i][columnIndexB];
                    sumOfProducts += product;
                }
                arrProduct.push(sumOfProducts);
            }
    
            matProduct.push(arrProduct);
        }
    
        return matProduct;
    },

    sumOfMatrices : function (matA, matB){
        if(matA.length !== matB.length || matA[0].length !== matB[0].length){
            console.log("The number of rows and the number of columns in each matrix should be equal respectfully.");
            return;
        }
    
        let matrixSum = [];
        for(let row = 0; row < matA.length; row++){
            let summedRow = [];
            for(let column = 0; column < matA[0].length; column++){
                let sum = matA[row][column] + matB[row][column];
                summedRow.push(sum);
            }
            matrixSum.push(summedRow);
        }
    
        return matrixSum;
    
    },


    sumOfEachRow : function (mat){
        let summedRows = [];
        for(let i = 0; i < mat.length; i++){
            summedRows.push(sumOfArray(mat[i]));
    
        }
        return summedRows;
    }
    
    
};

function sumOfArray (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];

    }
    return sum;
}

