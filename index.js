const {
  json
} = require('micro')

<<<<<<< Updated upstream
=======
// const formatBoard = () => {
//   switch (typeof board) {
//     case 'object':
//     return board.flat();
//     break;
//     case 'string':
//     return board.split();
//     break;
//     default:
//     return 'invalid'
//     break;
//     } 
// }


>>>>>>> Stashed changes
const checkValues = (...values) =>
  values.every((value) => values[0] === value)


// function checkRows(board) {


//   if (board[0] === board[1] === board[2]) return true
//   if (board[3] === board[4] === board[5]) return true
//   if (board[6] === board[7] === board[8]) return true

//   return false

// }

const checkRows = (board = ['', '']) => {
  // if (board[0] === board[1] === board[2]) return true
  // if (board[3] === board[4] === board[5]) return true
  // if (board[6] === board[7] === board[8]) return true

  // return false


  return checkValues(board[0], board[1], board[2]) ||
    checkValues(board[3], board[4], board[5]) ||
    checkValues(board[6], board[7], board[8])
}

const checkColumns = (board) => {
  return checkValues(board[0], board[3], board[6]) ||
    checkValues(board[1], board[4], board[7]) ||
    checkValues(board[2], board[5], board[8])
}

const checkDiagonals = (board) => {
  return checkValues(board[0], board[4], board[8]) ||
    checkValues(board[2], board[4], board[6])
}

const hasWon = (board) =>
  checkRows(board) ||
  checkColumns(board) ||
  checkDiagonals(board)

<<<<<<< Updated upstream
=======
const format = (board) =>
  typeof (board) === 'string' ?
  board.split(' ') :
  board.flat()

module.exports = async (req, res) => {
  let {
    input
  } = await json(req)
}  

const formatted = format(input)

// checkValues('X', '0', 'X')
>>>>>>> Stashed changes

const format = (board) =>
  typeof (board) === 'string' ?
  board.split(' ') :
  board.flat()

module.exports = async (req, res) => {
  const {
    input
  } = await json(req)

  console.log(input)
  const formatted = format(input)
  console.log(formatted)

  return {
    won: hasWon(formatted)
  }
}