import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostList from "./pages/PostList";
import CreatePost from "./pages/CreatePost";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <PostList />
              </PrivateRoute>
            }
          />
          <Route
  path="/create"
  element={
    <PrivateRoute>
      <CreatePost />
    </PrivateRoute>
  }
/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
