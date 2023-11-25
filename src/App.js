import {BrowserRouter as Routes, Router, Route} from "react-router-dom"
import Home from "./pages/Home"
import Test from "./pages/Test";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;