import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "pages/Register";
import Login from "pages/Login";
import PrivateRoutes from "pages/PrivateRoutes";
import { useSelector } from "react-redux";
import Profile from "pages/Profile";
import Home from "pages/Home";
import Search from "pages/Search";

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
          <Route
            path="/profile/:id"
            element={
              <PrivateRoutes>
                <Profile />
              </PrivateRoutes>
            }
          />
          <Route
            path="/search"
            element={
              <PrivateRoutes>
                <Search />
              </PrivateRoutes>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
