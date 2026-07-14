// ============================================================
// Hotel Copacabana – Datos del sitio
// Actualiza aquí precios, reseñas, FAQ, etc. sin tocar las vistas
// ============================================================

const valores = [
  { name: 'Hospitalidad',     icon: 'fas fa-heart',          delay: 0   },
  { name: 'Calidad',          icon: 'fas fa-star',           delay: 50  },
  { name: 'Compromiso',       icon: 'fas fa-handshake',      delay: 100 },
  { name: 'Respeto',          icon: 'fas fa-hands',          delay: 150 },
  { name: 'Integridad',       icon: 'fas fa-shield-halved',  delay: 200 },
  { name: 'Innovación',       icon: 'fas fa-lightbulb',      delay: 250 },
  { name: 'Sostenibilidad',   icon: 'fas fa-leaf',           delay: 300 },
];

const habitaciones = [
  {
    name: 'Habitación Ejecutiva',
    img: '/images/hab-ejecutiva.jpeg',
    badge: 'Negocios',
    price: '20',
    priceUnit: '/noche',
    priceNote: '* Precio varía en feriados y fines de semana',
    capacity: '1–2 huéspedes',
    cardClass: 'room-ejecutiva',
    description: 'Perfecta para viajeros de negocios. Diseñada con comodidad y funcionalidad para tu estadía en La Libertad.',
    amenities: ['WiFi de alta velocidad', 'Aire acondicionado', 'Smart TV', 'Agua caliente', 'Escritorio de trabajo'],
    waMsg: 'Hola, me interesa reservar una Habitación Ejecutiva en el Hotel Copacabana',
    delay: 0,
  },
  {
    name: 'Habitación Matrimonial',
    img: '/images/hab-matrimonial.jpeg',
    badge: 'Parejas',
    price: '30',
    priceUnit: '/noche',
    priceNote: '* Precio varía en feriados y fines de semana',
    capacity: '2 huéspedes',
    cardClass: 'room-matrimonial',
    description: 'Diseñada para que las parejas disfruten de una estadía romántica y confortable en la costa ecuatoriana.',
    amenities: ['Cama matrimonial king', 'WiFi gratuito', 'Aire acondicionado', 'Smart TV', 'Agua caliente'],
    waMsg: 'Hola, me interesa reservar una Habitación Matrimonial en el Hotel Copacabana',
    delay: 100,
  },
  {
    name: 'Habitación Familiar',
    img: '/images/hab-familiar.jpeg',
    badge: 'Familias',
    price: '15',
    priceUnit: '/persona',
    priceNote: '* Precio varía en feriados y fines de semana',
    capacity: '4–5 huéspedes',
    cardClass: 'room-familiar',
    description: 'Espacio amplio y cómodo para familias y grupos. Perfecta para disfrutar juntos de la costa ecuatoriana.',
    amenities: ['Múltiples camas', 'WiFi gratuito', 'Aire acondicionado', 'Smart TV', 'Agua caliente'],
    waMsg: 'Hola, me interesa reservar una Habitación Familiar en el Hotel Copacabana',
    delay: 200,
  },
];

const servicios = [
  { name: 'Recepción 24h',          icon: 'fas fa-concierge-bell',    desc: 'Atención disponible las 24 horas',     delay: 0   },
  { name: 'WiFi Gratuito',          icon: 'fas fa-wifi',              desc: 'Conexión de alta velocidad',           delay: 50  },
  { name: 'Aire Acondicionado',     icon: 'fas fa-snowflake',         desc: 'Clima ideal en tu habitación',         delay: 100 },
  { name: 'Agua Caliente',          icon: 'fas fa-shower',            desc: 'Servicio permanente',                  delay: 150 },
  { name: 'Smart TV',               icon: 'fas fa-tv',                desc: 'Entretenimiento en tu habitación',     delay: 200 },
  { name: 'Parqueadero',            icon: 'fas fa-car',               desc: 'Estacionamiento disponible',           delay: 250 },
  { name: 'Limpieza Diaria',        icon: 'fas fa-broom',             desc: 'Housekeeping todos los días',          delay: 300 },
  { name: 'Lavandería',             icon: 'fas fa-shirt',             desc: 'Lavado y planchado de ropa',           delay: 0   },
  { name: 'Zona de Café',           icon: 'fas fa-mug-hot',           desc: 'Café disponible en cualquier momento', delay: 50  },
  { name: 'Zona de Snacks',         icon: 'fas fa-utensils',          desc: 'Snacks y bebidas disponibles',         delay: 100 },
  { name: 'Coworking',              icon: 'fas fa-laptop-code',       desc: 'Espacio de trabajo compartido',        delay: 150 },
  { name: 'Atención Personalizada', icon: 'fas fa-user-tie',          desc: 'Servicio adaptado a tus necesidades', delay: 200 },
];

