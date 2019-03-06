export const findObj = (arr, str) => {
  let name = str.toLowerCase();
  let object = arr.find(obj => obj.playername.toLowerCase() === name);
  if (object) {
    return object;
  } else return null;
};

export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const getSquareClassName = value => {
  if (!value) {
    return "puzzle--square-empty blank-tile";
  }
  return value % 2 === 0
    ? "puzzle--square-pair tile-body"
    : "puzzle--square-odd tile-body";
};

export const shift = (index, puzzle) => {
  if (index % 4 !== 0 && puzzle[index - 1] === false) {
    puzzle[index - 1] = puzzle[index];
    puzzle[index] = false;
  } else if ((index + 1) % 4 !== 0 && puzzle[index + 1] === false) {
    puzzle[index + 1] = puzzle[index];
    puzzle[index] = false;
  } else if (index > 3 && puzzle[index - 4] === false) {
    puzzle[index - 4] = puzzle[index];
    puzzle[index] = false;
  } else if (index < 12 && puzzle[index + 4] === false) {
    puzzle[index + 4] = puzzle[index];
    puzzle[index] = false;
  }
};
