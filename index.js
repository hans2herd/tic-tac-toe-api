const {
  json
} = require('micro')


const checkValues = (...values) =>
  values.every((value) => values[0] === value)

const checkRows = (board) => {
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

// checkValues('X', '0', 'X')


module.exports = async (req, res) => {
  const body = await json(req)
  return {
    won: hasWon(body.input)
  }
  // body.input = []
  // body.input = [[]]
  // body.input = 'input'
}