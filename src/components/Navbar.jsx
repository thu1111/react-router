import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div id="navbar">
            <Link className="navlink " to={"/"}>Home</Link>
            <Link className="navlink" to={"/blue"}>Blue</Link>
            <Link className="navlink" to={"/red"}>Red</Link>
            <Link className="navlink" to={"/orange"}>Orange</Link>
            <Link className="navlink" to={"/green"}>Green</Link>
            <Link className="navlink" to={"/purple"}>Purple</Link>
        </div>
     );
}
 
export default Navbar;