import './App.css';
import AddItem from './components/AddItem';
import NavBar from './components/NavBar';
import RecipeCard from './components/RecipeCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RecipeCard />
      <AddItem />
    </div>
  );
}

export default App;
