import {Navbar} from './components';
// import Home from './pages/Home';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
      <AppRoutes />
      </div>
    </div>
  );
}

export default App;
