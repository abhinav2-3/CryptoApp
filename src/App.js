import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coins from "./Components/Coins";
import Exchange from "./Components/Exchange";
import CoinsDetail from "./Components/CoinsDetail";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/coins/:id" element={<CoinsDetail />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
