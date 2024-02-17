import { BaseApiService } from "./BaseApiService";
import { IConsumableModel } from "../interfaces/IConsumableModel";

export class PantryApiService extends BaseApiService {
    protected static endpoint = `${this.baseEndpoint}/consumable`;

    public static async fetchIngredientDetails(ingredientName: string): Promise<IConsumableModel> {
        const response = await super.fetchData<IConsumableModel>(`${this.endpoint}/${ingredientName}`);
        if (response) {
            return response;
        } else {
            throw new Error('Failed to fetch pantry items');
        }
    }
}