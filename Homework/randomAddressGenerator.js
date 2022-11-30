//Create dummy data
const streetNameArray = ['Fathom Cove', 'Rhode Island Avenue', 'N Vermont Street', 'George St']
const cityArray  = ['Fairfax', 'Arlington', 'Harrisonburg', 'Springfield', 'Stafford', 'Charleston']
const stateArray = ['VA', 'D.C', 'GA', 'SC', 'NJ']

//Get random indexes
let streetNum = Math.floor(Math.random() * streetNameArray.length)
let cityNum = Math.floor(Math.random() * cityArray.length)
let stateNum = Math.floor(Math.random() * stateArray.length)

//Generate message
console.log(Math.floor(Math.random() * 10001) + ' ' + streetNameArray[streetNum] + ' ' + cityArray[cityNum] + ', ' + stateArray[stateNum] + ' ' + Math.floor(Math.random() * 100001))

