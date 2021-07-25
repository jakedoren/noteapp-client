import Router from './Router';
import axios from 'axios';
import './App.css';
import { AuthContextProvider } from './AuthContext/AuthContext';

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  )
}

export default App;
