import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Register } from "./components/register";
import { SignIn } from "./components/sign-in";
import { UserPage } from "./pages/user-page";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loadUser = (user) => {
    setUser(user);
  };

  const logOut = (user) => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Register loadUser={loadUser} />} />
        <Route path="/signIn" element={<SignIn loadUser={loadUser} />} />
        <Route
          path="/user"
          element={<UserPage user={user} logOut={logOut} />}
        />
      </Routes>
    </div>
  );
}

export default App;
