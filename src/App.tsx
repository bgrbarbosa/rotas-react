import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './Page/Home'
import HomePage from './Page/HomePage'
import Produto from './Page/Produto'
import Sobre from './Page/Sobre'
import PageNotFound from './Page/PageNotFound'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}>
            <Route index element = {<HomePage/>}/>
            <Route path='/produto' element = {<Produto/>}/>
            <Route path='/sobre' element = {<Sobre/>}/>
            <Route path='/pagenotfound' element = {<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
