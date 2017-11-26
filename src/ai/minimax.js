const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const emptySpots = board => board.filter(spot => spot === 0);

export const checkWin = ({ board, player }) => winCombos.reduce((result, combo) => {
  const comboScore = combo.reduce((score, position) => score + board[position], 0);
  return comboScore === 3 * player ? true : result;
}, false);

export const whoWon = board => winCombos.reduce((result, combo) => {
  const comboScore = combo.reduce((score, position) => score + board[position], 0);
  return comboScore === 3 || comboScore === -3 ? comboScore / 3 : result;
}, 0);

export const computeBestPossibleMove = ({ board, player }) => {
  const availableSpots = emptySpots(board);
  const availableSpotsIndex = board.reduce((a, e, i) => {
    if (e === 0) {
      a.push(i);
    }
    return a;
  }, []);

  if (checkWin({ board, player })) {
    return { score: -10 };
  } else if (checkWin({ board, player: -player })) {
    return { score: 10 };
  } else if (availableSpots.length === 0) {
    return { score: 0 };
  }

  const moves = [];

  availableSpots.forEach((spot, index) => {
    const newBoard = Array.from(board);
    const move = {
      index: availableSpotsIndex[index],
      score: 0,
    };

    newBoard[availableSpotsIndex[index]] = player;
    const result = computeBestPossibleMove({ board: newBoard, player });
    move.score = result.score;

    moves.push(move);
  });

  let bestMove = 0;
  let bestScore = 10000;

  for (let i = 0; i < moves.length; i++) {
    if (moves[i].score < bestScore) {
      bestScore = moves[i].score;
      bestMove = i;
    }
  }

  return moves[bestMove].index;
};
