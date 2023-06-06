import HomePage from "./pages/HomePage/HomePage";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
      

    </div>
  );
}

export default App;
