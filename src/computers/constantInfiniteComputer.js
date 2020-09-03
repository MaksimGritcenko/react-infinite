/* @flow */

var InfiniteComputer = require('./infiniteComputer.js');

class ConstantInfiniteComputer extends InfiniteComputer {
  getTotalScrollableHeight(): number {
    return this.heightData * this.numberOfChildren;
  }

  getDisplayIndexStart(windowTop: number, itemsInRow: number): number {
    return (Math.floor(windowTop / this.heightData) * itemsInRow);
  }

  getDisplayIndexEnd(windowBottom: number, itemsInRow: number): number {
    var nonZeroIndex = (Math.ceil(windowBottom / this.heightData) * itemsInRow - 1);
    if (nonZeroIndex > 0) {
      return nonZeroIndex - 1;
    }
    return nonZeroIndex;
  }

  getTopSpacerHeight(displayIndexStart: number, itemsInRow: number): number {
    return displayIndexStart * this.heightData / itemsInRow;
  }

  getBottomSpacerHeight(displayIndexEnd: number, itemsInRow: number): number {
    var nonZeroIndex = displayIndexEnd + 1;
    return Math.max(
      0,
      ((this.numberOfChildren - nonZeroIndex) * this.heightData / itemsInRow)
    );
  }
}

module.exports = ConstantInfiniteComputer;
