import { checkWin, computeBestPossibleMove, whoWon } from './minimax';

describe.only('minimax', () => {
  describe('checkWin', () => {
    it('should return true when someone won', () => {
      const board = [
        -1, -1, -1,
        0, 0, 0,
        0, 0, 0,
      ];
      const player = -1;

      expect(checkWin({ board, player })).toEqual(true);
    });

    it('should return false when noone won', () => {
      const board = [
        1, 0, 1,
        0, 0, 0,
        0, 0, 0,
      ];
      const player = 1;

      expect(checkWin({ board, player })).toEqual(false);
    });
  });

  describe('whoWon', () => {
    it('should return the player icon if the player has won', () => {
      const board = [
        -1, -1, -1,
        0, 0, 0,
        0, 0, 0,
      ];
      const player = -1;

      expect(whoWon(board)).toEqual(player);
    });

    it('should return 0 if it\'s a draw', () => {
      const board = [
        -1, -1, 1,
        1, 1, -1,
        -1, 1, -1,
      ];

      expect(whoWon(board)).toEqual(0);
    });
  });

  describe('computeBestPossibleMove', () => {
    it('returns all best possible moves from ai\'s playerIcon and board', () => {
      const board = [
        0, 0, 1,
        0, -1, -1,
        0, 0, 1,
      ];
      const player = -1;

      expect(computeBestPossibleMove({ board, player })).toEqual(3);
    });
  });
});
