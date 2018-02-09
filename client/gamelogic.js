
const checkHorizontal = (arr) => {
  let stringCheck = '';
  for (let i = 0; i < arr.length; i++) {
    stringCheck = stringCheck + arr[i];
  };
  if (/yyyy/i.test(stringCheck)) {
    return 'Yellow Wins';
  }
  if (/rrrr/i.test(stringCheck)) {
    return 'Red Wins';
  }

  return 'No Winners Yet';
};

const checkVertical = (arr) => {
  let cache = {
    'col0': '',
    'col1': '',
    'col2': '',
    'col3': '',
    'col4': '',
    'col5': '',
    'col6': ''
  }

  for (let i = arr.length-1; i >= 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
      cache[`col${j}`] += arr[i][j];
    }
  };

  for (let cols in cache) {
    if (/yyyy/i.test(cache[cols])) {
      return 'Yellow Wins';
    }
    if (/rrrr/i.test(cache[cols])) {
      return 'Red Wins';
    }
  };

  return 'No Winners Yet';
};

const checkDiagonalOne = (arr) => {
  let rows = arr.length;
  let columns = arr[0].length;
  let maxLength = Math.max(columns, rows);
  let checkStr = '';

  for (let i = 0; i <= 2*(maxLength-1); ++i) {
    for (let j = rows-1; j>=0; j--) {
      let bounds = i-j;
      if (bounds >= 0 && bounds < columns) {
        checkStr += arr[j][bounds];
      }
    }
    if (/yyyy/i.test(checkStr)) {
      return 'Yellow Wins';
      break;
    }
    if (/rrrr/i.test(checkStr)) {
      return 'Red Wins';
    }
  };

  return 'No Winners Yet';
};

const checkDiagonalTwo = (arr) => {
  let rows = arr.length;
  let columns = arr[0].length;
  let maxLength = Math.max(columns, rows);
  let checkStr = '';

  for (let i = 0; i <= 2*(maxLength-1); ++i) {
    for (let j = rows-1; j >= 0; --j) {
      let bounds = i - (rows - j);
      if (bounds >= 0 && bounds < columns) {
        checkStr += arr[j][bounds];
      }
    }
    if (/yyyy/i.test(checkStr)) {
      return 'Yellow Wins';
      break;
    }
    if (/rrrr/i.test(checkStr)) {
      return 'Red Wins';
    }
  };

  return 'No Winners Yet';
};


const checkBoard = (arr) => {
  // change possible to false which denotes a tie
  let possible = true;
  arr.forEach((row) => {
    let checkH = checkHorizontal(row);
    if (checkH === 'Yellow Wins' || checkH === 'Red Wins') {
      return checkH;
    }
  });

  if (checkVertical(arr) === 'Yellow Wins' || checkVertical(arr) === 'Red Wins') {
    return checkVertical(arr);
  };

  if (checkDiagonalOne(arr) === 'Yellow Wins' || checkDiagonalOne(arr) === 'Red Wins') {
    return checkDiagonalOne(arr);
  }

  if (checkDiagonalTwo(arr) === 'Yellow Wins' || checkDiagonalTwo(arr) === 'Red Wins') {
    return checkDiagonalTwo(arr);
  }

  return `It's a tie!!`;
};

export default checkBoard;

module.exports.checkHorizontal = checkHorizontal;
module.exports.checkVertical = checkVertical;
module.exports.checkDiagonalOne = checkDiagonalOne;
module.exports.checkDiagonalTwo = checkDiagonalTwo;
module.exports.checkBoard = checkBoard;
