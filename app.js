/* ============================================
   Javakheti Explore — Application Logic
   ============================================ */

const PLACES = [
  {
    id: 1,
    name: 'Rabati Castle',
    nameKa: 'რაბათის ციხე',
    location: 'Akhaltsikhe',
    category: 'culture',
    lat: 41.6394,
    lng: 42.9822,
    rating: 4.8,
    reviews: 234,
    emoji: '🏰',
    image: '/images/rabati.jpg',
    description: 'A stunning restored fortress blending Georgian, Ottoman, and European architecture. Perfect for history lovers and Instagram-worthy photos with friends.',
    tags: ['History', 'Photography', 'Free for students'],
    tips: [
      'Visit at sunset for the best golden-hour photos',
      'Student groups get discounted entry on weekdays',
      'Check out the museum inside the castle walls'
    ]
  },
  {
    id: 2,
    name: 'Borjomi Central Park',
    nameKa: 'ბორჯომის ცენტრალური პარკი',
    location: 'Borjomi',
    category: 'nature',
    lat: 41.8431,
    lng: 43.3839,
    rating: 4.7,
    reviews: 189,
    emoji: '🌲',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    description: 'Walk through lush forests, drink famous Borjomi mineral water from the spring, and ride the cable car for panoramic views of the valley.',
    tags: ['Nature walk', 'Cable car', 'Mineral water'],
    tips: [
      'Bring a reusable bottle to fill at Ekaterina Spring',
      'The cable car runs until 6 PM in summer',
      'Great spot for a picnic with classmates'
    ]
  },
  {
    id: 3,
    name: 'Vardzia Cave City',
    nameKa: 'ვარძია',
    location: 'Aspindza',
    category: 'culture',
    lat: 41.3814,
    lng: 43.2844,
    rating: 4.9,
    reviews: 312,
    emoji: '⛪',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&h=400&fit=crop',
    description: 'An incredible 12th-century cave monastery carved into a cliff face. A must-see UNESCO-worthy site that feels like stepping into another world.',
    tags: ['UNESCO candidate', 'Day trip', 'Adventure'],
    tips: [
      'Wear comfortable shoes — lots of stairs and tunnels',
      'Plan a full day trip from Akhaltsikhe',
      'Bring water and snacks for the hike'
    ]
  },
  {
    id: 4,
    name: 'Bakuriani Ski Resort',
    nameKa: 'ბაკურიანი',
    location: 'Bakuriani',
    category: 'entertainment',
    lat: 41.7531,
    lng: 43.5314,
    rating: 4.6,
    reviews: 156,
    emoji: '⛷️',
    image: '/images/bakuriani.webp',
    description: 'Georgia\'s favorite winter destination — skiing, snowboarding, and cozy cafés. In summer, enjoy hiking trails and fresh mountain air.',
    tags: ['Skiing', 'Winter sports', 'Mountain air'],
    tips: [
      'Student ski passes are available at reduced rates',
      'The Didveli gondola offers amazing views year-round',
      'Book accommodation early during winter holidays'
    ]
  },
  {
    id: 5,
    name: 'Green Monastery',
    nameKa: '\u10db\u10ec\u10d5\u10d0\u10dc\u10d4 \u10db\u10dd\u10dc\u10d0\u10e1\u10e2\u10d4\u10e0\u10d8',
    location: 'Borjomi',
    category: 'nature',
    lat: 41.8656,
    lng: 43.3917,
    rating: 4.5,
    reviews: 98,
    emoji: '🍃',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    description: 'Hidden in a emerald-green gorge, this peaceful monastery is surrounded by moss-covered cliffs and a gentle river — perfect for a quiet escape.',
    tags: ['Peaceful', 'Hiking', 'Hidden gem'],
    tips: [
      'Only a 15-minute drive from Borjomi center',
      'The trail along the river is easy and scenic',
      'Respect the silence — it\'s an active monastery'
    ]
  },
  {
    id: 6,
    name: 'Paravani Lake',
    nameKa: '\u10de\u10d0\u10e0\u10d0\u10d5\u10d0\u10dc\u10d8',
    location: 'Ninotsminda',
    category: 'nature',
    lat: 41.4833,
    lng: 43.2667,
    rating: 4.4,
    reviews: 87,
    emoji: '🏔️',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop',
    description: 'Georgia\'s largest lake sits at 2,073 meters above sea level. Stunning alpine scenery, fresh air, and an otherworldly landscape.',
    tags: ['Alpine', 'Photography', 'Road trip'],
    tips: [
      'Bring warm clothes even in summer — it\'s high altitude',
      'Best visited on a clear day for mountain views',
      'Combine with a visit to Poka St. Nino Monastery nearby'
    ]
  },
  {
    id: 7,
    name: 'Khertvisi Fortress',
    nameKa: '\u10ee\u10d4\u10e0\u10e2\u10d5\u10d8\u10e1\u10d8\u10e1 \u10ea\u10d8\u10ee\u10d4',
    location: 'Aspindza',
    category: 'culture',
    lat: 41.4686,
    lng: 43.2886,
    rating: 4.6,
    reviews: 112,
    emoji: '🛡️',
    image: '/images/khertvisi.jpg',
    description: 'One of the oldest fortresses in Georgia, towering over the Mtkvari River canyon. Combine with Vardzia for an epic day of exploration.',
    tags: ['Ancient', 'Canyon views', 'Free entry'],
    tips: [
      'Stop here on the way to Vardzia — they\'re close',
      'Climb to the top for incredible canyon views',
      'No entrance fee — explore freely'
    ]
  },
  {
    id: 8,
    name: 'Akhaltsikhe Youth Park',
    nameKa: 'ახალციხის პარკი',
    location: 'Akhaltsikhe',
    category: 'entertainment',
    lat: 41.6422,
    lng: 42.9956,
    rating: 4.2,
    reviews: 64,
    emoji: '🛹',
    image: '/images/axalcixis-parki.jpg',
    description: 'The go-to hangout spot in Akhaltsikhe — basketball courts, skate areas, benches, and plenty of space to chill with friends after school.',
    tags: ['Skateboarding', 'Basketball', 'Hangout'],
    tips: [
      'Most active after 4 PM when school ends',
      'Bring a ball or skateboard',
      'Street food vendors nearby on weekends'
    ]
  },
  {
    id: 9,
    name: 'Café 42 Borjomi',
    nameKa: 'კაფე 42',
    location: 'Borjomi',
    category: 'food',
    lat: 41.8417,
    lng: 43.3814,
    rating: 4.3,
    reviews: 76,
    emoji: '☕',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
    description: 'Trendy café popular with local students — great coffee, Wi-Fi for studying, and a cozy vibe. The perfect spot for group projects or just hanging out.',
    tags: ['Coffee', 'Wi-Fi', 'Student-friendly'],
    tips: [
      'Try the hot chocolate — it\'s a local favorite',
      'Free Wi-Fi makes it great for homework sessions',
      'Gets busy on Friday evenings'
    ]
  },
  {
    id: 10,
    name: 'Sapara Monastery',
    nameKa: '\u10e1\u10d0\u10e4\u10d0\u10e0\u10d0',
    location: 'Akhaltsikhe',
    category: 'culture',
    lat: 41.5833,
    lng: 42.7167,
    rating: 4.7,
    reviews: 93,
    emoji: '🕌',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop',
    description: 'A breathtaking monastery complex hidden in the forest near Akhaltsikhe. Dramatic architecture perched on a cliff — feels like a secret discovery.',
    tags: ['Architecture', 'Forest hike', 'Off the beaten path'],
    tips: [
      'The road is winding — best with a driver or organized trip',
      'Visit in autumn for stunning foliage',
      'Wear modest clothing when entering the monastery'
    ]
  },
  {
    id: 11,
    name: 'Borjomi-Kharagauli National Park',
    nameKa: '\u10d1\u10dd\u10e0\u10ef\u10dd\u10db-\u10ee\u10d0\u10e0\u10d0\u10d2\u10d0\u10e3\u10da\u10d8',
    location: 'Borjomi',
    category: 'nature',
    lat: 41.9167,
    lng: 43.3500,
    rating: 4.8,
    reviews: 145,
    emoji: '🌿',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop',
    description: 'One of Europe\'s largest national parks with marked trails, wildlife, and pristine wilderness. From easy walks to multi-day treks — adventure awaits.',
    tags: ['Hiking', 'Wildlife', 'Camping'],
    tips: [
      'Pick up a trail map at the visitor center',
      'The St. Andrew trail is great for beginners',
      'Camping is allowed in designated areas'
    ]
  },
  {
    id: 12,
    name: 'Akhaltsikhe Cinema & Game Zone',
    nameKa: '\u10d9\u10d8\u10dc\u10dd\u10e8\u10d4\u10d0\u10e2\u10e0\u10d8',
    location: 'Akhaltsikhe',
    category: 'entertainment',
    lat: 41.6389,
    lng: 42.9911,
    rating: 4.1,
    reviews: 52,
    emoji: '🎮',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
    description: 'The main entertainment hub in town — catch the latest movies, play games with friends, and enjoy snacks. Student discounts available on weekdays.',
    tags: ['Movies', 'Gaming', 'Student discount'],
    tips: [
      'Tuesday student night — half-price tickets',
      'Book ahead for popular new releases',
      'The game zone has pool tables and arcade games'
    ]
  }
];

