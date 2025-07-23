import maggie1 from '../assets/images/maggie-sabana.jpeg'
import maggie2 from '../assets/images/maggie-pico-blanco.jpeg'
import maggie3 from '../assets/images/maggie-panoramic.jpeg'

function Home() {
  return (
    <div className='container'>
      <div
        id='maggieCarousel'
        className='carousel slide'
        data-bs-ride='carousel'
        style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginTop: '-56px',
          overflow: 'hidden'
        }}>
        {' '}
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#maggieCarousel'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'></button>
          <button type='button' data-bs-target='#maggieCarousel' data-bs-slide-to='1' aria-label='Slide 2'></button>
          <button type='button' data-bs-target='#maggieCarousel' data-bs-slide-to='2' aria-label='Slide 3'></button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={maggie1} className='d-block w-100' alt='Maggie 1' />{' '}
          </div>
          <div className='carousel-item'>
            <img src={maggie2} className='d-block w-100' alt='Maggie 2' />{' '}
          </div>
          <div className='carousel-item'>
            <img src={maggie3} className='d-block w-100' alt='Maggie 1' />{' '}
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#maggieCarousel' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#maggieCarousel' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>

      <h1 className='mb-4'>Hola, soy Maggie 🐾</h1>
      <p className='lead'>Hola soy Maggie, no Maggie Sipmson ni la sopa Maggie soy, Maggie la Border Collie.</p>
      <p>
        Nacida en octúbre, viviendo en la capital de Costa Rica, país en la mitad del continente e americano, soy amada
        y consentida por mis humanos, que son aventureros como yo. Disfruto mucho del tiempo al aire libre, las
        caminatas, las buenas croquetas y de las carreras de canicross, y es que tienen que ver mis caras cuando ando
        corriendo feliz con la lengua afuera.
      </p>
      <p>
        Mis humanos Nicolás y Yanina me cuidan y guían para ser una perrita feliz y equilibrada pero sin olvidar que soy
        una perrita…
      </p>
      <p>
        En este blog te mostrare el mundo desde mi perspectiva, mis aventuras, competencias de Cani-Cross y mi día a
        día!
      </p>
    </div>
  )
}

export default Home
