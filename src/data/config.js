// ✏️ EDIT EVERYTHING HERE. Items marked EDIT are placeholders.
export const site = {
  name: 'Pritam Kumar',
  role: 'Sales Officer',
  dealer: 'Autowings Toyota',
  company: 'Sheen Motors Pvt. Ltd.',
  city: 'Udhampur, J&K',
  address: 'Birma Bridge, Near Command Hospital, Udhampur – 182101',
  photo: '/profile.jpg',

  heroImage: '',
  heroVideo: '',

  whatsapp: '917006096145',
  phone: '+91 70060 96145',

  salesLine: '70060 96145',
  serviceLine: '90550 21112',
  email: 'preetamKumar5pk@gmail.com',

  experience: '5+ Years',

  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com'
  },

  message:
    "Buying a car is a big decision, and you should never feel rushed. I'll help you pick the right Toyota, explain every price and feature clearly, and stay with you long after delivery.",

  stats: [
    { v: '500+', l: 'Happy families' },
    { v: '5+', l: 'Years experience' },
    { v: '4.9★', l: 'Customer rating' }
  ],

  badges: [
    'Authorised Toyota Dealer',
    'Transparent Pricing',
    'Test Drive at Your Doorstep',
    'Easy Finance Assistance'
  ],
}

// 🔥 IMPORTANT: images must be inside public/cars/
export const cars = [
  {
    id: 'glanza',
    name: 'Glanza',
    tag: 'Hatchback',
    price: '₹ 6,73,000*',
    image: "/cars/glanza.jpg",
    specs: ['1.2L Petrol', '22 km/l', '5 Seats', 'CNG option'],
    features: ['9" SmartPlay Pro+ touchscreen', '360° view camera', 'Heads-up display', '6 airbags'],
    spec: { Engine: '1197 cc', Power: '90 PS', Transmission: '5MT / AMT', Boot: '318 L' }
  },

  {
    id: 'taisor',
    name: 'Urban Cruiser Taisor',
    tag: 'Compact SUV',
    price: '₹ 7,43,000*',
    image: "/cars/taisor.jpg",
    specs: ['1.0L Turbo', '1.2L Petrol', '5 Seats', 'CNG option'],
    features: ['Coupe-SUV styling', 'Wireless charging', 'Connected car tech'],
    spec: { Engine: '998 cc / 1197 cc', Power: '100 PS', Transmission: '5MT / 6AT', Boot: '308 L' }
  },

  {
    id: 'hyryder',
    name: 'Urban Cruiser Hyryder',
    tag: 'Mid-size SUV',
    price: '₹ 12,82,000*',
    image: "/cars/hyryder.jpg",
    specs: ['Hybrid', '27 km/l', 'AWD option', '5 Seats'],
    features: ['Panoramic sunroof', 'Ventilated seats', '9" touchscreen'],
    spec: { Engine: '1.5L Hybrid', Power: '116 PS', Transmission: 'e-CVT', Boot: '373 L' }
  },

  {
    id: 'crysta',
    name: 'Innova Crysta',
    tag: 'MPV',
    price: '₹ 21,00,000*',
    image: "/cars/crysta.jpg",
    specs: ['2.4L Diesel', '7/8 Seats'],
    features: ['Captain seats', 'Big cabin', 'High comfort'],
    spec: { Engine: '2393 cc', Power: '148 PS', Transmission: 'MT / AT', Boot: '300 L' }
  },

  {
    id: 'fortuner',
    name: 'Fortuner',
    tag: 'SUV',
    price: '₹ 34,76,000*',
    image: "/cars/fortuner.jpg",
    specs: ['2.8L Diesel', '4x4', '7 Seats'],
    features: ['4x4 system', 'Premium interior', '7 airbags'],
    spec: { Engine: '2755 cc', Power: '204 PS', Transmission: 'MT / AT', Torque: '500 Nm' }
  }
]

// other constants
export const OTHER_CAR = '__other__'

export const happyFamilies = [
  {
    image: '/family-1.jpg',
    title: 'CONGRATS ANUBHAV MAHAJAN',
    caption: 'C/o. CAR GLORY\nUDHAMPUR.\nHYRYDER E MT BLACK'
  },
  {
    image: '/family-2.jpg',
    title: 'CONGRATULATION VICKY SIR',
    caption: 'C/o. VIKAS ENTERPRISES\nJAKHANI CHOWK\nUDHAMPUR.\nHYRYDER GMT BLACK'
  },
  {
    image: '/family-3.jpg',
    title: 'CONGRATULATION RAVINDER SIR',
    caption: 'Head post office\nJammu\nHead clerk\nPurchase: Hyryder EMT black'
  },
  {
    image: '/family-4.jpg',
    title: 'CONGRATULATIONS SIR',
    caption: 'AKHILESH GUPTA\nPHE DEPARTMENT (AEE)\nUDHAMPUR\nGLANZA GMT'
  },
  {
    image: '/family-5.jpg',
    title: 'CONGRATULATIONS SANDEEP SIR',
    caption: 'PHE DEPARTMENT (XEN)\nUDHAMPUR\nPURCHASE: HYCROSS LE\nAUTOWINGS TOYOTA SHOWROOM UDHAMPUR'
  },
]

export const reviews = [
  { n: 'Customer Name', c: 'ashok sharma', r: 5, t: 'Great experience and smooth delivery.' },
  { n: 'Customer Name', c: 'Harsh verma', r: 5, t: 'Very helpful and transparent pricing.' },
  { n: 'Customer Name', c: 'Renu Sharma', r: 5, t: 'Highly recommended dealer.' },
]