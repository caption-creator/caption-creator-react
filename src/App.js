import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Framework from './components/Framework';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import UploadPage from './pages/UploadPage';
import AuthPage from './pages/AuthPage'

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
          <Route 
            exact 
            path="/upload" 
            component={UploadPage} 
          />
          <Route 
            exact 
            path="/mypage" 
            component={MyPage} 
          />
          <Route
            exact
            path="/auth"
            component={AuthPage}
          />
        </Switch>
      </Framework>
    </BrowserRouter>
  );
}

export default App;
