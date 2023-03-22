import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

export function Menu() {
    return (
        <div className="menu">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Menu</Navbar.Brand>
                    <Nav className="me-auto">
                        <Button variant="link">
                            <Link to="/">Home</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/blog">Blog</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/contato">Contato</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/usuarios">Usuários</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button variant="link">
                            <Link to="/produtos">Produtos</Link>
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

// import 

// export function menu() {
//     return (
//         <div className="menu">
//             <ul>
//                 <li>
//                     <a href="/">Home</a>
//                 </li>
//                 <li>
//                     <a href="/blog">Blog</a>
//                 </li>
//                 <li>
//                     <a href="/contato">Contato</a>
//                 </li>
//             </ul>
//         </div>
//     );
// }