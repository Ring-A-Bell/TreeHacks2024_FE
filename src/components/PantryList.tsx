import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from '@mui/material';
import { PantryApiService } from '../services/PantryApiService';


const handleIncrement = (item: any) => {
    console.log(`Incrementing ${item.name}`);
    console.log(`New quantity: ${item.quantity + 1}`);
};

const handleDecrement = (item: any) => {
    console.log(`Decrementing ${item.name}`);
};

const handleEdit = (item: any) => {
    console.log(`Editing ${item.name}`);
};

export default function PantryList() {
    const [items, setItems] = useState<{ name: string; id: number; thumbnail: string; quantity: number; unit: string; }[]>([]); // Fix for Problem 1
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleAddConsumable = async () => {
        const newConsumableName = prompt('Enter the name of the new consumable:');
        const newConsumableQuantity = prompt('Enter the quantity of the new consumable:');
        const newConsumableUnit = prompt('Enter the unit of measurement for the new consumable:');
        
        if (newConsumableName && newConsumableQuantity && newConsumableUnit) {
            try {
                const res = {consumableID: newConsumableName, quantity: newConsumableQuantity, measurementUnit: newConsumableUnit};
                console.log("Sending this, ", res);
                const response = await PantryApiService.addConsumable(res);
                if (response) {
                    console.log(`Successfully added ${newConsumableName}`);
                    // Refresh the pantry items after adding a new consumable
                    queryPantryItems();
                } else {
                    console.error(`Failed to add ${newConsumableName}`);
                }
            } catch (error) {
                console.error(`Failed to add ${newConsumableName}:`, error);
            }
        }
    };

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));

    const handleSearch = () => {
        if (filteredItems.length === 0) {
            console.log(`No item with the name '${searchText}' exists.`);
        }
    };

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

    useEffect(() => {
        queryPantryItems().catch((error) => {
            console.error('Failed to fetch pantry items:', error);
        });
    }, []);

    return (
        <div>
            <TextField
                label="Search"
                value={searchText}
                onChange={handleSearchChange}
                onBlur={handleSearch}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleAddConsumable}>Add new Ingredient</Button>
            <TableContainer style={{ display: 'flex', justifySelf: 'center', justifyContent: 'center' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Thumbnail</TableCell>
                            <TableCell>Item Name</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Measurement Unit</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredItems.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <img src={item.thumbnail} style={{maxHeight: 60}} alt="Thumbnail" />
                                </TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.quantity}</TableCell>
                                <TableCell>{item.unit}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" onClick={() => handleIncrement(item)}>
                                        +
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => handleDecrement(item)}>
                                        -
                                    </Button>
                                    <Button variant="contained" onClick={() => handleEdit(item)}>
                                        Edit Quantity
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};