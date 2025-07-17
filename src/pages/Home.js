import maggie1 from '../assets/images/Maggie1.jpg'
import maggie2 from '../assets/images/Maggie2.jpg'

function Home() {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <h1>Bienvenido al blog de Maggie 🐾</h1>
        <p>
          Bienvenidos a las aventuras de Maggie En este Blog te sumergiras en un mundo lleno de una border collie llena
          de energia, donde cada historia es un viaje y cada consejo te invita a vivir una vida mas activa junto a tu
          mejor amigo de cuatro patas.{' '}
        </p>
        <p>
          Descubri la adrenalina del Canicross, rutas sorprendentes, y aventuras inolvidables que despertaran el
          espiritu libre que llevas dentro. ¡Unete a nuestras travesias y deja que la pasion por la aventura te inspire
          cada dia! Por aca te estaremos comprtiendo consejos, tips y experiencias en este proceso de una border collie
          en la ciudad, lejos de las ovejas pero con trabajo diario para ser equilibrada y poder disfrutar este viaje...
        </p>
        <p>¡Síguenos para conocer más sobre su día a día y curiosidades sobre los perritos!</p>
      </div>
      <div className='col-md-6'>
        <img src={maggie2} className='img-fluid mb-3 rounded' alt='Maggie jugando' />
      </div>
    </div>
  )
}

export default Home
