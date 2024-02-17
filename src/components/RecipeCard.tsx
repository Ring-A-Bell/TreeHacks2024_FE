import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RecipeCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/1319656005/vector/cartoon-cheesecake-slice-drawing.jpg?s=612x612&w=0&k=20&c=nlhbS1jfMTirEoLYJJUmzN20FrWRyOW8TXwBroINot0="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem Ipsum Dolor
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">I Made This!</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
