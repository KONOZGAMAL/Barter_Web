import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from './Components/dashboard/Layout/Header';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Reviews from './Pages/Reviews/Reviews';
import Register from './Components/Main/Users/Register'
import Footer from './Components/dashboard/Layout/Footer/Footer'
function App() {
  return (
    <>
       <BrowserRouter>
        <Header/>
        <Routes>
           {/* ==================== Header Navlink Start here =================== */}
          <Route path="/" element={<Home />} />
          <Route path="/services"  element={<Services />} />
          <Route path="/reviews"  element={<Reviews />} />
          <Route path="/register"  element={<Register />} />
           {/* ==================== Header Navlink End here =================== */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
