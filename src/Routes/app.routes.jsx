import { Routes, Route } from "react-router-dom";

import { New } from "../Pages/New";
import { Home } from "../Pages/Home";
import { Details } from "../Pages/Details";
import { Profile } from "../Pages/Profile";

export function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}