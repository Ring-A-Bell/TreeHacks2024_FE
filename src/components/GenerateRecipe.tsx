import React, { useState } from 'react';
import { Card, FormGroup, TextField, Button, Box } from '@mui/material';
import { PantryApiService } from '../services/PantryApiService';
import RecipeCard from './RecipeCard';
import { IRecipeModel } from '../interfaces/IRecipeModel';

export default function GenerateRecipe() {
    const [mainIngredient, setMainIngredient] = useState('');
    const [items, setItems] = useState<{ name: string; id: number; thumbnail: string; quantity: number; unit: string; }[]>([]);
    const [recipe, setRecipe] = useState<IRecipeModel>();

    const queryPantryItems = async() => {
        const pantryItems = await PantryApiService.fetchPantryItems();
        if (pantryItems) {
            const newItems = pantryItems.consumables.map((consumable, index) => ({
                name: consumable.consumableID,
                id: index,
                thumbnail: 'https://via.placeholder.com/150',
                quantity: consumable.quantity,
                unit: consumable.measurementUnit
            }));
            setItems(newItems);
            console.log('Pantry items:', pantryItems);
        } else {
            console.error('Failed to fetch pantry items:', pantryItems);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', mainIngredient);
        console.log('Items:', items);
        fetch('/api/openai', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mainIngredient })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setRecipe(data as IRecipeModel);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
            <Card style={{ width: 500 }}>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                        <TextField
                            id="mainIngredient"
                            label="Main Ingredient"
                            value={mainIngredient}
                            onChange={(e) => setMainIngredient(e.target.value)}
                        />
                    </FormGroup>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Card>
            {recipe && (
                <RecipeCard recipe={recipe} />
            )}
        </Box>
    );
};
