import './App.css';
import { BasicTable } from './Pages/BasicTable';
import {
  createBrowserRouter, RouterProvider
} from 'react-router-dom'
import Home from './Pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path:"/screen1",
      element:<BasicTable screen="screen1"/>
    },
    {
      path:"/screen2",
      element:<BasicTable screen="two"/>
    },
    {
      path:"/",
      element:<Home/>
    }
  ])
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
