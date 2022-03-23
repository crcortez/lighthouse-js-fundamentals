const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']


function finalPosition(moves) {
  let x = 0;
  let y = 0;
  for (const space of moves) {

    if (space === "north") {
      y++;
    } else if (space === "south") {
      y--;
    } else if (space === "west") {
      x--;
    } else if (space === "east") {
      x++;
  
    }
  }
  return [x,y];
}

console.log(finalPosition(moves));
