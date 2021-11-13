import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "pages/Home";
import Register from "pages/Register";
import Login from "pages/Login";
import PrivateRoutes from "pages/PrivateRoutes";
import { useSelector } from "react-redux";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className=" h-screen overflow-hidden">
      <Router>
        <Routes>
          <Route
            path="/login"
            element={currentUser ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/Register"
            element={currentUser ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/"
            element={
              <PrivateRoutes>
                <Home />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
