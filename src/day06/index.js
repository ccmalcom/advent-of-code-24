import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const rows = input.split("\n");


  const guardStartPosition = {
    x: rows[rows.findIndex((row) => row.includes("^"))].indexOf("^"),
    y: rows.findIndex((row) => row.includes("^")),
    direction: 0 // 0 = up, 1 = right, 2 = down, 3 = left
  }
  console.log("guardStartPos", guardStartPosition);
  //guard will 'move' from starting direction until it hits a '#' symbol
  //if it hits a '#' symbol, it will turn 90 degrees clockwise and then continue moving until it hits a '#' symbol
  //this continues until guard leaves the grid
  //count the number of steps the guard takes
  const visitedPositions = new Set();
  let currentPos = { ...guardStartPosition };
  let steps = 0;
  while (currentPos) {
    // Mark current position as visited
    visitedPositions.add(`${currentPos.x},${currentPos.y}`);

    // Attempt the next move
    currentPos = tryMove(currentPos, rows);
    steps++;
  }

  return visitedPositions.size;

};

const tryMove = (pos, grid) => {
  // Attempt to move forward
  let newPos = { ...pos };
  switch (pos.direction) {
    case 0: newPos.y -= 1; break; // Up
    case 1: newPos.x += 1; break; // Right
    case 2: newPos.y += 1; break; // Down
    case 3: newPos.x -= 1; break; // Left
  }

  // Check bounds
  if (
    newPos.y < 0 || newPos.y >= grid.length ||
    newPos.x < 0 || newPos.x >= grid[0].length
  ) {
    return null; // Out of bounds
  }

  // Check for wall
  if (grid[newPos.y][newPos.x] === "#") {
    // Turn 90 degrees clockwise
    newPos = { ...pos, direction: (pos.direction + 1) % 4 };
    return tryMove(newPos, grid); // Retry with new direction
  }

  return newPos; // Valid move
};


const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const rows = input.split("\n");


  const guardStartPosition = {
    x: rows[rows.findIndex((row) => row.includes("^"))].indexOf("^"),
    y: rows.findIndex((row) => row.includes("^")),
    direction: 0 // 0 = up, 1 = right, 2 = down, 3 = left
  }
  console.log("guardStartPos", guardStartPosition);
  //guard will 'move' from starting direction until it hits a '#' symbol
  //if it hits a '#' symbol, it will turn 90 degrees clockwise and then continue moving until it hits a '#' symbol
  //this continues until guard leaves the grid
  //count the number of steps the guard takes
  const visitedPositions = new Set();
  let currentPos = { ...guardStartPosition };
  let steps = 0;
  while (currentPos) {
    // Mark current position as visited
    visitedPositions.add(`${currentPos.x},${currentPos.y}`);
    if (currentPos.direction === 3 && currentPos.y === guardStartPosition.y) {
      console.log("currentPos", currentPos);
    }
    // Attempt the next move
    currentPos = tryMove(currentPos, rows);
    steps++;
  }

  return visitedPositions.size;
};

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
