import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout.tsx';
import Home from '../pages/Home';
import Introduction from '../pages/Introduction';
import JS from '../pages/JS';
import Python from '../pages/Python';
import Fundamentos from '../Cursos/Python/Fundamentos/fundamentos_0';
import { Outlet } from 'react-router-dom';
import APIs from '../pages/APIs';
import Variables from '../Cursos/Introduccion/Variables/Variables.tsx';

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
        path: 'js',
        element: <JS />,
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
            path: 'fundamentos',
            element: <Fundamentos />,
          },
        ],
      },
      {
        path: 'apis',
        element: <APIs />,
      },
    ],
  },
]);

export default router;
