import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import Home from '../pages/Home/Home.tsx';
import Introduction from '../pages/Introduction';
import Python from '../pages/Python';
import Fundamentos from '../Cursos/Python/Fundamentos/fundamentos_0';
import { Outlet } from 'react-router-dom';
import Variables from '../Cursos/Introduccion/Variables/Variables.tsx';
import About from '../pages/About.tsx';
import PythonPlayground from '../Cursos/Python/PythonPlayground.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Outlet /></Layout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'introduction',
        element: <Outlet />,
        children:[
          {
            index: true,
            element: <Introduction />,
          },
          {
            path: 'variables',
            element: <Variables />,
          }
        ]
      },
      {
        path: 'python',
        element: <Outlet />, // Python agrupa subrutas
        children: [
          {
            index: true,
            element: <Python />,
          },
          {
            path: 'PythonPlayground',
            element: <PythonPlayground />,
          },
          {
            path: 'fundamentos',
            element: <Fundamentos />,
          },
        ],
      },
      {
        path: 'about',
        element: <About />,
      }
    ],
  },
]);

export default router;
