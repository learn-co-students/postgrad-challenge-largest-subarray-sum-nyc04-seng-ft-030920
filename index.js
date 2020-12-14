// Kadane's Algorithm

function largestSubarraySum(array){
    let localMax = 0
    let globalMax = -Infinity
    for(let i = 0; i < array.length; i++){
        localMax = Math.max(array[i], array[i] + localMax)
        if (localMax > globalMax){
            globalMax = localMax
        }
    }
    if(globalMax < 0){
        return 0
    }
    return globalMax
}