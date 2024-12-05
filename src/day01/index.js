import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  //input is string of numbers, i.e:
  // 77442   88154
  // 71181   76363
  // 49755   69158
  //first, we need to split the numbers before space to arr1, and the numbers after space to arr2
  //there will be a line break after second number
  //then, sort arrays in ascending order
  const arr1 = [];
  const arr2 = [];
  const lines = input.split("\n");
  lines.forEach((line) => {
    // console.log(line.split(" "));
    arr1.push(parseInt(line.split(" ")[0]));
    arr2.push(parseInt(line.split(" ")[3]));
  });
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  //for each number, get the difference
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    let highNum = arr2[i] > arr1[i] ? arr2[i] : arr1[i];
    let lowNum = arr2[i] < arr1[i] ? arr2[i] : arr1[i];
    sum += highNum - lowNum;

  }
  return sum;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  const arr1 = [];
  const arr2 = [];
  const lines = input.split("\n");
  lines.forEach((line) => {
    // console.log(line.split(" "));
    arr1.push(parseInt(line.split(" ")[0]));
    arr2.push(parseInt(line.split(" ")[3]));
  });
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    //how many times does arr1[i] appear in arr2
    let count = arr2.filter((num) => num === arr1[i]).length;
    if (count > 0) {
      sum += arr1[i] * count;
    }

  }
  return sum;
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
