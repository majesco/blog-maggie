const posts = [
  {
    id: 1,
    slug: 'un-dia-en-la-sabana',
    title: 'Un día en la Sabana 🌳',
    description: 'Un paseo soleado lleno de aventuras',
    coverImage: require('../assets/images/Maggie1.jpg'), // imagen principal
    content: [
      { type: 'text', value: 'Fue un día soleado y perfecto para correr por la Sabana. 🐾' },
      {
        type: 'image',
        src: require('../assets/images/Maggie1.jpg'),
        caption: 'Corriendo libre en el parque'
      },
      { type: 'text', value: 'Me encontré con muchos otros perritos y jugamos juntos hasta cansarnos.' },
      {
        type: 'image',
        src: require('../assets/images/Maggie1.jpg'),
        caption: 'Descansando bajo un árbol'
      },
      { type: 'text', value: 'Luego, mi humano me dio unas deliciosas galletas de premio.' },
      {
        type: 'image',
        src: require('../assets/images/Maggie1.jpg'),
        caption: 'Jugando con mi pelota favorita'
      }
    ]
  }
]

export default posts
