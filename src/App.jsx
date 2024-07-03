import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Users } from "./pages/users/users";
import { UserDetail } from "./pages/users/user-detail";
import { Contact } from "./pages/contact/contact";
 import { MainLayout } from "./layout/main-layout";

function App() {
 return ( 
    <Routes>
      <Route path="/" element={<MainLayout />} >
      <Route index element={<Home />} />
      <Route path="users" element={<Users />} />
      <Route path="users/:name/:turaxon" element={<UserDetail />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<h1>page not found!!!</h1>} />
      </Route>
    </Routes>
    
  );

}

export default App
