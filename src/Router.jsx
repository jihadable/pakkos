import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room"
import Title from "./pages/Title";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/room" element={<Room />}></Route>
                <Route path="/room/title" element={<Title />}></Route>
            </Routes>
        </BrowserRouter>
    )
}