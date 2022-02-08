export class Ingredient {

  constructor(
    public name:string,
    public amount: number,
  ) {}

  public label():string
  {
    return `${this.name} - (${this.amount})`
  }

}
