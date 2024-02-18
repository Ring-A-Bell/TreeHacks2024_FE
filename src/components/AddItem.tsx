import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { PantryApiService } from '../services/ConsumableApiService';

export default function AddItem() {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');

    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue1(event.target.value);
    };

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue2(event.target.value);
    };

    const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue3(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputValue1, inputValue2, inputValue3);
        axios.put("/api/pantry/123456", [inputValue1, inputValue2, inputValue3]);
    };

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                id="outlined-basic-1"
                label="Input 1"
                variant="outlined"
                value={inputValue1}
                onChange={handleChange1}
            />
            <TextField
                id="outlined-basic-2"
                label="Input 2"
                variant="outlined"
                value={inputValue2}
                onChange={handleChange2}
            />
            <TextField
                id="outlined-basic-3"
                label="Input 3"
                variant="outlined"
                value={inputValue3}
                onChange={handleChange3}
            />
        </Box>
    );
}
