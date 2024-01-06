export const rand = {
    array<T>(arr: Array<T>) {
      return arr[this.randInRange(0, arr.length)];
    },
    randTwo() {
      return this.randInRange(0, 2);
    },
    randInRange(from: number, to: number) {
      return Math.floor(Math.random() * (to - from)) + from;
    }
};