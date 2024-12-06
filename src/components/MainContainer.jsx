import { Routes, Route } from "react-router-dom";
import Blue from './Blue';
import Red from './Red';
import Home from './Home';
import Orange from './Orange';
import Green from './Green';
import Purple from './Purple';
const MainContainer = () => {
    return ( 
        <div id="main-section">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blue" element={<Blue/>}/>
                <Route path="/red" element={<Red/>}/>
                <Route path="/orange" element={<Orange/>}/>
                <Route path="/green" element={<Green/>}/>
                <Route path="/purple" element={<Purple/>}/>
            </Routes>
        </div>
     );
}
 
export default MainContainer;