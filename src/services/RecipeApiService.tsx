import { BaseApiService } from "./BaseApiService";
import { IRecipeModel } from "../interfaces/IRecipeModel";

export class PantryApiService extends BaseApiService {
    protected static endpoint = `${this.baseEndpoint}/pantry/123456`;

    public static async fetchPantryItems(): Promise<IRecipeModel> {
        const response = await super.fetchData<IRecipeModel>(this.endpoint);
        if (response) {
            return response;
        } else {
            throw new Error('Failed to fetch pantry items');
        }
    }
}