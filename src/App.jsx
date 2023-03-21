import './App.css';
import { Menu } from './components/Menu/Menu';
import { Home } from '.\src\pages\Home\home';
import { Blog } from './pages/Blog/Blog';
import { Usuarios } from './pages/Usuarios/Usuarios';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Blog' element={<Blog />} />
          <Route path='/Contato' element={<Contato />} />
          <Route path='/Usuarios' element={<Usuarios />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
