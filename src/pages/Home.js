import maggieHome1 from '../assets/images/maggie-home1.jpg'
import maggieHome2 from '../assets/images/maggie-home2.jpg'
import maggieHome3 from '../assets/images/maggie-home3.jpg'

function Home() {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        {/* CARRUSEL */}
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <div id='maggieCarousel' className='carousel slide' data-bs-ride='carousel'>
            <div className='carousel-inner rounded shadow'>
              <div className='carousel-item active'>
                <img src={maggieHome1} className='w-100' alt='Maggie 1' />
              </div>
              <div className='carousel-item'>
                <img src={maggieHome2} className=' w-100' alt='Maggie 2' />
              </div>
              <div className='carousel-item'>
                <img src={maggieHome3} className='w-100' alt='Maggie 3' />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#maggieCarousel'
              data-bs-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#maggieCarousel'
              data-bs-slide='next'>
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>

        <div className='col-12 col-md-6'>
          <h1 className='mb-4'>Hola, soy Maggie</h1>
          <p className='lead'>(No Maggie Simpson… ¡y tampoco la sopa Maggi!) ¡Soy Maggie, la Border Collie! 🐾</p>
          <p>
            Nací en octubre y vivo en la capital de Costa Rica, ese hermoso país justo en el corazón del continente
            americano. Soy amada y consentida por mis humanos, quienes, al igual que yo, son aventureros de corazón.
            Aunque no tengo ovejas que pastorear en esta ciudad, mis humanos se las ingenian para mantenerme activa,
            feliz y saludable.
          </p>
          <p>
            Vivir en la ciudad puede ser todo un reto: hay ruido, carros, motos, personas por todas partes… ¡y poca
            calma! Pero juntos, en equipo, trabajamos todos los días para canalizar mis instintos de perrita de trabajo
            y cubrir mis verdaderas necesidades.
          </p>
          <p>
            Disfruto muchísimo del aire libre, de las caminatas largas, de unas buenas croquetitas… ¡y sobre todo de las
            carreras de canicross! Si vieras mi carita cuando salimos a correr… ¡voy con la lengua afuera y una sonrisa
            de oreja a oreja mientras llevo a mi humana casi volando detrás!
          </p>
          <p>
            En este blog vas a encontrar todo sobre mis competencias, aventuras, descubrimientos y muchísimas cosas
            útiles que nos han ayudado a ser un gran equipo humano-perruno. Porque más allá de ser una atleta de cuatro
            patas, aspiro cada día a ser lo que más importa: <p className='lead'>una perrita feliz.</p>
          </p>
          <p>
            Gracias al amor y la dedicación de mis humanos, aprendemos a convivir en armonía… ¡y a disfrutar cada día al
            máximo!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
