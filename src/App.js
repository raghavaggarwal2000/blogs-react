import {Navbar} from './components';
import Home from './pages/Home';
// import Home from './pages/Home';
import AppRoutes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
