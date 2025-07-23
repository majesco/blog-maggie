import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import PostDetail from './pages/PostDetail'

function App() {
  return (
    <div
      style={{
        backgroundColor: '#E6E6FA', // Lila
        minHeight: '100vh', // asegura cubrir toda la altura
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Router basename={process.env.NODE_ENV === 'production' ? '/blog-maggie' : '/'}>
        <Navbar />
        <main className='container mt-5 pt-5 flex-grow-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:slug' element={<PostDetail />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
