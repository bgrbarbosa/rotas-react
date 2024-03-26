import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import HomePage from './Page/HomePage'
import Produto from './Page/Produto'
import Sobre from './Page/Sobre'
import PageNotFound from './Page/PageNotFound'
import Items from './Page/Produto/Items'
import Computers from './Page/Produto/Computers'
import Eletronics from './Page/Produto/Eletronics'
import Books from './Page/Produto/Books'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}>
            <Route index element={<Navigate to="/home" />} />
            <Route path='/home' element = {<HomePage/>}/>
            
            <Route path='produto' element = {<Produto/>}>
              <Route path="computers" element={<Computers />} />
              <Route path="eletronics" element={<Eletronics />} />
              <Route path="books" element={<Books />} />
            </Route>  
            
            <Route path='/sobre' element = {<Sobre/>}/>
            <Route path='/pagenotfound' element = {<PageNotFound/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/not-found" />} />
          <Route path="/not-found" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
