import './App.css';
import {Navpanel} from './components/Navpanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from './subpage/Home';
import {Inscripcion} from './subpage/Inscripcion';
import {ProfeGuia} from './subpage/ProfeGuia';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Navpanel/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Inscripcion" element={<Inscripcion />}></Route>
          <Route path="/ProfeGuia" element={<ProfeGuia />}></Route>
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;