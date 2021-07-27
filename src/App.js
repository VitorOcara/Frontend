import './App.css';
import Cabecalho from "./components/Cabecalho"
import { Routes } from './routes';


function App() {

  return (
    <div className="App">
      <center>
        <div className= "conteiner">
          <Cabecalho></Cabecalho>
          <Routes/>
        </div>

      </center>
    </div>
  );
}

export default App;
