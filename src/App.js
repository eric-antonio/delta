import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global/globalStyle";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
