import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'
import Playlist from './pages/Playlist'
import Like from './pages/Like'
import Navbar from './components/Navbar'
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/playlist' element={<Playlist/>}/>
    <Route path='/like' element={<Like/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
