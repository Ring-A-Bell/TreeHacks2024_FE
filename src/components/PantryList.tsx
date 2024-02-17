import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField } from '@mui/material';

interface Item {
    id: number;
    thumbnail: string;
    name: string;
    quantity: number;
    unit: string;
}

interface Props {
    items: Item[];
}

const handleIncrement = (item: Item) => {
    console.log(`Incrementing ${item.name}`);
};

const handleDecrement = (item: Item) => {
    console.log(`Decrementing ${item.name}`);
};

const handleEdit = (item: Item) => {
    console.log(`Editing ${item.name}`);
};

const items = [
    {
        id: 1,
        thumbnail: "https://media.istockphoto.com/id/1319656005/vector/cartoon-cheesecake-slice-drawing.jpg?s=612x612&w=0&k=20&c=nlhbS1jfMTirEoLYJJUmzN20FrWRyOW8TXwBroINot0=",
        name: "Cheesecake",
        quantity: 1,
        unit: "slice"
    },
    {
        id: 2,
        thumbnail: "https://media.istockphoto.com/id/1319656005/vector/cartoon-cheesecake-slice-drawing.jpg?s=612x612&w=0&k=20&c=nlhbS1jfMTirEoLYJJUmzN20FrWRyOW8TXwBroINot0=",
        name: "Cheesecake",
        quantity: 1,
        unit: "slice"
    },
    {
        id: 3,
        thumbnail: "https://media.istockphoto.com/id/1319656005/vector/cartoon-cheesecake-slice-drawing.jpg?s=612x612&w=0&k=20&c=nlhbS1jfMTirEoLYJJUmzN20FrWRyOW8TXwBroINot0=",
        name: "Cheesecake",
        quantity: 1,
        unit: "slice"
    }
];

export default function PantryList() {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));

    const handleSearch = () => {
        if (filteredItems.length === 0) {
            console.log(`No item with the name '${searchText}' exists.`);
        }
    };

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