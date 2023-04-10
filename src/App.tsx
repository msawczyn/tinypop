import {
   BrowserRouter,
   Routes,
   Route,
} from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Shop from './pages/Shop';
import Contact from './pages/Contact';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'reset-css';
import './theme/variables.css';

const App = () => {
   return (
      <div className="app">
         <BrowserRouter>
            <Header />
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Portfolio" element={<Portfolio />} />
               <Route path="/Shop" element={<Shop />} />
               <Route path="/Contact" element={<Contact />} />
            </Routes>
            <Footer/>
         </BrowserRouter>
      </div>
   );
};

export default App;
