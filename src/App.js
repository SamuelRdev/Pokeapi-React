import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import PokemonSearchPage from './pages/PokemonSearchPage'
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <div>
      < BrowserRouter>
        <nav className='App'>
          <Link to="/" >Accueil</Link>
          <Link to="/search" >Rechercher un pokémon</Link>
          <Link to="/account" >Mon profil</Link>
        </nav>
        < Switch>
          <Route path="/search" component={PokemonSearchPage}/>
          <Route path="/account" component={AccountPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
