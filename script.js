

const divide = (arr, n) => {
    let result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let num of arr) {
        if (currentSum + num > n) {
           
            result.push(currentSubarray);
           
            currentSubarray = [num];
            currentSum = num;
        } else {
           
            currentSubarray.push(num);
            currentSum += num;
        }
    }

   
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