const FEED_POSTS = [
  {
    user: 'Nino K.',
    avatar: 'N',
    place: 'Vardzia Cave City',
    story: 'Our class trip to Vardzia was absolutely incredible! Walking through the ancient tunnels felt like time travel. We spent 4 hours exploring and still didn\'t see everything.',
    rating: 5,
    likes: 47,
    time: '2 hours ago',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&h=300&fit=crop'
  },
  {
    user: 'Giorgi M.',
    avatar: 'G',
    place: 'Borjomi Central Park',
    story: 'Perfect weekend hangout — we filled our bottles at the spring, rode the cable car, and had a picnic under the trees. 10/10 would recommend!',
    rating: 5,
    likes: 32,
    time: '5 hours ago',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=300&fit=crop'
  },
  {
    user: 'Mariam T.',
    avatar: 'M',
    place: 'Rabati Castle',
    story: 'The night illumination at Rabati is magical ✨ We went with friends after sunset and the whole castle glows. Best free show in Akhaltsikhe!',
    rating: 5,
    likes: 61,
    time: '1 day ago',
    image: 'https://images.unsplash.com/photo-1596484552834-027a4ed11cee?w=600&h=300&fit=crop'
  },
  {
    user: 'Luka B.',
    avatar: 'L',
    place: 'Bakuriani Ski Resort',
    story: 'First time skiing and I only fell 20 times 😅 The instructors are super patient and student passes are affordable. Already planning our next trip!',
    rating: 4,
    likes: 28,
    time: '2 days ago',
    image: 'https://images.unsplash.com/photo-1551524164-687aa55cfea0?w=600&h=300&fit=crop'
  },
  {
    user: 'Ana S.',
    avatar: 'A',
    place: 'Green Monastery',
    story: 'If you need a break from everything, come here. The moss-covered cliffs and river sound are so peaceful. We sat and talked for hours.',
    rating: 5,
    likes: 39,
    time: '3 days ago',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop'
  },
  {
    user: 'Dato R.',
    avatar: 'D',
    place: 'Akhaltsikhe Youth Park',
    story: 'Skate session after school was fire 🔥 Met three new people from different schools. This is why I love this app — finding your people is easy.',
    rating: 4,
    likes: 22,
    time: '4 days ago',
    image: 'https://images.unsplash.com/photo-1574629810360-7aec2a47d865?w=600&h=300&fit=crop'
  }
];

