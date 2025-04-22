import { BrowserRouter as Router, Routes, Route, Link, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './App.css'
import Introduction from './pages/Introduction'
import TailwindExplanations from './pages/TailwindExplanations'
import JS from './pages/JS'
import Layout from './Layout'
import Homepage from './pages/Home'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={<Outlet />} />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/introduction",
        element: <Introduction />,
      },
      {
        path: "/tailwind-explanations",
        element: <TailwindExplanations />,
      },
      {
        path: "/js",
        element: <JS />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
