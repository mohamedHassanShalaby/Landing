import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Powerfull from "./component/Powerfull";
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/powerfull" element={<Powerfull />} />
        <Route path="/contact" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
