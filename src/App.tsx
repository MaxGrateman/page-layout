import './App.css'
import Header from "./components/applications/header/Header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/applications/home/Home.tsx";
import Rooms from "./components/applications/rooms/Rooms.tsx";

function App() {

  return (
      <BrowserRouter basename='/'>
          <div className="main_background fb-x-center">
              <div className="main_wrapper">
                  <Header />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/rooms" element={<Rooms />} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  )
}

export default App
