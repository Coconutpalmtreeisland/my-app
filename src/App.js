import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Youtuber from './pages/Youtuber'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/today' element={<Today />} />
                <Route path='/youtuber' element={<Youtuber />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
