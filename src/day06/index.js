import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const rows = input.split("\n");
  const gridWidth = rows[0].length;
  const gridHeight = rows.length;

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
  let steps = 0;
  const currentPos = { ...guardStartPosition };
  let newPos = tryMove(currentPos, rows);
  while (newPos) {
    console.log("newPos", newPos);
    console.log('steps', steps);
    steps++;
    currentPos.x = newPos.x;
    currentPos.y = newPos.y;
    currentPos.direction = newPos.direction;
    newPos = tryMove(currentPos, rows);
  }

  return steps;
};

const tryMove = (currentPos, grid) => {
  //try moving in the current direction
  let newPos = { ...currentPos };
  switch (currentPos.direction) {
    case 0:
      newPos.y -= 1;
      break;
    case 1:
      newPos.x += 1;
      break;
    case 2:
      newPos.y += 1;
      break;
    case 3:
      newPos.x -= 1;
      break;
  }
  if (newPos.y < 0 || newPos.y >= grid.length || newPos.x < 0 || newPos.x >= grid[0].length) {
    //out of bounds
    return null;
  }
  if (grid[newPos.y][newPos.x] === "#") {
    //hit a wall, advance direction
    console.log("hit wall");
    newPos.direction = (currentPos.direction + 1) % 4;
    switch (newPos.direction) {
      case 0:
        newPos.y -= 1;
        newPos.x += 1;
        break;
      case 1:
        newPos.y += 1;
        newPos.x += 1;
        break;
      case 2:
        newPos.y += 1;
        newPos.x -= 1;
        break;
      case 3:
        newPos.x -= 1;
        newPos.y -= 1;
        break;
    }
  }
  return newPos;
}

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const rows = input.split("\n");
  return;
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
