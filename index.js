// Code your solution in this file!
const returnFirstTwoDrivers = (firstTwo) =>{
    return firstTwo.slice(0, 2);
}

const returnLastTwoDrivers = (firstTwo) =>{
    return firstTwo.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier)=> {
   return (fare) => fare * multiplier

}
const fareDoubler = (fare) =>{ 
    const doubledFare = createFareMultiplier(2)
    return doubledFare(fare)
}
const fareTripler = (fare) =>{ 
    const tripledFare = createFareMultiplier(3)
    return tripledFare(fare)
}

const selectDifferentDrivers = (arreyOfDriveres, slicingFunction) =>{
    return slicingFunction(arreyOfDriveres)
}
//  1 student
//  2 student