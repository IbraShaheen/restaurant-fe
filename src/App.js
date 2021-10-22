import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from './components/Routes';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Routes/>
        <Footer/>
    </div>
  );
}

export default App;
