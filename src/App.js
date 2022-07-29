import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/LoginForm";
import RoutesFunc from "./components/routes";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/admin/*" element={<RoutesFunc />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
