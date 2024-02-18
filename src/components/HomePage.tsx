import { Box, Button, Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage: React.FC = () => {
  return (
    <Container style={{ margin: '50px auto', padding: '50px', display: 'flex', flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center", maxWidth: '1200px' }}>
      <Container style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: '20px', flex: 1 }}>
        <Box
          component="img"
          src={require("../assets/Logo.jpg").default}
          sx={{
            height: '150px',
            marginRight: '10px',
          }}
          alt="TreeHacks"/>
        <Typography variant="h3" component="h3" style={{
          color: '#182b39',
          margin: '5px',
          fontFamily: "'Raleway', sans-serif",
          fontWeight: 300
        }}>
          GPTasty Meals
        </Typography>
        <div style={{ maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
          <Typography variant="body1" color="textPrimary" style={{
            color: '#182b39',
            margin: '5px',
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 500
          }}>
            AI-Generated Recipes, only using your pantry items
          </Typography>
          <List style={{
            maxWidth: '500px',
            margin: 'auto',
            textAlign: 'center',
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 500
          }}>
            <ListItem style={{ textAlign: 'center' }}>
              <ListItemText style={{ textAlign: 'center' }}>
                <Typography variant="body1" color="textPrimary" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>
                  ✨ Automatically substitutes ingredients
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem style={{ textAlign: 'center' }}>
              <ListItemText style={{ textAlign: 'center' }}>
                <Typography variant="body1" color="textPrimary" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 500 }}>
                  📈 Practice Healthier Eating Habits
                </Typography>
              </ListItemText>
            </ListItem>
          </List>

          <Button variant="contained" color="primary" style={{
            backgroundColor: 'blue',
            textDecoration: 'none',
            borderRadius: '20px',
            padding: '10px 20px',
            fontWeight: 'bold',
            fontFamily: 'inherit',
            border: '2px black solid'
          }} component={Link} to="/login">
            Access your Dashboard Now
          </Button>
        </div>
      </Container>
    </Container>
  );
};


export default LandingPage;