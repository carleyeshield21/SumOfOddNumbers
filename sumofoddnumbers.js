// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript
function rowSumOddNumbers(n) {
    let newarr = []
    for(i=1; i<=n; i++){
        let arr = new Array(i).fill(1)
        newarr.push(arr)
    }
    let arr1 = newarr.join().split(',')
    // console.log(arr1.length)

    let finalarr = []
    let interval = 1
    for(i=0; i<=arr1.length-1; i++){
        // console.log(i, interval)
        finalarr.push(interval)
        interval += 2
    }
    finalarr.reverse()
    // console.log(finalarr)

    let sum = 0
    let thearray = []
    for(i=0; i<=n-1; i++){
        // console.log(finalarr[i])
        thearray.push(finalarr[i])
        sum += finalarr[i]
    }
    console.log(`Odd numbers at row ${n}: [${thearray}]`)
    console.log(`Sum is: ${sum}`)
}                                                                                                                                                     
rowSumOddNumbers(1)
console.log('========')
rowSumOddNumbers(2)
console.log('========')
rowSumOddNumbers(3)
console.log('========')
rowSumOddNumbers(4)
console.log('========')
rowSumOddNumbers(5)
console.log('========')
rowSumOddNumbers(6)
console.log('========')