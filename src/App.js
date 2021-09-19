import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Framework from './components/Framework';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Framework>
        <Switch>
          <Route 
            exact 
            path="/" 
            component={MainPage} 
          />
        </Switch>
      </Framework>
    </BrowserRouter>
  );
}

export default App;
