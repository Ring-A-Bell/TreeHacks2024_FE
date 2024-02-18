import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IRecipeModel } from '../interfaces/IRecipeModel';

export default function RecipeCard({recipe}: {recipe: IRecipeModel}) {
  const { RecipeName, Description, Ingredients, Instructions } = recipe;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://source.unsplash.com/random"
        title={RecipeName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {RecipeName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Ingredients.map((ingredient) => `${ingredient.ingredientName}: ${ingredient.quantity} ${ingredient.measurementUnit}`).join(', ') }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Instructions}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">I Made This!</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
