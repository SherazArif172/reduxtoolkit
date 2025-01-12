import logo from "./logo.svg";
import "./App.css";
import Form from "./_components/Form";
import Navbar from "./_components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./_components/Read";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Form />} path="/" />
          <Route element={<Read />} path="/read" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
