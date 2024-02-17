export interface IPantryModel {
    pantryID: string;
    userID: string;
    consumables: [{consumableID: string, quantity: number, measurementUnit: string}];
}