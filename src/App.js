import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from './components/Routes';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes/>
    </div>
  );
}

export default App;
