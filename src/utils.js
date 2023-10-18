

// Hydration functions
const getAvgTotalFluid = (data, id) => {
  if(!data || !id) {
    return undefined
  }
  const hydrationEntries = data.filter((entry) => entry.userID === id)
  console.log(hydrationEntries.length)
  const hydrationAvg = hydrationEntries.reduce((acc, user) => {
    return (acc += user.numOunces)
  }, 0)
  return Math.round(hydrationAvg / hydrationEntries.length)
}

console.log(getAvgTotalFluid(hydrationData, 1))




export {

}