const STUDENTS = [
  { name: 'Nino K.', school: 'Akhaltsikhe Public School #3', interests: ['Hiking', 'Photography'], avatar: 'N', color: '#a78bfa' },
  { name: 'Giorgi M.', school: 'Borjomi School #1', interests: ['Skiing', 'Music'], avatar: 'G', color: '#38bdf8' },
  { name: 'Mariam T.', school: 'Akhaltsikhe Public School #5', interests: ['History', 'Art'], avatar: 'M', color: '#f472b6' },
  { name: 'Luka B.', school: 'Bakuriani School', interests: ['Sports', 'Gaming'], avatar: 'L', color: '#34d399' },
  { name: 'Ana S.', school: 'Ninotsminda School', interests: ['Nature', 'Reading'], avatar: 'A', color: '#fbbf24' },
  { name: 'Dato R.', school: 'Akhaltsikhe Public School #1', interests: ['Skateboarding', 'Movies'], avatar: 'D', color: '#fb923c' },
  { name: 'Salome G.', school: 'Aspindza School', interests: ['Culture', 'Travel'], avatar: 'S', color: '#818cf8' },
  { name: 'Irakli P.', school: 'Borjomi School #2', interests: ['Basketball', 'Food'], avatar: 'I', color: '#2dd4bf' }
];

