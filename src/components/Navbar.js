import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  useEffect(() => {
    const collapseEl = document.getElementById('navbarNav')
    if (collapseEl?.classList.contains('show')) {
      collapseEl.classList.remove('show')
    }
  }, [location])

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          🐾 El Blog De Maggie 🐾
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                Sobre mí
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/blog'>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
