import {HashRouter, Route, Routes} from "react-router-dom";
import App from "../../../App.tsx";

function Nav() {
    return(
        <HashRouter basename='/app' future={{ v7_startTransition: true }}>
            <Routes>
                <Route path="/" element={<App/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Nav;