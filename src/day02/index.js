import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const reports = input.split("\n");
  console.log('reports length', reports.length);
  // console.log('report', reports);  
  let safeReports = 0;
  reports.forEach((report) => {
    // console.log('report', report);
    const levelArray = report.split(" ").map((level) => parseInt(level));
    // console.log('levelArray', levelArray);
    // report is safe if:
    // The levels are either all increasing or all decreasing.
    // Any two adjacent levels differ by at least one and at most three.

    //create iterator to check if levels are increasing or decreasing
    let increasing = false;
    let decreasing = false;
    for (let i = 0; i < levelArray.length; i++) {
      if (i === 0) {
        continue;
      }

      if (levelArray[i] > levelArray[i - 1]) {
        increasing = true;
      } else if (levelArray[i] < levelArray[i - 1]) {
        decreasing = true;
      }

      if (increasing && decreasing) {
        break;
      }
      if (levelArray[i] - levelArray[i - 1] > 3 || levelArray[i] - levelArray[i - 1] < -3 || levelArray[i] - levelArray[i - 1] === 0) {
        break;
      }
      if (i === levelArray.length - 1) {
        safeReports++;
      }

    }

  });
  return safeReports;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const reports = input.split("\n");

  let safeReports = 0;
  const isSafe = (levels) => {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < levels.length; i++) {
      // check if level is increasing or decreasing from previous level
      if (levels[i] > levels[i - 1]) {
        decreasing = false;
      } else if (levels[i] < levels[i - 1]) {
        increasing = false;
      } else {
        return false;
      }

      // Any two adjacent levels differ by at least one and at most three.
      if (Math.abs(levels[i] - levels[i - 1]) > 3) {
        return false;
      }
    }
    return increasing || decreasing;
  };
  reports.forEach((report) => {
    const levelArray = report.split(" ").map(Number);
    // console.log(levelArray);

    if (isSafe(levelArray)) {
      safeReports++;
      return;
    }

    // Try removing one level and check if the report becomes safe.
    for (let i = 0; i < levelArray.length; i++) {
      const modifiedArray = [...levelArray.slice(0, i), ...levelArray.slice(i + 1)];
      if (isSafe(modifiedArray)) {
        safeReports++;
        return;
      }
    }
  });
  return safeReports;
}

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
