import { Routes, Route } from 'react-router-dom'
import { Register } from "./components/register";
import { SignIn } from "./components/sign-in"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Register />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
