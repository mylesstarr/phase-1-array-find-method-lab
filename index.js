const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
   
  ]


  function superbowlWin (array) {
    const win = array.find(obj => {return obj.result === 'W'})
    if (win != undefined) {
        return win.year
    } else {
        return undefined
    }
}


// function resultFunction(array) {
//     if (array.result == "W") {
//         console.log(array.year)
//     }
    
// }

// const result = function(array) {
//     return array.indexof("W")
// }



// function superbowlWin(array){
//     array.find(result)
// }




