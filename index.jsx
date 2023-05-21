import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Test from "./pages/Test";
import Dogs from "./pages/Dogs";
import DogDetail from "./pages/DogDetail";
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/dogs" element={<Dogs />} />
                  <Route path="/test" element={<Test />} />
                  <Route path="/dogs/:breed" element={<DogDetail />} />
            </Route>       
        </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);