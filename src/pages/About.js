import maggie1 from '../assets/images/about.jpg'

function About() {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>
        {/* Columna de la foto */}
        <div className='col-md-4 text-center mb-4 mb-md-0'>
          <img
            src={maggie1}
            className='rounded-circle img-fluid'
            style={{ width: '300px', height: '300px', objectFit: 'cover' }}
            alt='Maggie jugando'
          />
        </div>

        {/* Columna del texto */}
        <div className='col-md-8'>
          <h1 className='mt-3 mt-md-0'>Acerca de nosotras</h1>
          <p className='lead'>Soy una perrita feliz que ama correr, jugar y comer muchas galletas. 🦴</p>
          <p>
            Desde que Maggie llegó a mi vida siendo una cachorrita, me convertí —sin saberlo— en su guía, su entrenadora
            y su mejor amiga. Con cero experiencia en educación canina ni conocimientos sobre comportamiento animal,
            supe que necesitaba aprender desde cero cómo cuidar a una Border Collie: una raza inteligente, activa y con
            necesidades muy particulares.
          </p>
          <p>
            No ha sido un camino lineal. Algunos días el tiempo ha sido escaso, otros han estado llenos de avances. Pero
            si algo ha sostenido este proceso ha sido la disciplina, la estructura y, sobre todo, el amor. Me comprometí
            a entenderla, a cubrir sus necesidades como perrita de trabajo en un entorno urbano, y a construir con ella
            una vida en armonía, sin importar el lugar o la situación. Aún nos falta mucho por mejorar, pero seguimos en
            el proceso con la misma entrega y ganas de aprender cada día.
          </p>
          <p>
            Ese compromiso ha fortalecido profundamente nuestro vínculo. Hoy, la comunicación entre Maggie y yo fluye de
            forma más natural, sencilla y efectiva. Todo lo que hacemos tiene un propósito: que Maggie sea feliz,
            tranquila, y pueda convivir con personas y otros perros de manera equilibrada.
          </p>
          <p>
            En este blog compartimos nuestras <b>experiencias, anécdotas y herramientas prácticas</b>, que nos han
            ayudado tanto en las competencias como en la vida diaria. Cuando comenzamos este camino, nos habría
            encantado encontrar historias similares, conocer a otras personas con peluditos intensos, y aprender de sus
            vivencias. Por eso, creemos que lo que compartimos aquí puede ser de utilidad para quienes están
            construyendo su propio camino junto a sus perros, con paciencia, intención y amor.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
