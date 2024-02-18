import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    fetch('/api/login/active')
      .then(response => response.json())
      .then(data => {
        setIsLoggedIn(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
      console.log(isLoggedIn);
  }, []); // Empty dependency array ensures the effect runs only once


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TreeHacks
          </Typography>
          {isLoggedIn === null ? (
          <Button color="inherit" href='/#/login'>
            Login
          </Button>
        ) : (
          <>
            <Button color="inherit" href='/#/dashboard'>
              Dashboard
            </Button>
            <Button color="inherit" href='/#/generateRecipe'>
              New Recipe
            </Button>
          </>
        )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}