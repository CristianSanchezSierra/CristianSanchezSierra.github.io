import './App.css';
import Inicio from './paginas/inicio';
import Skills from './paginas/skills';
import Knowledge from './paginas/knowledge';
import Aboutt from './paginas/about';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route
          path='/'
          element={<Inicio />}
        />
        <Route
          path='/About'
          element={<Aboutt />}
        />  
          <Route
            path='/Knowledge'
            element={<Knowledge />}
          />  
        <Route
          path='/Skills'
          element={<Skills />}
        />  
      </Routes>

    </BrowserRouter>
  )
}

export default App;