// Reemplaza src con rutas reales — coloca fotos en /public/images/
const galeria = [
  { src: '/images/galeria-1.jpeg', title: 'Habitación Ejecutiva',          tall: true  },
  { src: '/images/galeria-2.jpeg', title: 'Habitación Matrimonial',        tall: false },
  { src: '/images/galeria-3.jpeg', title: 'Coworking – Espacio de trabajo', tall: false },
  { src: '/images/galeria-4.jpeg', title: 'Habitación Familiar',           tall: true  },
  { src: '/images/galeria-5.jpeg', title: 'Recepción del Hotel',           tall: false },
  { src: '/images/galeria-6.jpeg', title: 'Vista de La Libertad',          tall: false },
  { src: '/images/galeria-7.jpeg', title: 'Exteriores del Hotel',          tall: true  },
  { src: '/images/galeria-8.jpeg', title: 'Zona de Café',                  tall: false },
  { src: '/images/galeria-9.jpeg', title: 'Área de Entretenimiento',       tall: true  },
  { src: '/images/galeria-10.jpeg', title: 'Entrada Principal',            tall: false },
  { src: '/images/galeria-11.jpeg', title: 'Vista desde el Hotel',         tall: false },
  { src: '/images/galeria-12.jpeg', title: 'Instalaciones del Hotel',      tall: false },
];

const resenas = [
  {
    name: 'Carlos M.',  date: 'Junio 2024',    initials: 'CM', delay: 0,
    text: 'Excelente hotel, muy bien ubicado en el centro de La Libertad. El personal es muy amable y atento. Habitaciones limpias y cómodas. Definitivamente volvería.',
  },
  {
    name: 'Patricia G.', date: 'Mayo 2024',   initials: 'PG', delay: 100,
    text: 'Estuvimos con nuestra familia y quedamos muy satisfechos. Las habitaciones familiares son amplias y el aire acondicionado funciona perfecto. Excelente calidad-precio.',
  },
  {
    name: 'Andrés V.',  date: 'Abril 2024',   initials: 'AV', delay: 200,
    text: 'Me alojé por trabajo y el hotel cumple con todo. WiFi rápido, buena atención, habitación cómoda. La ubicación es perfecta para moverse por La Libertad.',
  },
  {
    name: 'Lucía F.',   date: 'Marzo 2024',   initials: 'LF', delay: 0,
    text: 'Muy buen hotel para parejas. La habitación matrimonial estaba impecable. El personal muy servicial. Lo recomendaría a cualquier persona que visite la costa.',
  },
  {
    name: 'Roberto S.', date: 'Febrero 2024', initials: 'RS', delay: 100,
    text: 'Hotel con mucha historia en La Libertad. Se nota la experiencia en el sector. Buena relación precio-calidad. Volveré en mi próximo viaje a Santa Elena.',
  },
  {
    name: 'Diana R.',   date: 'Enero 2024',   initials: 'DR', delay: 200,
    text: 'Increíble la atención personalizada que recibimos. El check-in fue muy rápido. Las instalaciones están muy bien mantenidas. 100% recomendado.',
  },
];

const lugaresT = [
  { name: 'Malecón de La Libertad', distancia: 'A 3 min caminando', icon: 'fas fa-person-walking' },
  { name: 'Museo Amantes de Sumpa', distancia: 'A 5 min en auto',   icon: 'fas fa-landmark'       },
  { name: 'Salinas',                distancia: 'A 15 min en auto',  icon: 'fas fa-umbrella-beach' },
  { name: 'Chipipe',                distancia: 'A 12 min en auto',  icon: 'fas fa-water'          },
  { name: 'Punta Carnero',          distancia: 'A 20 min en auto',  icon: 'fas fa-mountain-sun'   },
  { name: 'La Chocolatera',         distancia: 'A 25 min en auto',  icon: 'fas fa-binoculars'     },
  { name: 'Montañita',              distancia: 'A 45 min en auto',  icon: 'fas fa-guitar'         },
];

const platosT = [
  {
    name: 'Encebollado',
    img: '/images/plato-encebollado.jpeg',
    desc: 'Sopa de albacora con yuca, cebolla encurtida y limón. El desayuno más popular del Ecuador.',
    delay: 0,
  },
  {
    name: 'Ceviche de Pescado',
    img: '/images/plato-ceviche.jpeg',
    desc: 'Pescado fresco marinado en limón con tomate, cebolla y cilantro. Fresco y delicioso.',
    delay: 100,
  },
  {
    name: 'Bollos',
    img: '/images/plato-bollo.jpeg',
    desc: 'Maíz molido relleno de pescado o mariscos, envuelto en hoja de plátano y cocido al vapor.',
    delay: 200,
  },
  {
    name: 'Pescado Entero',
    img: '/images/pescado.jpeg',
    desc: 'Pescado frito entero acompañado de patacones, arroz y ensalada. Sabor auténtico del mar.',
    delay: 0,
  },
];

