const checkHorizontal = require('../client/gamelogic.js').checkHorizontal;
const checkVertical = require('../client/gamelogic.js').checkVertical;
const checkDiagonalOne = require('../client/gamelogic.js').checkDiagonalOne;
const checkDiagonalTwo = require('../client/gamelogic.js').checkDiagonalTwo;
const checkBoard = require('../client/gamelogic.js').checkBoard;

//+++++++++++++++++++HORIZONTAL TESTS++++++++++++++++++++++++++++

let testBoardHorizontalTrue = ["y", "y", "y", "y", "r", "y", "r"];
let testBoardHorizontalTrue2 = ["y", "r", "y", "y", "y", "y", "r"];
let testBoardHorizontalFalse = ["o", "y", "y", "r", "r", "o", "r"];

test('checkHorizontal func succesfully finds a connectfour yellow', () => {
  expect(checkHorizontal(testBoardHorizontalTrue)).toBe('Yellow Wins')
});

test('checkHorizontal func succesfully finds a connectfour yellow #2', () => {
  expect(checkHorizontal(testBoardHorizontalTrue2)).toBe('Yellow Wins')
});

test('checkHorizontal func does not find a connectfour when none exists', () => {
  expect(checkHorizontal(testBoardHorizontalFalse)).toBe('No Winners Yet')
});

//+++++++++++++++++++VERTICAL TESTS++++++++++++++++++++++++++++

let testBoardVerticalTrue = [
  ["o", "o", "o", "o", "o", "o", "o"],
  ["o", "r", "o", "o", "o", "o", "y"],
  ["o", "y", "y", "y", "r", "o", "r"],
  ["y", "r", "y", "y", "y", "y", "y"],
  ["y", "y", "y", "y", "r", "y", "r"],
  ["y", "r", "r", "y", "r", "r", "y"]
];

let testBoardVerticalTrue2 = [
  ["o", "o", "o", "o", "o", "o", "o"],
  ["o", "r", "o", "o", "o", "o", "r"],
  ["o", "y", "y", "r", "r", "o", "r"],
  ["y", "r", "y", "y", "y", "y", "r"],
  ["y", "y", "y", "y", "r", "y", "r"],
  ["y", "r", "r", "y", "r", "r", "y"]
];

let testBoard = [
  ["o", "o", "o", "o", "o", "o", "o"],
  ["o", "r", "o", "o", "o", "o", "y"],
  ["o", "r", "y", "o", "r", "o", "r"],
  ["y", "o", "o", "y", "y", "y", "y"],
  ["y", "o", "y", "r", "r", "y", "r"],
  ["y", "r", "r", "y", "r", "r", "y"]
];

test('checkVertical func succesfully finds a connectfour yellow', () => {
  expect(checkVertical(testBoardVerticalTrue)).toBe('Yellow Wins')
});

test('checkVertical func succesfully finds a connectfour red', () => {
  expect(checkVertical(testBoardVerticalTrue2)).toBe('Red Wins')
});

test('checkVertical func does not find a connectfour when none exists', () => {
  expect(checkVertical(testBoard)).toBe('No Winners Yet')
});

//+++++++++++++++++++DIAGONAL TESTS++++++++++++++++++++++++++++

let testBoardDiagonalTrue = [
  ["o", "o", "o", "o", "o", "o", "o"],
  ["y", "r", "o", "o", "o", "o", "y"],
  ["o", "y", "y", "r", "r", "o", "r"],
  ["y", "r", "y", "y", "y", "y", "y"],
  ["y", "y", "y", "y", "r", "y", "r"],
  ["y", "r", "r", "y", "r", "r", "y"]
];

let testBoardDiagonalFalse = [
  ["o", "o", "o", "o", "o", "o", "o"],
  ["y", "r", "o", "o", "o", "o", "y"],
  ["r", "r", "y", "r", "r", "o", "r"],
  ["r", "r", "r", "r", "y", "y", "y"],
  ["y", "y", "y", "y", "r", "r", "r"],
  ["y", "r", "r", "y", "r", "r", "y"]
];

let testBoardDiagonalTrue2 = [
  ["o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "o"],
  ["o", "o", "o", "o", "o", "o", "r"],
  ["o", "o", "o", "o", "o", "r", "o"],
  ["o", "o", "o", "o", "r", "o", "o"],
  ["o", "o", "o", "r", "o", "o", "o"]
];

test('checkDiagonal func succesfully finds a connectfour yellow', () => {
  expect(checkDiagonalTwo(testBoardDiagonalTrue)).toBe('Yellow Wins')
});

test('checkDiagonal func does not find a connectfour when none exists', () => {
  expect(checkDiagonalTwo(testBoardDiagonalFalse)).toBe('No Winners Yet')
});

test('checkDiagonal func succesfully finds a connectfour red', () => {
  expect(checkDiagonalOne(testBoardDiagonalTrue2)).toBe('Red Wins')
});

//+++++++++++++++++++BOARD TESTS++++++++++++++++++++++++++++

test('checkBoard func does not find a winner when there are no connect fours', () => {
  expect(checkBoard(testBoard)).toBe(`It's a tie!!`)
});

test('checkBoard func succesfully finds a diagonal connectfour red', () => {
  expect(checkBoard(testBoardDiagonalTrue2)).toBe('Red Wins')
});
