import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import AddItem from './components/AddItem';
import NavBar from './components/NavBar';
import PantryList from './components/PantryList';

const routes = () => {
    return (
        <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/addIngredient" element={<AddItem />} />
            <Route path="/dashboard" element={<PantryList />} />
        </Routes>
    );
}

export default routes;