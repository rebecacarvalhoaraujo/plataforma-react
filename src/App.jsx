import './App.css';
import { Menu } from './componets/Menu/Menu';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Blog' element={<Blog />} />
          <Route path='/Contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
