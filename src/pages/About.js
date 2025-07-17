import maggie1 from '../assets/images/Maggie1.jpg'

function About() {
  return (
    <div className='container mt-5 pt-5 text-center'>
      <img
        src={maggie1}
        className='rounded-circle mb-3'
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
        alt='Maggie jugando'
      />
      <h1 className='mt-3'>Hola, soy Maggie 🐶</h1>
      <p className='lead'>Soy una perrita feliz que ama correr, jugar y comer muchas galletas. 🦴</p>
      <p>
        Vivo con mi humano, quien me consiente mucho y me ayuda a escribir este blog. Aquí comparto mis aventuras, mis
        comidas favoritas y los mejores lugares para pasear.
      </p>
      <p>¡Acompáñame en esta aventura perruna! 🐕💛</p>
    </div>
  )
}

export default About
