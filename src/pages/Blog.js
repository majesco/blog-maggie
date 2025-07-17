import bannerImg from '../assets/images/snow-panoramic.jpeg'
import post1 from '../assets/images/Maggie1.jpg'
import post2 from '../assets/images/Maggie2.jpg'
import post3 from '../assets/images/Maggie3.jpg'

function Blog() {
  return (
    <>
      {/* Banner horizontal full-width */}
      <div>
        <img
          src={bannerImg}
          alt='Banner del blog'
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover'
          }}
        />
      </div>

      {/* Contenedor de las cards */}
      <div className='container mt-5'>
        <div className='row'>
          {/* Card 1 */}
          <div className='col-md-4 mb-4'>
            <div className='card h-100'>
              <img src={post1} className='card-img-top' alt='Post 1' style={{ height: '200px', objectFit: 'cover' }} />
              <div className='card-body'>
                <h5 className='card-title'>Primer paseo en el parque 🐾</h5>
                <p className='card-text'>Una breve descripción del primer post (placeholder).</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='col-md-4 mb-4'>
            <div className='card h-100'>
              <img src={post2} className='card-img-top' alt='Post 2' style={{ height: '200px', objectFit: 'cover' }} />
              <div className='card-body'>
                <h5 className='card-title'>Aventura en la playa 🏖️</h5>
                <p className='card-text'>Una breve descripción del segundo post (placeholder).</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='col-md-4 mb-4'>
            <div className='card h-100'>
              <img src={post3} className='card-img-top' alt='Post 3' style={{ height: '200px', objectFit: 'cover' }} />
              <div className='card-body'>
                <h5 className='card-title'>Mis galletas favoritas 🍪</h5>
                <p className='card-text'>Una breve descripción del tercer post (placeholder).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
