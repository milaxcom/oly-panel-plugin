let laps = 10
let startVolume = 500
let profit = 1.82

let profitAmount = (startVolume * profit) - startVolume

let currentLoss,
    lat, i, j,
    currentProfitAmount,
    currentVolume,
    lastVolume,
    loss,
    result = []


for (lap=0; lap<laps; lap++) {
    
    result[lap] = {}

    if (lap === 0) loss = 0
    else loss = result[lap-1].deposit

    result[lap].volume = 0
    result[lap].profit = (profitAmount*(lap+1)) + loss
    // result[lap].profitAbsolute = (profitAmount * (lap+1))
    
    currentProfitAmount = 0

    do {
        result[lap].volume = result[lap].volume + 1
        currentProfitAmount = (result[lap].volume * profit) - result[lap].volume
        result[lap].deposit = result[lap].volume + loss
    } while (result[lap].profit > currentProfitAmount)
    console.log(result[lap].volume)
}

console.log(result)