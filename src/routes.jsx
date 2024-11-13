import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Common/Home/Home.jsx";
import Login from "./Admin/Login/Login.jsx";
import Project from "./Admin/Project/Project.jsx";

export default function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home/>}></Route>
                <Route path="/login" exact element={<Login/>}></Route>
                <Route path="/project" exact element={<Project/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}