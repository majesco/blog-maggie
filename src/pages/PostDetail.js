import { useParams, Link } from 'react-router-dom'
import posts from '../data/posts'

function PostDetail() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className='container mt-5 pt-5'>
        <h1>😢 Post no encontrado</h1>
        <Link to='/blog' className='btn btn-secondary mt-3'>
          Volver al Blog
        </Link>
      </div>
    )
  }

  return (
    <div className='container mt-5 pt-5'>
      <h1>{post.title}</h1>
      <img src={post.image} className='img-fluid rounded mb-4' alt={post.title} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link to='/blog' className='btn btn-secondary mt-4'>
        ← Volver al Blog
      </Link>
    </div>
  )
}

export default PostDetail
