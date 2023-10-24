import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Today from './pages/Today'
import Youtuber from './pages/Youtuber'
import Not from './pages/Not'
import Search from './pages/Search'
import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'
import ScrollTo from './utils/scrollTo'
import Video from './pages/Video'
import Channel from './pages/Channel'

const App = () => {
    return (
        <BrowserRouter>
            <ScrollTo />
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/today' element={<Today />} />
                    <Route path='/youtuber' element={<Youtuber />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path='/channel/:channelId' element={<Channel />} />
                    <Route path='*' element={<Not />} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    )
}

export default App
