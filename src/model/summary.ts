export class Summary {
  constructor(public euros: number, public usedeuros: number, public points: number, public usedpoints: number) {}

  get currentPoint(): number {
    return this.points - this.usedpoints;
  }

  get currentCash(): number {
    return this.euros - this.usedeuros;
  }
}
