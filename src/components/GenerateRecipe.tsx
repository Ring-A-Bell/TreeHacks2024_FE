import React, { useState } from 'react';
import { Card, FormGroup, TextField, Button } from '@mui/material';

export default function GenerateRecipe() {
    const [mainIngredient, setMainIngredient] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Submitted:', mainIngredient);
    };

    return (
        <Card style={{width: 500, alignContent: 'center'}}>
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
    );
};