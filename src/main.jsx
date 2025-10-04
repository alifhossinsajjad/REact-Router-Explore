import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
import RootLayout from './Layouts/RootLayout.jsx'
import PlantsDetails from './Pages/PlantsDetails.jsx'
import axios from 'axios'
import LoadingSpinner from './Components/LoadingSpinner.jsx'
import Cart from './Pages/Cart.jsx'


const router = createBrowserRouter ( [
  {
    path : '/',
    Component : RootLayout,
    hydrateFallbackElement : <LoadingSpinner/>,
    children : [
      {
        path : '/',
        Component : Home,
        loader : () => fetch('https://openapi.programming-hero.com/api/plants')
      },
      {
        path : '/contact',
        Component : Contact,
      },
      {
        path : '/about',
        Component : About,
      },
      {
        path : '/plantsDetails/:id',
        Component : PlantsDetails,
        loader : ({params}) => 
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`)
      },
      {
        path : '/cart',
        Component : Cart,
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
