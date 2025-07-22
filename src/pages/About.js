import maggie1 from '../assets/images/Maggie1.jpg'

function About() {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>
        {/* Columna de la foto */}
        <div className='col-md-4 text-center mb-4 mb-md-0'>
          <img
            src={maggie1}
            className='rounded-circle img-fluid'
            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
            alt='Maggie jugando'
          />
        </div>

        {/* Columna del texto */}
        <div className='col-md-8'>
          <h1 className='mt-3 mt-md-0'>Hola, soy Maggie 🐶</h1>
          <p className='lead'>Soy una perrita feliz que ama correr, jugar y comer muchas galletas. 🦴</p>
          <p>
            Vivo con mi humano, quien me consiente mucho y me ayuda a escribir este blog. Aquí comparto mis aventuras,
            mis comidas favoritas y los mejores lugares para pasear.
          </p>
          <p>¡Acompáñame en esta aventura perruna! 🐕💛</p>
        </div>
      </div>
    </div>
  )
}

export default About
