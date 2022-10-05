const greatestWealth = (arr) => {
    const individualWealth = arr.map(personalWealth => {
        let sum = 0
        for(let i = 0; i < personalWealth.length; i++) {
            sum += personalWealth[i]
        }
        return sum
    })
    return Math.max(...individualWealth)
}

console.log(greatestWealth([[1,2,3],[3,2,1]])) // 6
console.log(greatestWealth([[1,5],[7,3],[3,5]])) // 10
console.log(greatestWealth([[2,8,7],[7,1,3],[1,9,5]])) // 17