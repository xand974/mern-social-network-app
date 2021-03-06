import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "pages/Register";
import Login from "pages/Login";
import PrivateRoutes from "pages/PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";
import Profile from "pages/Profile";
import Home from "pages/Home";
import Search from "pages/Search";
import jwt from "jwt-decode";
import { useEffect } from "react";
import { signOut, checkAuth } from "redux/apiCalls";
import UpdateUser from "pages/UpdateUser";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      const decodedToken = jwt(currentUser?.accessToken);
      if (
        checkAuth(decodedToken, dispatch) &&
        decodedToken?.exp * 1000 < Date.now()
      ) {
        signOut(dispatch, null, false);
        window.location.reload();
      }
    }
  }, [currentUser, dispatch]);

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
          <Route
            path="/update/:id"
            element={
              <PrivateRoutes>
                <UpdateUser />
              </PrivateRoutes>
            }
          />
          <Route
            path="*"
            element={
              currentUser ? <Navigate to="/" /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
