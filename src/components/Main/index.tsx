import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "../../pages/Introduction";
import LandingPage from '../../pages/Landing'
import News from "../../pages/News";

const Main = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/introduction" element={<Introduction/>}/>
                <Route path="/news" element={<News/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Main;