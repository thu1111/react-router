import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <div id="footer">
            <Link className="footlink home" to={"/"}>Home</Link>
            <Link className="footlink blue" to={"/blue"}>Blue</Link>
            <Link className="footlink red" to={"/red"}>Red</Link>
            <Link className="footlink orange" to={"/orange"}>Orange</Link>
            <Link className="footlink green" to={"/green"}>Green</Link>
            <Link className="footlink purple" to={"/purple"}>Purple</Link>
        </div>
     );
}
 
export default Footer;