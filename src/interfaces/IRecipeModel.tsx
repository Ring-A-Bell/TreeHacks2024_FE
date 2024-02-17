export interface IRecipeModel {
    RecipeName: string;
    Description: string;
    Ingredients: [{ingredientName: string, quantity: number, measurementUnit: string}];
    Instructions: string;
};