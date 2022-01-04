export function getRandomNumber(min: number, max:number):number{
    if(max < min){
        [max, min] = [min, max];
    }
    return Math.round(min + Math.random()*(max - min));
}

export function getRandomMatrix(minValue:number, maxValue:number, nRows:number, nCollums:number):number[][]{
    const res = new Array<number[]>();
    if(nRows<0 || nCollums<0){
        throw Error("number of rows or number of colums can not be a negative ");
    }
    for (let i = 0; i < nRows; i++) {
        res[i] = [];
        for (let y = 0; y < nCollums; y++) {
            res[i][y] = getRandomNumber(minValue, maxValue);  
        }
    }
    return res;
}

 