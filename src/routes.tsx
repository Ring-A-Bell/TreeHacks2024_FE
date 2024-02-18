import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import AddItem from './components/AddItem';
import PantryList from './components/PantryList';
import GenerateRecipe from './components/GenerateRecipe';
import LandingPage from './components/HomePage';

const routes = () => {
    return (
        <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/addIngredient" element={<AddItem />} />
            <Route path="/dashboard" element={<PantryList />} />
            <Route path="/generateRecipe" element={<GenerateRecipe />} />
        </Routes>
    );
}

export default routes;