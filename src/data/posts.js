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
  },
  {
    id: 4,
    slug: 'implementos-carrera-canicross',
    title: 'Nuestros implementos para el día de la carrera de Canicross',
    description: 'Preparación pre-competencia',
    coverImage: require('../assets/images/post4-front.jpg'), // imagen principal
    content: [
      {
        type: 'image',
        src: require('../assets/images/post4-1.jpg'),
        caption: 'La segunda carrera de Trail Dog Run: Edición Figues, 2025'
      },
      {
        type: 'text',
        value:
          '<strong>Cuando estamos en vísperas de una competición</strong>, no queda más que calmar los nervios preparando todo lo que podríamos llegar a necesitar, tanto Maggie como yo. Claro, sin dejar de lado los entrenamientos semanales que son fundamentales para llegar en forma a la carrera y no morir en el intento. Al final, más allá del resultado, lo más importante es disfrutar del proceso.'
      },
      {
        type: 'text',
        value: `
    <p><b>Para Maggie, hay varios elementos esenciales:</b></p>
    <ul>
      <li>Taza para el agua</li>
      <li>Hidratación suficiente</li>
      <li>Arnés especial de Canicross</li>
      <li>Línea de tiro (una banda elástica que conecta su arnés con el mío)</li>
      <li>Bolsitas para desechos</li>
      <li>Crema para las patitas</li>
      <li>Correa extra para antes y después de la competencia</li>
      <li>Una toalla para secarla o limpiarla si se ensucia</li>
    </ul>`
      },
      {
        type: 'image',
        src: require('../assets/images/post4-2.jpg'),
        caption: 'Mi pechera, arnés y línea de tiro de Cani Cross, 2025'
      },
      {
        type: 'text',
        value: `
    <p><b>Para mí, la humana, también hay cosas importantes que no pueden faltar:</b></p>
    <ul>
      <li>Bloqueador solar</li>
      <li>Tenis de trail running</li>
      <li>Arnés para sujetar a Maggie</li>
      <li>Camelbak (o sistema de hidratación personal)</li>
      <li>Gafas de sol, según preferencia</li>
      <li>Cambio de ropa extra</li>
      <li>Gasilla para fijar el dorsal</li>
    </ul>`
      },
      {
        type: 'text',
        value:
          'Además, está lo que incluye el paquete de inscripción, que por lo general trae el dorsal, la camiseta del evento y una bandana para el perrito.'
      },
      {
        type: 'text',
        value:
          'Algo que también nos funciona muy bien es llevar una hielera con bastante hidratación para ambas. Y como extra, una pechera diferente (la que usamos para caminatas diarias), que podemos usar al final para cambiarla y manejar más fácilmente a Maggie luego de la carrera.'
      },
      {
        type: 'text',
        value:
          'Estas son algunas de las cosas que preparamos. Algunas son indispensables, otras opcionales, y pueden variar un poco dependiendo del evento.'
      },
      {
        type: 'text',
        value: '<strong>Y por supuesto… un corazón dispuesto a disfrutar de la experiencia con tu peludito. ❤️</strong>'
      },
      {
        type: 'image',
        src: require('../assets/images/post4-3.jpg'),
        caption: 'Dándolo todo pero feliz, 2025'
      }
    ]
  },
  {
    id: 5,
    slug: 'trail-dog-figues',
    title: 'Trail Dog Run Figues 🏞🐾 ',
    description: '¡Lo dimos todo! 💪✨',
    coverImage: require('../assets/images/post5-front.jpg'), // imagen principal
    content: [
      {
        type: 'image',
        src: require('../assets/images/post5-2.jpg'),
        caption: 'Salida del Sprint!'
      },
      {
        type: 'text',
        value:
          'Este finde nos lanzamos con todo en el Trail Dog Run en Figues. En la categoría <strong>Sprint (1 km a máxima velocidad)</strong> quedamos de séptimas, y en la Open (5 km) logramos un quinto lugar 🥳.'
      },
      {
        type: 'text',
        value:
          '¡No fueron nuestros mejores tiempos de pace, pero sí una de las experiencias más bonitas y retadoras que hemos vivido! 💚'
      },
      {
        type: 'image',
        src: require('../assets/images/post5-1.jpg'),
        caption: 'Llegando del Sprint! Mi humana en las últimas.'
      },
      {
        type: 'text',
        value:
          'La humana (o sea yo 🫠) casi se rinde antes del Open, porque no me estaba sintiendo bien… pero al final decidimos intentarlo y lo logramos juntas 🐶👟.'
      },
      {
        type: 'text',
        value:
          'Cada carrera nos deja aprendizajes, risas, esfuerzo y esa conexión única entre humano y perrito que solo quienes corremos juntos entendemos. ¡Seguimos entrenando, mejorando y disfrutando este camino! 🐕💨'
      },
      {
        type: 'text',
        value:
          'Gracias a Trail Dog Run Costa Rica por tremendo evento, a los amigos que siempre nos animan, y a los que nos acompañan en cada paso. 🫶 Nos vemos en la próxima!'
      },
      {
        type: 'image',
        src: require('../assets/images/post5-3.jpg'),
        caption: 'Ningún río nos detiene 🏞️'
      }
    ]
  },
  {
    id: 6,
    slug: 'entrenar-con-maggie',
    title: '🐕‍🦺 Entrenar con Maggie',
    description: 'Retos y apredizajes de correr con mi amiga perruna',
    coverImage: require('../assets/images/post6-front.jpg'), // imagen principal
    content: [
      {
        type: 'image',
        src: require('../assets/images/post6-1.jpg'),
        caption: 'Practicando trucos 🍬'
      },
      {
        type: 'text',
        value:
          'Entrenar con Maggie nunca es lineal. Ser equipo significa que el <strong>bienestar de ambas siempre está primero</strong>. Si una de las dos está cansada o ha llegado a su límite, se detiene el entreno —porque cuidar una de la otra es parte de ser un verdadero binomio.'
      },
      {
        type: 'text',
        value:
          'Maggie, al ser una <strong>raza de trabajo</strong>, se caracteriza por tener una energía inagotable y un espíritu que siempre quiere más. Muchas veces, aunque esté cansada, seguirá dando todo… y eso no siempre es bueno. Por eso es tan importante aprender a leer sus señales y su lenguaje corporal, para identificar cuándo realmente necesita parar. Así sea en el primer kilómetro o en el último, lo esencial es escucharla.'
      },
      {
        type: 'text',
        value:
          'Ya sea entrenando <strong>trail running, corriendo en la ciudad o donde estemos</strong>, debemos estar atentas a esas pequeñas señales que indican que hasta ahí llegó el cuerpo por hoy. Maggie tiene una fuerza impresionante y una gran voluntad de seguir el ritmo, y precisamente por eso es mi responsabilidad reconocer su límite. No se trata de cuánto podamos correr, sino de disfrutar juntas sin que algo placentero se convierta en una carga para ella.'
      },
      {
        type: 'image',
        src: require('../assets/images/post6-2.jpg'),
        caption: 'Esperando para cruzar la calle 🚦'
      },
      {
        type: 'text',
        value:
          'También es importante <strong>no caer en el error de pensar que todos los días hay que correr</strong>. Entrenar no siempre significa sumar kilómetros. Hay muchas otras formas de trabajar juntas: reforzar comandos, practicar obediencia, estimular su mente o simplemente disfrutar de un momento de calma.'
      },
      {
        type: 'text',
        value:
          'Para nosotras, estos puntos son esenciales para entrenar. Buscamos siempre rendir al máximo, pero sobre todo, <strong>disfrutar el proceso</strong>. Porque más allá de los resultados, lo más bonito es compartirlo. En competencia Maggie se transforma: se pone en “modo carrera” y corre distinto, con una energía que contagia. Ella sabe perfectamente cuándo estamos compitiendo, y ese momento es simplemente mágico.'
      },
      {
        type: 'text',
        value:
          'A lo largo de este proceso, practicando <strong>Canicross en Costa Rica</strong>, hemos aprendido mucho. Y queremos compartir esos aprendizajes con quienes también aman correr con su perro y desean ver crecer esta hermosa disciplina, tanto en eventos recreativos como competitivos.'
      },
      {
        type: 'image',
        src: require('../assets/images/post6-3.jpg'),
        caption: 'Amo los palos 🪾'
      }
    ]
  },
  {
    id: 7,
    slug: 'esenciales-entrenar-canicross',
    title: 'Esenciales para entrenar Canicross',
    description: 'Entrenar con Maggie',
    coverImage: require('../assets/images/post7-front.jpg'), // imagen principal
    content: [
      {
        type: 'text',
        value: `A veces las personas se acercan a preguntar cómo hacemos para correr juntas y que Maggie se mantenga tan enfocada. 🐶💨
          La verdad es que tenemos una lista de esenciales que nos ayudan a que cada salida sea <strong>provechosa, divertida y especial. 💕</strong>
          Tenemos muchos más, pero hoy compartimos <strong>nuestros favoritos</strong>. ¡Esperamos que también les sirvan para disfrutar al máximo con sus perritos! 🐕✨`
      },
      {
        type: 'text',
        value: '<strong>1. Empieza por la base</strong>'
      },
      {
        type: 'text',
        value:
          'Antes de correr juntos, asegúrate de que tu perro tenga buena condición física. Llévalo a una revisión veterinaria y consulta si está apto para correr o si hay alguna recomendación especial. Comienza de forma progresiva: camina, trota y haz paseos largos. No todo será correr; también habrá pausas y momentos de adaptación.'
      },
      {
        type: 'text',
        value: '<strong>2. Entrena progresivamente</strong>'
      },
      {
        type: 'text',
        value:
          'Aumenta las distancias y la velocidad poco a poco. Empieza con tramos cortos (1–2 km) y añade más kilómetros conforme tu perro gane resistencia. Siempre verifica que no esté al límite, aunque él quiera seguir.'
      },
      {
        type: 'text',
        value: '<strong>3. Usa el equipo adecuado</strong>'
      },
      {
        type: 'image',
        src: require('../assets/images/post7-1.jpg'),
        caption: 'Corriendo con el equipo adecuado para evitar lesiones.'
      },
      {
        type: 'text',
        value: `<p><strong>El equipo correcto da seguridad y mejora el rendimiento:</strong></p>
<ul>
  <li><strong>Arnés de tiro anatómico:</strong> no debe limitar el movimiento ni causar rozaduras.</li>
  <li><strong>Línea elástica de Canicross:</strong> conecta tu arnés con el de tu perro y amortigua el tirón.</li>
  <li><strong>Cinturón de tracción para ti:</strong> asegúrate de ajustarlo bien a tu cintura para evitar lesiones.</li>
</ul>
<p>Hay marcas nacionales excelentes y opciones internacionales; elige lo que mejor se adapte a ambos.</p>`
      },
      {
        type: 'image',
        src: require('../assets/images/post7-2.jpg'),
        caption: 'Lo que llevamos a las carreras!'
      },
      {
        type: 'text',
        value: '<strong>4. Evita el calor</strong>'
      },
      {
        type: 'text',
        value: `<p>Entrena temprano en la mañana (antes de las 9 a.m.) o al final de la tarde (después de las 4 p.m.).</p>
        <p>Busca rutas con sombra y lleva siempre agua. El golpe de calor es un riesgo real.</p>`
      },
      {
        type: 'text',
        value: `<p><strong>5. Lenguaje corporal de cansancio</strong></p>
<p>
  Aprender a reconocer cuándo tu perro está agotado es fundamental para evitar lesiones o sobreesfuerzo.
  Algunas señales comunes de fatiga son:
</p>
<ul>
  <li>Arrastrar las patas o perder ritmo</li>
  <li>Respiración muy agitada o irregular</li>
  <li>Lengua con los bordes hacia afuera y curvados hacia arriba (forma de “palita”)</li>
</ul>
<p>
  Si notas alguno de estos signos, detén el entrenamiento de inmediato. No importa si apenas llevan un kilómetro:
  su bienestar siempre debe ser la prioridad.
</p>`
      },
      {
        type: 'text',
        value: `<p><strong>6. Refuerza las órdenes</strong></p>
<p>
  Tu perro debe conocer comandos básicos para correr juntos de forma segura:
</p>
<ul>
  <li><strong>“Go / Vamos”</strong> → iniciar</li>
  <li><strong>“Left / Right” o “Izquierda / Derecha”</strong> → girar</li>
  <li><strong>“Stop / Frena”</strong> → detenerse</li>
</ul>
<p>
  La comunicación entre ambos evita accidentes y mejora la sincronía.
</p>`
      },
      {
        type: 'image',
        src: require('../assets/images/post7-3.jpg'),
        caption: 'Practicando comandos'
      },
      {
        type: 'text',
        value: `<p><strong>7. Revisa la salud de ambos</strong></p>
<p>
  No lo des por hecho. Realiza chequeos veterinarios regulares, verifica que tu perro esté libre de lesiones,
  parásitos y bien alimentado.
</p>
<p>
  Y claro, el humano también debe cuidarse: exámenes, descanso y buena nutrición.
</p>

<p><strong>8. Cuida sus patas (y tu calzado)</strong></p>
<p>
  Revisa sus almohadillas antes y después de cada entrenamiento.
  Si corres en terrenos ásperos, usa cremas protectoras o botines.
</p>
<p>
  Unas patas sanas son clave para un binomio feliz.
</p>`
      },
      {
        type: 'image',
        src: require('../assets/images/post7-4.jpg'),
        caption: 'Visita veterinaria'
      },
      {
        type: 'text',
        value: `<p><strong>9. No entrenes todos los días</strong></p>
<p>
  Dale descanso uno o dos días a la semana.
  Tu perro siempre querrá acompañarte, pero el descanso también es entrenamiento.
</p>
<p>
  Recuperar energía es lo que les permitirá seguir disfrutando del Canicross por mucho tiempo.
</p>`
      },
      {
        type: 'text',
        value: `<hr>
        <p>Estos son algunos de los puntos que hemos aprendido en nuestro día a día con Maggie, y que nos han ayudado a crecer como equipo.
Cada entrenamiento es una oportunidad para conocernos mejor, para disfrutar, y para seguir construyendo ese lazo tan especial que solo se crea cuando corres junto a tu mejor amiga de cuatro patas. 💛🐾</p>`
      }
    ]
  },
  {
    id: 8,
    slug: 'pata-caliente-navidena-2025',
    title: '🐾 Pata Caliente – Edición Navideña 🎄',
    description: 'Carrera y búsqueda del tesoro en vísperas de la navidad',
    coverImage: require('../assets/images/post8-front.jpg'), // imagen principal
    content: [
      {
        type: 'text',
        value:
          'El evento <strong>Pata Caliente – Edición Navideña</strong> se realizó en la <strong>Universidad para la Paz</strong>, en Ciudad Colón. Días antes estuvimos alistando todos los implementos, y el día del evento nos levantamos bien temprano. El camino hacia allá estaba despejado, y tardamos aproximadamente 45 minutos en llegar.'
      },
      {
        type: 'image',
        src: require('../assets/images/post8-1.jpg'),
        caption: 'Foto con mi cachos de reno antes de comenzar'
      },
      {
        type: 'text',
        value:
          'La actividad consistía en <strong>dos fases principales</strong>:  <ol aria-label="Lista de eventos"><li>El Canitrail</li><li>La Misión Navideña</li></ol>'
      },
      {
        type: 'text',
        value: '<strong>🏃‍♀️ Canitrail con Maggie</strong>'
      },
      {
        type: 'text',
        value:
          'El <i>Canitrail</i> es lo nuestro —para eso Maggie y yo entrenamos tanto— 💪🐶. El terreno estaba bastante <strong>lodoso y húmedo</strong>, lo que hizo la carrera aún más retadora.'
      },
      {
        type: 'text',
        value:
          'Apenas llegamos, <strong>Maggie</strong> empezó a olfatear todo con su curiosidad de siempre. Hicimos el check-in y esperamos la señal de salida. La carrera iniciaba en <strong>pelotón</strong>, todos al mismo tiempo, y eso me preocupaba un poco porque Maggie suele apartarse cuando hay muchos perros o personas muy cerca.'
      },
      {
        type: 'text',
        value:
          'Cuando sonó el pitazo… ¡fue pura <strong>adrenalina y diversión!</strong> 🚀 Íbamos concentradas en mantener un buen ritmo y mejorar nuestro tiempo. Poco a poco fuimos adelantando a otros competidores, disfrutando cada tramo del sendero entre lodo, naturaleza y risas.'
      },
      {
        type: 'text',
        value:
          'Faltando unos 800 metros, nos enredamos con un árbol 😅 y perdimos la ventaja que habíamos logrado, pero aun así cruzamos la meta felices. Nuestro objetivo se cumplió: mejoramos el tiempo y disfrutamos la experiencia al máximo.'
      },
      {
        type: 'text',
        value: `<p>Después de llegar, aprovechamos para recorrer los puestos de las marcas participantes. Había de todo:</p>

<ul>
  <li>🦴 productos para perros</li>
  <li>🍦 helados y yogures (¡Maggie tuvo sus muestras, claro!)</li>
  <li>🎁 y varias cositas lindas que no pudimos resistir comprar.</li>
</ul>`
      },
      {
        type: 'image',
        src: require('../assets/images/post8-3.jpg'),
        caption: 'Después de correr con mi humana 🐕‍🦺'
      },
      {
        type: 'text',
        value: '<br><strong>🎅🏼 La Misión Navideña</strong>'
      },
      {
        type: 'image',
        src: require('../assets/images/post8-2.jpg'),
        caption: 'Encontramos las 2 esferas 🕵🏻‍♂️'
      },
      {
        type: 'text',
        value: `La segunda parte del evento fue la Misión Navideña, una búsqueda de esferas navideñas escondidas en medio de la naturaleza 🎄. Dentro de cada esfera había cupones de marcas patrocinadoras, canjeables por premios ese mismo día.`
      },
      {
        type: 'text',
        value: `Fue súper divertido, porque las esferas estaban entre ramas y arbustos, ¡y no era nada fácil verlas!
Gracias al reflejo de la cinta dorada, logramos encontrar la primera 🥳.
La segunda costó un poquito más, hasta que decidimos ir hacia una zona más despejada… ¡y ahí estaba! ✨
`
      },
      {
        type: 'text',
        value: `El ambiente fue precioso: <strong>familiar, alegre y lleno de espíritu navideño.</strong>
Después de canjear los premios, se realizó la <strong>premiación de los ganadores del Canitrail femenino y masculino</strong>, e incluso hubo una carrera de niños, que cerró el evento con ternura y muchas sonrisas. 🏅👧👦`
      },
      {
        type: 'text',
        value: `<br><strong>❤️ Un día para recordar</strong>`
      },
      {
        type: 'text',
        value: `Fue un día increíble, lleno de deporte, naturaleza, comunidad y alegría.
Maggie y yo disfrutamos cada momento, desde la carrera hasta la misión, y nos fuimos con el corazón lleno y la nariz embarrada de felicidad 🐾💚`
      }
    ]
  }
]

export default posts
