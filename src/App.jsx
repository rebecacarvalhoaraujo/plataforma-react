import './App.css';
import { Menu } from './componets/Menu/Menu';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Blog } from './pages/Usuarios/Usuarios';


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
