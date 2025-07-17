import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'>
      <div className='container'>
        <Link className='navbar-brand' to='/'>
          🐾 El Blog de Maggie 🐾
        </Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/' end>
                Inicio
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/about'>
                Sobre mí
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/blog'>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
