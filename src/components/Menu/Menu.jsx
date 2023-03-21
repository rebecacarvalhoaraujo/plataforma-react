import { Link } from "react-router-dom";

export function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </div>
  )
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