const CATEGORY_LABELS = {
  nature: 'Nature',
  entertainment: 'Entertainment',
  culture: 'Culture',
  food: 'Food & Cafés'
};

const CATEGORY_ICONS = {
  nature: '🌿',
  entertainment: '🎉',
  culture: '🏛️',
  food: '☕'
};

// ============================================
// State
// ============================================

let map;
let markers = {};
let activeCategory = 'all';
let activePlaceId = null;
let selectedRating = 0;
let isDarkMap = true;
let userFeedPosts = [];
let isMobileMapOpen = false;

// ============================================
// Mobile Map
// ============================================

function isMobile() {
  return window.matchMedia('(max-width: 900px)').matches;
}

function openMobileMap() {
  if (!isMobile()) return;

  isMobileMapOpen = true;
  const container = document.querySelector('.map-container');
  const toggle = document.getElementById('mobileMapToggle');

  container.classList.add('map-container--visible');
  toggle.classList.add('mobile-map-toggle--map-open');
  toggle.setAttribute('aria-expanded', 'true');

  setTimeout(() => {
    if (map) {
      map.invalidateSize();
      map.setView(REGION_CENTER, REGION_ZOOM);
    }
  }, 400);
}

function closeMobileMap() {
  isMobileMapOpen = false;
  const container = document.querySelector('.map-container');
  const toggle = document.getElementById('mobileMapToggle');

  if (container) container.classList.remove('map-container--visible');
  if (toggle) {
    toggle.classList.remove('mobile-map-toggle--map-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
}

function toggleMobileMap() {
  if (isMobileMapOpen) {
    closeMobileMap();
  } else {
    openMobileMap();
  }
}

function handleViewportChange() {
  if (!isMobile()) {
    closeMobileMap();
    document.querySelector('.map-container')?.classList.remove('map-container--visible');
  }
}

// ============================================
// Map
// ============================================

const REGION_CENTER = [41.75, 43.0];
const REGION_ZOOM = 9;

const TILE_LAYERS = {
  dark: {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; OpenStreetMap &copy; CARTO'
  },
  light: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; OpenStreetMap contributors'
  }
};

let currentTileLayer;

function initMap() {
  map = L.map('map', {
    center: REGION_CENTER,
    zoom: REGION_ZOOM,
    zoomControl: true,
    scrollWheelZoom: true
  });

  currentTileLayer = L.tileLayer(TILE_LAYERS.dark.url, {
    attribution: TILE_LAYERS.dark.attribution,
    maxZoom: 18
  }).addTo(map);

  PLACES.forEach(place => {
    const icon = L.divIcon({
      className: `custom-marker custom-marker--${place.id}`,
      html: `<div class="marker-pin marker-pin--${place.category}"><span>${place.emoji}</span></div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -36]
    });

    const marker = L.marker([place.lat, place.lng], { icon })
      .addTo(map)
      .bindPopup(`
        <h3>${place.name}</h3>
        <p>${place.location} · ${CATEGORY_LABELS[place.category]}</p>
        <button class="popup-btn" onclick="openPlaceDetail(${place.id})">View details →</button>
      `);

    marker.on('click', () => {
      setActivePlace(place.id);
    });

    markers[place.id] = marker;
  });
}

function toggleMapStyle() {
  isDarkMap = !isDarkMap;
  const style = isDarkMap ? TILE_LAYERS.dark : TILE_LAYERS.light;
  map.removeLayer(currentTileLayer);
  currentTileLayer = L.tileLayer(style.url, {
    attribution: style.attribution,
    maxZoom: 18
  }).addTo(map);
}

function centerMap() {
  map.flyTo(REGION_CENTER, REGION_ZOOM, { duration: 1.2 });
}

// ============================================
// Places List & Filters
// ============================================

function getFilteredPlaces() {
  if (activeCategory === 'all') return PLACES;
  return PLACES.filter(p => p.category === activeCategory);
}

function renderPlacesList(places = getFilteredPlaces()) {
  const list = document.getElementById('placesList');
  list.innerHTML = '';

  places.forEach((place, i) => {
    const card = document.createElement('article');
    card.className = `place-card${activePlaceId === place.id ? ' place-card--active' : ''}`;
    card.setAttribute('role', 'listitem');
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <img class="place-card__image" src="${place.image}" alt="${place.name}" loading="lazy" />
      <div class="place-card__body">
        <span class="place-card__category place-card__category--${place.category}">
          ${CATEGORY_ICONS[place.category]} ${CATEGORY_LABELS[place.category]}
        </span>
        <h3 class="place-card__name">${place.name}</h3>
        <p class="place-card__location">${place.location}</p>
        <div class="place-card__meta">
          <span class="place-card__rating">★ ${place.rating}</span>
          <span>${place.reviews} reviews</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => setActivePlace(place.id));
    list.appendChild(card);
  });

  document.getElementById('placeCount').textContent = places.length;
}

function setActivePlace(id) {
  activePlaceId = id;
  const place = PLACES.find(p => p.id === id);
  if (!place) return;

  renderPlacesList();

  document.querySelectorAll('.custom-marker').forEach(el => {
    el.classList.remove('custom-marker--active');
  });
  const markerEl = document.querySelector(`.custom-marker--${id}`);
  if (markerEl) markerEl.classList.add('custom-marker--active');

  map.flyTo([place.lat, place.lng], 13, { duration: 1 });
  markers[id].openPopup();

  openPlaceDetail(id);
}

function filterByCategory(category) {
  activeCategory = category;
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.toggle('filter-chip--active', chip.dataset.category === category);
  });

  const filtered = getFilteredPlaces();
  renderPlacesList(filtered);

  Object.entries(markers).forEach(([id, marker]) => {
    const place = PLACES.find(p => p.id === Number(id));
    if (category === 'all' || place.category === category) {
      marker.addTo(map);
    } else {
      map.removeLayer(marker);
    }
  });
}

// ============================================
// Detail Panel
// ============================================

function openPlaceDetail(id) {
  const place = PLACES.find(p => p.id === id);
  if (!place) return;

  activePlaceId = id;
  renderPlacesList();

  const panel = document.getElementById('detailPanel');
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('detailContent');

  const stars = '★'.repeat(Math.round(place.rating)) + '☆'.repeat(5 - Math.round(place.rating));

  content.innerHTML = `
    <div class="detail-panel__hero">
      <img src="${place.image}" alt="${place.name}" />
    </div>
    <div class="detail-panel__content-inner">
      <span class="detail-panel__category detail-panel__category--${place.category}">
        ${CATEGORY_ICONS[place.category]} ${CATEGORY_LABELS[place.category]}
      </span>
      <h2 class="detail-panel__title">${place.name}</h2>
      <p class="detail-panel__location">${place.nameKa} · ${place.location}</p>
      <div class="detail-panel__rating">
        <span class="detail-panel__stars">${stars}</span>
        <span class="detail-panel__rating-text">${place.rating} (${place.reviews} reviews)</span>
      </div>
      <p class="detail-panel__desc">${place.description}</p>
      <div class="detail-panel__tags">
        ${place.tags.map(tag => `<span class="detail-panel__tag">${tag}</span>`).join('')}
      </div>
      <div class="detail-panel__actions">
        <button class="btn btn--primary" onclick="sharePlace(${place.id})">
          Share Experience
        </button>
        <button class="btn btn--secondary" onclick="planTrip(${place.id})">
          Plan Trip
        </button>
      </div>
      <h3 class="detail-panel__section-title">Student Tips</h3>
      <ul class="detail-panel__tips">
        ${place.tips.map(tip => `<li>${tip}</li>`).join('')}
      </ul>
    </div>
  `;

  panel.classList.add('detail-panel--open');
  panel.setAttribute('aria-hidden', 'false');
  overlay.hidden = false;
}

function closeDetailPanel() {
  document.getElementById('detailPanel').classList.remove('detail-panel--open');
  document.getElementById('detailPanel').setAttribute('aria-hidden', 'true');
  document.getElementById('overlay').hidden = true;
  activePlaceId = null;
  renderPlacesList();
}

window.openPlaceDetail = openPlaceDetail;

function sharePlace(id) {
  const select = document.getElementById('sharePlace');
  select.value = id;
  document.getElementById('shareModal').showModal();
}

window.sharePlace = sharePlace;

function planTrip(id) {
  const place = PLACES.find(p => p.id === id);
  showToast(`Trip to ${place.name} saved! Invite friends from the Connect tab.`);
}

window.planTrip = planTrip;

// ============================================
// Search
// ============================================

function handleSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) {
    renderPlacesList();
    return;
  }

  const results = PLACES.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.nameKa.toLowerCase().includes(q) ||
    p.location.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );

  renderPlacesList(results);

  if (results.length === 1) {
    map.flyTo([results[0].lat, results[0].lng], 13, { duration: 1 });
  }
}

// ============================================
// Views Navigation
// ============================================

function switchView(view) {
  document.querySelectorAll('.nav-btn, .mobile-nav__btn').forEach(btn => {
    const isActive = btn.dataset.view === view;
    btn.classList.toggle('nav-btn--active', isActive);
    btn.classList.toggle('mobile-nav__btn--active', isActive);
  });

  document.querySelectorAll('.view').forEach(v => {
    v.classList.remove('view--active');
    v.hidden = true;
  });

  const target = document.getElementById(`${view}View`);
  target.classList.add('view--active');
  target.hidden = false;

  if (view !== 'map') {
    closeMobileMap();
  }

  if (view === 'map') {
    setTimeout(() => {
      if (map) map.invalidateSize();
    }, 300);
  }
}

// ============================================
// Feed
// ============================================

function renderFeed() {
  const grid = document.getElementById('feedGrid');
  const allPosts = [...userFeedPosts, ...FEED_POSTS];

  grid.innerHTML = allPosts.map((post, i) => `
    <article class="feed-card" style="animation-delay: ${i * 0.08}s">
      <img class="feed-card__image" src="${post.image}" alt="${post.place}" loading="lazy" />
      <div class="feed-card__body">
        <div class="feed-card__user">
          <div class="feed-card__avatar">${post.avatar}</div>
          <div>
            <div class="feed-card__username">${post.user}</div>
            <div class="feed-card__time">${post.time}</div>
          </div>
        </div>
        <h3 class="feed-card__place">${post.place}</h3>
        <p class="feed-card__story">${post.story}</p>
        <div class="feed-card__footer">
          <span class="feed-card__rating">${'★'.repeat(post.rating)}${'☆'.repeat(5 - post.rating)}</span>
          <span class="feed-card__likes" onclick="this.textContent = '❤️ ' + (${post.likes} + 1) + ' likes'">
            🤍 ${post.likes} likes
          </span>
        </div>
      </div>
    </article>
  `).join('');
}

// ============================================
// Connect
// ============================================

function renderConnect() {
  const grid = document.getElementById('connectGrid');

  grid.innerHTML = STUDENTS.map((student, i) => `
    <article class="connect-card" style="animation-delay: ${i * 0.06}s">
      <div class="connect-card__avatar" style="background: ${student.color}">${student.avatar}</div>
      <h3 class="connect-card__name">${student.name}</h3>
      <p class="connect-card__school">${student.school}</p>
      <div class="connect-card__interests">
        ${student.interests.map(i => `<span class="connect-card__interest">${i}</span>`).join('')}
      </div>
      <button class="connect-card__btn" onclick="connectWith(this, '${student.name}')">
        Connect
      </button>
    </article>
  `).join('');
}

function connectWith(btn, name) {
  btn.textContent = 'Connected ✓';
  btn.classList.add('connect-card__btn--connected');
  btn.disabled = true;
  showToast(`You're now connected with ${name}!`);
}

window.connectWith = connectWith;

// ============================================
// Share Modal
// ============================================

function initShareModal() {
  const select = document.getElementById('sharePlace');
  select.innerHTML = PLACES.map(p =>
    `<option value="${p.id}">${p.name} — ${p.location}</option>`
  ).join('');

  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = Number(star.dataset.rating);
      document.querySelectorAll('.star').forEach((s, i) => {
        s.classList.toggle('star--active', i < selectedRating);
      });
    });
  });

  document.getElementById('shareForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const placeId = Number(document.getElementById('sharePlace').value);
    const story = document.getElementById('shareStory').value;
    const place = PLACES.find(p => p.id === placeId);

    if (!selectedRating) {
      showToast('Please select a rating');
      return;
    }

    userFeedPosts.unshift({
      user: 'You',
      avatar: 'Y',
      place: place.name,
      story,
      rating: selectedRating,
      likes: 0,
      time: 'Just now',
      image: place.image
    });

    document.getElementById('shareModal').close();
    document.getElementById('shareForm').reset();
    selectedRating = 0;
    document.querySelectorAll('.star').forEach(s => s.classList.remove('star--active'));

    renderFeed();
    showToast('Your experience has been shared!');
    switchView('feed');
  });
}

