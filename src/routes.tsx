import { Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import AddItem from './components/AddItem';
import NavBar from './components/NavBar';

const routes = () => {
    return (
        <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/addIngredient" element={<AddItem />} />
        </Routes>
    );
}

export default routes;