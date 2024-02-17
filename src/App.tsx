import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import routes from './routes';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <NavBar />
        {routes()}
      </div>
    </Router>
  );
}

export default App;
