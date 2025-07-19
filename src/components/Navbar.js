import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          🐾 El Blog De Maggie 🐾
        </a>
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
              <Link className='nav-link' to='/About'>
                Sobre mi
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/Blog'>
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
