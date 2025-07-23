import maggie1 from '../assets/images/maggie-panoramic.jpeg'
import maggie2 from '../assets/images/maggie-panoramic.jpeg'
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
            <img src={maggie1} className='d-block w-100' alt='Maggie 1' />{' '}
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
      <p className='lead'>¡Bienvenido a mis aventuras! Corre, juega y disfruta conmigo.</p>
    </div>
  )
}

export default Home
