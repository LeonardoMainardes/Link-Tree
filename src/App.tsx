import { createBrowserRouter } from "react-router-dom";

import { Admin } from "./pages/admin";
import { Networks } from "./pages/networks";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Notfound } from "./pages/notfound";

import { Private } from "./routes/Private";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/admin',
    element: <Private> <Admin/> </Private>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin/social',
    element: <Private> <Networks/> </Private>
  },
  {
    path: '*',
    element: <Notfound/>
  }
])

export {router}