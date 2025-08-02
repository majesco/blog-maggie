import { useParams } from 'react-router-dom'
import posts from '../data/posts'
import DOMPurify from 'dompurify'

function PostDetail() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return <h2 className='text-center mt-5'>Post no encontrado 🐾</h2>
  }

  return (
    <div className='container mt-5'>
      <h1 className='mb-4'>{post.title}</h1>
      <p className='lead'>{post.description}</p>

      {post.content.map((block, index) => {
        if (block.type === 'text') {
          return (
            <div key={index} className='mb-4' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(block.value) }} />
          )
        }
        if (block.type === 'image') {
          return (
            <div key={index} className='mb-4 text-center'>
              <img
                src={block.src}
                alt={block.caption}
                className='img-fluid rounded mb-2'
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
              <p className='text-muted'>{block.caption}</p>
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

export default PostDetail
