import './App.css'
import Header from "./components/applications/header/Header.tsx";
import Home from "./components/applications/home/Home.tsx";

function App() {

  return (
    <div className="main_background fb-x-center">
        <div className="main_wrapper">
            <Header/>
            <Home/>
        </div>
    </div>
  )
}

export default App
