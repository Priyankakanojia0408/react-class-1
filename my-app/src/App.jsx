import Navbar from "./components/Narbar.jsx";

import{BrowserRouter,Routes,Route} from "react-router-dom";

import Project from "./components/project.jsx";
import Home from "./Pages/Home.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import About from "./Pages/About.jsx";

function App() {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;