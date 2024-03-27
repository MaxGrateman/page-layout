import './App.css'
import Header from "./components/applications/header/Header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/applications/home/Home.tsx";
import Rooms from "./components/applications/rooms/Rooms.tsx";
import Contacts from "./components/applications/contacts/Contacts.tsx";
import Entertain from "./components/applications/entertain/Entertain.tsx";

function App() {

  return (
      <BrowserRouter basename='/'>
          <div className="main_background fb-x-center">
              <div className="main_wrapper">
                  <Header />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/contacts" element={<Contacts/>} />
                      <Route path="/entertainment" element={<Entertain/>}/>
                      <Route path="/room/:id" element={<Rooms/>} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  )
}

export default App
