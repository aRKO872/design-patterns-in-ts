export class ImplementStrategy {
  private strategy: Strategy

  constructor (strategy: Strategy) {
    this.strategy = strategy
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  public implementStrategy(arr: number[]) {
    this.strategy.doSomething(arr)
  }
}

interface Strategy {
  doSomething(arr: number[]) : void;
}

export class SortingStrategy implements Strategy {
  public doSomething(arr: number[]): void {
      arr.sort((a: number, b: number) => a-b);
      console.log(arr);
  }
}

export class ReverseStrategy implements Strategy {
  public doSomething(arr: number[]): void {
      arr.reverse();
      console.log(arr);
  }
}