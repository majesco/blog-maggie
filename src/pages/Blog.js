import posts from '../data/posts'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
      {/* Banner */}
      <div
        style={{
          width: '100vw',
          height: '60vh', // 60% de la altura de la ventana
          marginLeft: 'calc(-50vw + 50%)',
          overflow: 'hidden',
          marginTop: '-56px'
        }}>
        <img
          src={require('../assets/images/maggie-don-manuel.jpeg')}
          alt='Banner del blog'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      <div className='container mt-5'>
        <h1 className='mb-4'>Últimas Aventuras 🐶</h1>
        <div className='row'>
          {posts.map((post) => (
            <div key={post.id} className='col-md-4 mb-4'>
              <div className='card h-100'>
                <img
                  src={post.coverImage} // 👈 ahora sí usa la portada correcta
                  className='card-img-top'
                  alt={post.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{post.title}</h5>
                  <p className='card-text'>{post.description}</p>
                  <Link to={`/blog/${post.slug}`} className='btn btn-primary'>
                    Leer más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog
