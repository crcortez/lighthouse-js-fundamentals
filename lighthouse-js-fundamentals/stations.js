const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
]

function chooseStations (stations) {
  let goodStations = [];

    // code below "for.. of" statement means "for every station of all of the stations"
  for (const station of stations) {
    let capacity = station[1];
      
    if (capacity >= 20) {
        
      const type = station[2]

      if (type === "school" || type === "community centre") {
       // to keep track of all the names- "push"  
        goodStations.push(station[0])

      }
    }
  }
  // pushes output out of a function
  return goodStations;
}

console.log(chooseStations(stations));