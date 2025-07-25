const posts = [
  {
    id: 1,
    slug: 'un-dia-en-la-sabana',
    title: 'Correr con tu amigo de cuatro patas 🦮',
    description: 'Bienvenida al mundo del Cani-Cross',
    coverImage: require('../assets/images/post1-front.jpg'), // imagen principal
    content: [
      {
        type: 'text',
        value:
          'Soy probablemente la persona menos experimentada en el mundo del Canicross. Descubrí esta disciplina hace poco más de tres años, cuando buscaba alguna actividad al aire libre que pudiera compartir con mi perrita Maggie, una Border Collie que llegó a mi vida justo cuando más la necesitaba. Desde entonces, se convirtió en mi mejor amiga, mi compañera incondicional.'
      },
      {
        type: 'text',
        value:
          'Empezamos simplemente caminando… luego corriendo… y sin darnos cuenta, nuestras rutinas se transformaron. Cada momento juntas era pura alegría. Correr con ella se convirtió en un espacio de conexión, un escape de la rutina diaria y, al mismo tiempo, una forma de volver a tierra firme. En resumen, Maggie y el Canicross me salvaron de muchas maneras.'
      },
      {
        type: 'image',
        src: require('../assets/images/post1-1.jpg'),
        caption: 'Trail Dog Run Laguna Don Manuel, 2024 - © Rey Mono'
      },
      {
        type: 'text',
        value:
          'Recuerdo claramente cómo descubrimos esta hermosa disciplina. Un día, mientras buscaba opciones deportivas para hacer con Maggie (quien desde pequeña amaba correr), encontré en redes sociales una publicación del Team León sobre un evento llamado Trail Dog Run. El Canicross era algo totalmente desconocido y desafiante para mí, pero decidí lanzarme a la aventura con mi peludita. Aquella primera experiencia fue asombrosa: la adrenalina, los nervios de no saber si lo haríamos bien… pero ahí íbamos, porque ella se veía feliz.'
      },
      {
        type: 'text',
        value:
          'Y así empezó nuestra gran aventura juntas. Nuestra primera carrera fue TDR Finca Las Virtudes. Aún recuerdo la lluvia torrencial, el frío y todo el barro. Quedamos descalificadas porque nos perdimos en el recorrido, pero lo que sentimos ese día fue único: estábamos sucias, mojadas, agotadas… pero de regreso a casa íbamos felices. Y eso bastó para saber que queríamos más.'
      },
      {
        type: 'image',
        src: require('../assets/images/post1-2.jpg'),
        caption: 'Trail Dog Run Volcán Turrialba, 2023 - © The Pup'
      },
      {
        type: 'text',
        value:
          'Desde entonces, hemos participado en varias ediciones: Piedra de Fuego, TDR Monteverde, TDR Volcán Turrialba… y muchas más. Cada una con su propia historia. Algunas veces logramos mejorar nuestros tiempos, y en una ocasión incluso obtuvimos un tercer lugar. ¡Fue como ganarse la lotería! Otras veces tuvimos que retirarnos por lesiones y pausas necesarias para recuperarnos. El camino no ha sido fácil, pero ha valido cada paso, cada esfuerzo.'
      },
      {
        type: 'text',
        value:
          'Para mí, lo más importante ha sido cómo esta experiencia ha fortalecido nuestro vínculo humano-perro. Verla correr a mi lado, pendiente de cada paso, moviendo su colita y ladrando de emoción… es algo que no tiene precio. Cada cuesta, cada caída, cada meta cruzada es una victoria compartida.'
      },
      {
        type: 'image',
        src: require('../assets/images/post1-3.jpg'),
        caption: 'Trail Dog Run Monteverde, 2022 - © The Pup'
      },
      {
        type: 'text',
        value:
          'Estos eventos no solo nos permiten competir, sino también conocer a otras personas apasionadas por este deporte tan retador. Ver sus rostros al cruzar la meta junto a sus mejores amigos de cuatro patas es indescriptible. Sentir que somos parte de esta comunidad, que cada día crece más, es un verdadero privilegio.'
      },
      {
        type: 'text',
        value:
          'Maggie es mi equipo. Y eso es lo que realmente cuenta. No importa cuántos kilómetros corramos, cuántas metas alcancemos, o cuántas medallas ganemos… yo ya gané con solo tenerla en mi vida.'
      },
      {
        type: 'text',
        value:
          'Hacer deporte con tu perro es una de las experiencias más bonitas que existen. Basta con mirarles a los ojos para saber que todo esfuerzo vale la pena. Lo más difícil es aceptar que no estarán para siempre… pero mientras estén, vamos a correr, caminar y vivir juntas intensamente.'
      },
      {
        type: 'text',
        value: 'Porque Maggie no es solo una mascota…'
      },
      {
        type: 'text',
        value: 'Es mi familia.'
      },
      {
        type: 'text',
        value: 'Es mi equipo.'
      },
      {
        type: 'text',
        value: 'Y esto, más que Canicross… es vivir.'
      }
    ]
  },
  {
    id: 2,
    slug: 'caminata-perruna-en-los-cerros-de-escazu',
    title: 'Caminata perruna en los Cerros de Escazú ⛰️',
    description: 'Hike en los Cerros de Escazú',
    coverImage: require('../assets/images/maggie-home2.jpg'), // imagen principal
    content: [
      {
        type: 'text',
        value:
          'En febrero de este año, nos apuntamos a una caminata perruna organizada por Brujo  Tours, en un cerro de Escazú. Mis humanos vieron los anuncios en redes sociales y, como no nos resistimos a una nueva aventura, ¡nos anotamos de inmediato!'
      },
      {
        type: 'text',
        value:
          'Ese día madrugamos bien temprano. Mis humanos desayunaron sus típicas delicias y yo, por supuesto, mis cróquetitas de pollo. Me alistaron con mi pechera, correa, unos cuantos snacks y una buena provisión de bolsitas para mis desechos… ¡como si fuéramos a una expedición!'
      },
      {
        type: 'image',
        src: require('../assets/images/post2-1.jpg'),
        caption: 'Posando como que no me di cuenta - © Puppyrazzicr'
      },
      {
        type: 'text',
        value:
          'Al llegar, pasaron lista para asegurarse de que todos estuviéramos presentes. Había muchos nuevos amigos, humanos y peluditos como yo. Al principio fui un poco tímida, pero poco a poco me fui soltando. Caminamos por senderos, subimos montañas… ¡todos los peluditos andábamos felices y moviendo la cola! Algunos humanos estaban poniendo bastante esfuerzo, pero aun así se veían contentos.'
      },
      {
        type: 'text',
        value:
          'Llegamos a un mirador desde donde se veía la ciudad. ¡Se veía enorme! Todo estaba en silencio, con un cielo azul despejado que parecía pintado. Y lo mejor de todo… ¡había boñiga de vaca! Eso, para mí, es sinónimo de mascarilla natural para un pelaje brillante y sedoso. Me revolqué feliz y, bueno, también me comí un poquito. Mi humana, cuando me vio, se quedó pálida. Creo que no le hizo mucha gracia… sobre todo por el olor. ¡A mí me parecía exquisito!'
      },
      {
        type: 'image',
        src: require('../assets/images/post2-2.jpg'),
        caption: 'Contemplando el paisaje - © Puppyrazzicr'
      },
      {
        type: 'text',
        value:
          'Todos estábamos disfrutando del paisaje y de la hermosa mañana de verano. Conocí nuevos amigos, pedí cariñitos y hasta me gané unas galletitas. Pero lo mejor aún estaba por venir: ¡había una catarata! El agua era fría y deliciosa, así que no dudé en darme un buen chapuzón.'
      },
      {
        type: 'text',
        value: 'Los amigos de Pupparazzi nos tomaron unas fotos divinas que capturaron la esencia de nuestra aventura.'
      },
      {
        type: 'image',
        src: require('../assets/images/post2-3.jpg'),
        caption: 'Con mis humanos favoritos - © Puppyrazzicr'
      },
      {
        type: 'text',
        value:
          'Y para cerrar con broche de oro, ¡hubo una rifa! Mi humano está en todas y se ganó un juguetito para mí. Me hizo muy feliz.'
      },
      {
        type: 'text',
        value:
          'Así que, en resumen: la pasé increíble y ya estoy esperando con ansias la próxima aventura explorando cerritos.'
      },
      {
        type: 'image',
        src: require('../assets/images/post2-4.jpg'),
        caption: 'Con mi manada - © Puppyrazzicr'
      }
    ]
  },
  {
    id: 3,
    slug: 'caminata-perruna-pata-caliente',
    title: '¡Nuestra primera experiencia Pata Caliente 🔥!',
    description: 'Corriendo en la Sabana 🌳',
    coverImage: require('../assets/images/post3-front.jpg'), // imagen principal
    content: [
      {
        type: 'text',
        value:
          'Hoy participamos en nuestro primer evento de Pata Caliente, una actividad gratuita y con un propósito hermoso: apoyar a los peluditos de Perro Callejero CR. Nos inscribimos fácilmente por Instagram y decidimos asistir con toda la emoción del mundo.'
      },
      {
        type: 'text',
        value:
          'La dinámica era sencilla, pero el motivo de celebración lo hacía especial: cada persona podía llevar un donativo —alimento, artículos de higiene, juguetes, entre otros— para ayudar a los perritos rescatados. ¡Imagínense lo felices que van a estar esos peluditos! Seguramente sus colitas no van a parar de moverse con tanta alegría gracias a todo lo que se logró recolectar.'
      },
      {
        type: 'image',
        src: require('../assets/images/post3-1.jpg'),
        caption: 'Siempre lista para la foto - © Rey Mono'
      },
      {
        type: 'text',
        value:
          'El evento se realizó en un espacio abierto con rutas para canicross de distintos niveles, incluyendo una caminata recreativa. ¡La pasamos increíble! Y lo mejor de todo fue que la actividad se hizo en honor al Día del Perro, celebrando con propósito y empatía.'
      },
      {
        type: 'text',
        value:
          'Yo, Maggie, estuve FELIZ. Corrí 5 km a toda velocidad con mi humana… bueno, digamos que ella iba con la lengua afuera, pero ¡lo logró! (sí, lo repito: ¡mi humana lo logróoo!).'
      },
      {
        type: 'image',
        src: require('../assets/images/post3-2.jpg'),
        caption: 'Arrastrando a mi humana - © Rey Mono'
      },
      {
        type: 'text',
        value: 'Otra aventura más para nosotras, y esta vez con un motivo que alegra corazones peludos 💛🐾'
      }
    ]
  }
]

export default posts
