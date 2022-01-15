import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NuevoCurso from './components/NuevoCurso';
import Cursos from './components/Cursos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/NuevoCurso' element = {<NuevoCurso />}/>
        <Route path = '/' element = {<Cursos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