const lugaresDestacados = [
  {
    name: 'Malecón de La Libertad',
    img: '/images/turismo-libertad.png',
    distancia: 'A 3 min caminando',
    desc: 'El paseo marítimo del centro, perfecto para disfrutar el atardecer y la brisa del mar.',
    icon: 'fas fa-person-walking',
    delay: 0,
  },
  {
    name: 'Ballenita',
    img: '/images/turismo-ballenita.jpeg',
    distancia: 'A 10 min en auto',
    desc: 'Pueblo de pescadores con playa tranquila y ambiente familiar. Ideal para relajarse.',
    icon: 'fas fa-fish',
    delay: 100,
  },
  {
    name: 'La Chocolatera',
    img: '/images/turismo-chocolatera.jpeg',
    distancia: 'A 25 min en auto',
    desc: 'El punto más occidental del Ecuador continental, con impresionantes vistas al mar.',
    icon: 'fas fa-binoculars',
    delay: 200,
  },
  {
    name: 'Museo Amantes de Sumpa',
    img: '/images/turismo-museo.jpeg',
    distancia: 'A 5 min en auto',
    desc: 'Uno de los museos arqueológicos más importantes del Ecuador, con restos de 8.000 años.',
    icon: 'fas fa-landmark',
    delay: 0,
  },
  {
    name: 'Malecón de Salinas',
    img: '/images/turismo-salinas.jpeg',
    distancia: 'A 15 min en auto',
    desc: 'El balneario más popular del Ecuador. Playas, gastronomía y vida nocturna a pocos minutos.',
    icon: 'fas fa-umbrella-beach',
    delay: 100,
  },
  {
    name: 'Punta Carnero',
    img: '/images/turismo-punta-carnero.png',
    distancia: 'A 20 min en auto',
    desc: 'Mirador natural con impresionantes acantilados y vistas al océano Pacífico. Ideal para fotografía.',
    icon: 'fas fa-mountain-sun',
    delay: 200,
  },
  {
    name: 'Montañita',
    img: '/images/turismo-montanita.png',
    distancia: 'A 45 min en auto',
    desc: 'El pueblo más bohemio de la costa: surf, artesanías, vida nocturna y playas de arena fina.',
    icon: 'fas fa-guitar',
    delay: 0,
  },
];

const faqs = [
  {
    pregunta: '¿Cuáles son los horarios de check-in y check-out?',
    respuesta: 'El check-in está disponible a partir de las 14:00 (2:00 PM). El check-out debe realizarse antes de las 12:00 (mediodía). Si necesitas horarios especiales, contáctanos con anticipación.',
  },
  {
    pregunta: '¿El hotel tiene parqueadero?',
    respuesta: 'Sí, contamos con parqueadero disponible para nuestros huéspedes. Consulta disponibilidad al momento de tu reserva ya que el espacio es limitado.',
  },
  {
    pregunta: '¿El precio incluye desayuno?',
    respuesta: 'Actualmente el desayuno no está incluido en la tarifa. Contamos con zona de café y snacks en el hotel, y en los alrededores hay numerosas opciones de restaurantes.',
  },
  {
    pregunta: '¿Cuál es la política de cancelación?',
    respuesta: 'Aceptamos cancelaciones sin cargo hasta 48 horas antes de la llegada. Para cancelaciones posteriores se aplica un cargo de una noche. Contáctanos directamente para casos especiales.',
  },
  {
    pregunta: '¿El hotel tiene espacio de Coworking?',
    respuesta: 'Sí. Contamos con un espacio de coworking disponible para trabajo remoto, reuniones y conferencias. Ideal para viajeros de negocios. Contáctanos por WhatsApp o correo para disponibilidad y tarifas.',
  },
  {
    pregunta: '¿El hotel admite mascotas?',
    respuesta: 'En este momento el Hotel Copacabana no permite mascotas en sus instalaciones. Agradecemos tu comprensión.',
  },
  {
    pregunta: '¿Cómo llego al hotel desde Guayaquil?',
    respuesta: 'Estamos en la Av. 9 de Octubre, centro de La Libertad. Desde Guayaquil toma la Ruta del Sol hacia Santa Elena — aproximadamente 2 horas. Hay buses directos desde la Terminal Terrestre de Guayaquil.',
  },
];

const index = (req, res) => {
  res.render('index', {
    title: 'Hotel Copacabana | La Libertad, Santa Elena, Ecuador',
    valores,
    habitaciones,
    servicios,
    galeria,
    resenas,
    lugaresT,
    lugaresDestacados,
    platosT,
    faqs,
  });
};

module.exports = { index };
