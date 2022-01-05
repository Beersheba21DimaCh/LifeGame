import { getRandomMatrix } from "../util/random"

export default class LifeMatrix {
    constructor(private _matrix: number[][]){}
        nextStep(): number[][] {
            // this._matrix = getRandomMatrix(0, 1, this._matrix.length, this._matrix[0].length);
            this._matrix = getNextMatrix(this._matrix);
            return this._matrix;
        }
        get matrix() {
            return this._matrix
        }    
}

function getNextMatrix(matrix: number[][]){
    const res:number[][] = [[]];
    
    for (let row = 0; row < matrix.length; row++) {
        res[row] = [];
        for (let collum = 0; collum < matrix[0].length; collum++) {
                let life = getNeighborLife(matrix, row, collum);
                if (matrix[row][collum] === 1){
                    res[row][collum] = life < 2 || life > 3 ? 0 : 1;
                } else {
                    res[row][collum] = life === 3 ? 1 : 0;
                }
               
        }
    }
    return res;
}

function getNeighborLife(matrix: number[][], row: number, collum: number){
    let count = 0;
    count += matrix[row][collum-1] === undefined || matrix[row][collum-1] === 0 ? 0 : 1;
    count += matrix[row][collum+1] === undefined || matrix[row][collum+1] === 0 ? 0 : 1;
    if(matrix[row-1] !== undefined){
        count += matrix[row-1][collum-1] === undefined || matrix[row-1][collum-1] === 0 ? 0 : 1;
        count += matrix[row-1][collum] === undefined || matrix[row-1][collum] === 0 ? 0 : 1;
        count += matrix[row-1][collum+1] === undefined || matrix[row-1][collum+1] === 0 ? 0 : 1;
    }
    if(matrix[row+1] !== undefined){
        count += matrix[row+1][collum-1] === undefined || matrix[row+1][collum-1] === 0 ? 0 : 1;
        count += matrix[row+1][collum] === undefined || matrix[row+1][collum] === 0 ? 0 : 1;
        count += matrix[row+1][collum+1] === undefined || matrix[row+1][collum+1] === 0 ? 0 : 1;
    }
    return count;
}