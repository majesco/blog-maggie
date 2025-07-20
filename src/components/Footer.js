function Footer() {
  return (
    <footer className='bg-primary text-white text-center text-lg-start mt-auto'>
      <div className='container p-4'>
        <p className='text-center mb-0'>
          🐾 Blog de Maggie © {new Date().getFullYear()} - Todos los derechos reservados
          {' • '}
          <a
            href='https://www.instagram.com/mag.giethebordercollie/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-decoration-none ms-1'>
            <i className='bi bi-instagram'></i> Instagram
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