// ============================================
// Toast
// ============================================

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('toast--visible');
  setTimeout(() => toast.classList.remove('toast--visible'), 3000);
}

// ============================================
// Event Listeners
// ============================================

function initEvents() {
  document.querySelectorAll('.nav-btn, .mobile-nav__btn').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  document.getElementById('mobileMapToggle').addEventListener('click', openMobileMap);
  document.getElementById('mobileMapClose').addEventListener('click', closeMobileMap);

  window.addEventListener('resize', handleViewportChange);

  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => filterByCategory(chip.dataset.category));
  });

  document.getElementById('detailClose').addEventListener('click', closeDetailPanel);
  document.getElementById('overlay').addEventListener('click', closeDetailPanel);

  document.getElementById('locateBtn').addEventListener('click', centerMap);
  document.getElementById('layersBtn').addEventListener('click', toggleMapStyle);

  document.getElementById('searchToggle').addEventListener('click', () => {
    const bar = document.getElementById('searchBar');
    bar.hidden = !bar.hidden;
    if (!bar.hidden) document.getElementById('searchInput').focus();
  });

  document.getElementById('searchClose').addEventListener('click', () => {
    document.getElementById('searchBar').hidden = true;
    document.getElementById('searchInput').value = '';
    renderPlacesList();
  });

  document.getElementById('searchInput').addEventListener('input', (e) => {
    handleSearch(e.target.value);
  });

  document.getElementById('shareExperienceBtn').addEventListener('click', () => {
    document.getElementById('shareModal').showModal();
  });

  document.getElementById('shareModalClose').addEventListener('click', () => {
    document.getElementById('shareModal').close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetailPanel();
  });
}

// ============================================
// Init
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initMap();
  renderPlacesList();
  renderFeed();
  renderConnect();
  initShareModal();
  initEvents();
});
