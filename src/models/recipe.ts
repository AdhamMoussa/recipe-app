class Recipe {
  constructor(
    public id: string,
    public categoryIds: string[],
    public title: string,
    public affordability: "luxurious" | "pricey" | "affordable",
    public complexity: "challenging" | "hard" | "simple",
    public imageUrl: string,
    public duration: number,
    public ingredients: string[],
    public steps: string[],
    public isGlutenFree: boolean,
    public isVegan: boolean,
    public isVegetarian: boolean,
    public isLactoseFree: boolean
  ) {}
}

export { Recipe };
