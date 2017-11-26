import { checkWin, computeBestPossibleMove } from './minimax';

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
