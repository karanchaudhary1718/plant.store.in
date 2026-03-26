// ─── HERO SLIDER LOGIC ───
let currentSlide = 0;
const totalSlides = 4;
let sliderInterval;

function goSlide(index) {
  currentSlide = index;
  document.getElementById('sliderWrapper').style.transform = `translateX(-${currentSlide * 25}%)`;
  document.querySelectorAll('.slider-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function slideMove(dir) {
  currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
  goSlide(currentSlide);
  resetSliderTimer();
}

function startSlider() {
  sliderInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    goSlide(currentSlide);
  }, 4500);
}

function resetSliderTimer() {
  clearInterval(sliderInterval);
  startSlider();
}

startSlider();

const sliderEl = document.querySelector('.hero-slider');
if (sliderEl) {
  sliderEl.addEventListener('mouseenter', () => clearInterval(sliderInterval));
  sliderEl.addEventListener('mouseleave', startSlider);
}

let touchStartX = 0;
let touchEndX = 0;
if (sliderEl) {
  sliderEl.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
  sliderEl.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) slideMove(diff > 0 ? 1 : -1);
  }, { passive: true });
}

// ─── PRODUCT DATA ───
const products = [
  {
    id:1, name:'Monstera Deliciosa', category:'indoor', price:1999, oldPrice:2499,
    rating:4.9, reviews:128, size:'Medium', badge:'Bestseller', badgeType:'hot', isNew:false,
    desc:'Famous for its dramatic split leaves. Iconic Swiss Cheese Plant — thrives in bright indirect light and grows fast.', light:'Indirect Light',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530593/monstera_deliciosa_rcupxr.jpg',
    imgs:[
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774513640/WhatsApp_Image_2026-03-26_at_10.29.26_AM_1_ctkoui.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530386/WhatsApp_Image_2026-03-26_at_1.06.00_PM_ai1x0i.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530373/WhatsApp_Image_2026-03-26_at_1.05.59_PM_q9pinj.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530375/WhatsApp_Image_2026-03-26_at_1.06.00_PM_1_chmmhs.jpg'
    ]
  },
  {
    id:2, name:'Anthurium Red', category:'flowering', price:999, oldPrice:1249,
    rating:4.8, reviews:96, size:'Medium', badge:'New', badgeType:'new', isNew:true,
    desc:'Stunning waxy red blooms that last for months. Low-maintenance and air-purifying. Perfect gifting plant.', light:'Indirect Light',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530399/WhatsApp_Image_2026-03-26_at_2.34.07_PM_rbhism.jpg',
    imgs:[
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530399/WhatsApp_Image_2026-03-26_at_2.34.07_PM_rbhism.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530396/WhatsApp_Image_2026-03-26_at_2.34.06_PM_m845tv.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530393/WhatsApp_Image_2026-03-26_at_2.34.06_PM_1_f96c00.jpg'
    ]
  },
  {
    id:3, name:'Areca Palm', category:'outdoor', price:1599, oldPrice:1999,
    rating:4.7, reviews:74, size:'Large', badge:'Sale', badgeType:'sale', isNew:false,
    desc:'A designer favourite with large, violin-shaped leaves. Bold statement for any interior space.', light:'Bright Indirect',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530411/WhatsApp_Image_2026-03-26_at_2.51.19_PM_z0bprt.jpg',
    imgs:[
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530411/WhatsApp_Image_2026-03-26_at_2.51.19_PM_z0bprt.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530409/WhatsApp_Image_2026-03-26_at_2.51.19_PM_1_svhf3q.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530459/WhatsApp_Image_2026-03-26_at_2.51.22_PM_gf5xbb.jpg'
    ]
  },
  {
    id:4, name:'Fiddle Leaf Fig', category:'XL-plants', price:1099, oldPrice:1599,
    rating:4.9, reviews:156, size:'Large', badge:'Bestseller', badgeType:'hot', isNew:false,
    desc:'Tropical accent plant that doubles as a natural air humidifier. Perfect for bright patios and living rooms.', light:'Bright Indirect',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530401/WhatsApp_Image_2026-03-26_at_2.38.54_PM_1_ndztco.jpg',
    imgs:[
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530401/WhatsApp_Image_2026-03-26_at_2.38.54_PM_1_ndztco.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530405/WhatsApp_Image_2026-03-26_at_2.38.54_PM_cojsor.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774530403/WhatsApp_Image_2026-03-26_at_2.38.53_PM_sz3rbp.jpg'
    ]
  },
  {
    id:5, name:'Haworthia Fasciata', category:'succulents', price:299, oldPrice:499,
    rating:4.8, reviews:88, size:'Small', badge:'New', badgeType:'new', isNew:true,
    desc:'Stunning zebra-striped succulent with white horizontal bands. Extremely low-maintenance, perfect for desks.', light:'Full Sun',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532157/WhatsApp_Image_2026-03-26_at_6.28.09_PM_1_omf6jp.jpg',
    imgs:[
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532157/WhatsApp_Image_2026-03-26_at_6.28.09_PM_1_omf6jp.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532171/WhatsApp_Image_2026-03-26_at_6.28.09_PM_gmuqks.jpg',
    ]
  },
  {
    id:6, name:'ZZ-Plant', category:'outdoor', price:1599, oldPrice:1999,
    rating:4.9, reviews:145, size:'Small', badge:'Bestseller', badgeType:'hot', isNew:false,
    desc:'Gorgeous variegated waxy leaves with pink margins. Hanging wax plant that blooms fragrant star-shaped flowers.', light:'Indirect Light',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532353/zz-plant_ezol03.jpg',
    imgs:[
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532353/zz-plant_ezol03.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532353/zz-plant_ezol03.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532470/WhatsApp_Image_2026-03-26_at_6.34.27_PM_n8lqxl.jpg'
    ]
  },
  {
    id:7, name:'Bird of Paradise', category:'outdoor', price:1499, oldPrice:1999,
    rating:4.8, reviews:62, size:'Large', badge:'New', badgeType:'new', isNew:true,
    desc:'Dramatic tropical plant with enormous paddle-shaped leaves. A statement piece for patios, balconies, and bright rooms.', light:'Full Sun',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532651/bird_of_paradise_aqkzsg.jpg',
    imgs:[
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532588/WhatsApp_Image_2026-03-26_at_6.31.06_PM_hocazq.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532583/WhatsApp_Image_2026-03-26_at_6.31.05_PM_1_kvpb0j.jpg',
      'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532651/bird_of_paradise_aqkzsg.jpg'
    ]
  },
  {
    id:8, name:'Money Plant', category:'indoor', price:349, oldPrice:499,
    rating:4.7, reviews:103, size:'Small', badge:'Sale', badgeType:'sale', isNew:false,
    desc:'The trendy Chinese Money Plant with perfect round coin-shaped leaves. Easy to propagate and share with friends.', light:'Indirect Light',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532792/money_plant_a2othv.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532792/money_plant_a2othv.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532181/WhatsApp_Image_2026-03-26_at_6.32.59_PM_c2j61l.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532176/WhatsApp_Image_2026-03-26_at_6.32.58_PM_lddo3a.jpg'
]
  },
  {
    id:9, name:'Thuja', category:'Indoor', price:1249, oldPrice:1899,
    rating:4.9, reviews:134, size:'Small', badge:'New', badgeType:'new', isNew:true,
    desc:"Delicate trailing vine with tiny heart-shaped leaves in silver and purple. A collector's gem that's surprisingly tough.", light:'Bright Indirect',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532974/thuja_vxeyq3.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774532974/thuja_vxeyq3.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533122/WhatsApp_Image_2026-03-26_at_6.51.32_PM_uyytgt.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533126/WhatsApp_Image_2026-03-26_at_6.51.33_PM_1_af3t6w.jpg',
'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533133/WhatsApp_Image_2026-03-26_at_6.51.33_PM_qwu0wt.jpg'
]
  },
  {
    id:10, name:'Aglonima Strips', category:'indoor', price:1249, oldPrice:1899,
    rating:4.8, reviews:79, size:'Medium', badge:'Rare', badgeType:'hot', isNew:true,
    desc:"Jewel Alocasia with velvety dark black-green leaves and striking silver veins. A rare collector's plant.", light:'Low Light',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533293/aglonima_stripes_ifrovd.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533293/aglonima_stripes_ifrovd.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533444/WhatsApp_Image_2026-03-26_at_6.57.03_PM_lk8ptr.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533444/WhatsApp_Image_2026-03-26_at_6.57.03_PM_lk8ptr.jpg'
]
  },
  {
    id:11, name:'Aglonema dove', category:'outdoor', price:349, oldPrice:499,
    rating:4.8, reviews:76, size:'Medium', badge:'Sale', badgeType:'sale', isNew:false,
    desc:'Spectacular papery bracts in magenta and pink. Thrives in full sun and is a garden show-stopper all season.', light:'Full Sun',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533620/aglonema_dove_smyhul.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533620/aglonema_dove_smyhul.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533712/WhatsApp_Image_2026-03-26_at_7.01.23_PM_spfazu.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533717/WhatsApp_Image_2026-03-26_at_7.01.24_PM_1_uel8nk.jpg'
]
  },
  {
    id:12, name:'china doll', category:'outdoor', price:1899, oldPrice:2299,
    rating:4.7, reviews:91, size:'Small', badge:'New', badgeType:'new', isNew:true,
    desc:'Crown of Thorns — bright red blooms year-round on a sturdy cactus-like stem. Drought-tolerant and long-lasting.', light:'Full Sun',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533868/china_doll_brtvir.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533955/WhatsApp_Image_2026-03-26_at_7.05.30_PM_pjzkfq.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774533959/WhatsApp_Image_2026-03-26_at_7.05.30_PM_1_h2tq8h.jpg'
  ]
  },
  {
    id:13, name:'Sanseleria laurentii', category:'indoor', price:2249, oldPrice:2999,
    rating:4.9, reviews:112, size:'Medium', badge:'Bestseller', badgeType:'hot', isNew:false,
    desc:'Large silvery-green striped leaves with a velvety texture. The ultimate living room statement plant.', light:'Low Light',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534170/sanseleria_laurentii_jseugx.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534170/sanseleria_laurentii_jseugx.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534181/WhatsApp_Image_2026-03-26_at_7.09.17_PM_lwpor3.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534185/WhatsApp_Image_2026-03-26_at_7.09.18_PM_1_tljrrm.jpg'
]
  },
  {
    id:14, name:'Peace lily', category:'succulents', price:1249, oldPrice:1849,
    rating:4.7, reviews:67, size:'Small', badge:'Sale', badgeType:'sale', isNew:false,
    desc:'Classic golden barrel cactus with bold ribbed form and yellow spines. Zero water needs, maximum character.', light:'Full Sun',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534352/peace_lily_large_d3xvox.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534352/peace_lily_large_d3xvox.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534502/WhatsApp_Image_2026-03-26_at_7.14.23_PM_dikgx4.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534505/WhatsApp_Image_2026-03-26_at_7.14.24_PM_ma0djn.jpg'
]
  },
  {
    id:15, name:'Acchemea Plant', category:'hanging', price:999, oldPrice:1549,
    rating:4.8, reviews:85, size:'Small', badge:'New', badgeType:'new', isNew:true,
    desc:'Aeschynanthus with trailing vines and bright tubular red blooms that emerge like lipstick. Stunning hanging basket plant.', light:'Indirect Light',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534696/acchmea_plant_frt3ka.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534696/acchmea_plant_frt3ka.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534744/WhatsApp_Image_2026-03-26_at_7.18.42_PM_1_cgenfp.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534747/WhatsApp_Image_2026-03-26_at_7.18.42_PM_yczipk.jpg'
]
  },
  {
    id:16, name:'Poinsettio pink', category:'flowering', price:1249, oldPrice:1899,
    rating:4.9, reviews:198, size:'Medium', badge:'Bestseller', badgeType:'hot', isNew:false,
    desc:'The most elegant flowering houseplant. Long-lasting butterfly-shaped blooms in white, pink, and purple. Perfect gift.', light:'Indirect Light',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534960/poinsettia_pink_d9nxg1.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534960/poinsettia_pink_d9nxg1.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534971/WhatsApp_Image_2026-03-26_at_7.22.31_PM_1_xjh7ku.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534976/WhatsApp_Image_2026-03-26_at_7.22.31_PM_aknei3.jpg',
'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774534988/WhatsApp_Image_2026-03-26_at_7.22.32_PM_evwudo.jpg'
]
  },
  {
    id:17, name:'Kalanchoe Plant', category:'indoor', price:499, oldPrice:899,
    rating:4.8, reviews:143, size:'Large', badge:'Sale', badgeType:'sale', isNew:false,
    desc:'Braided trunk money tree — symbol of good fortune. Easy care, beautiful form, and perfect for offices.', light:'Indirect Light',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774538118/kalanchoe_plabt_dbfgcw.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774538118/kalanchoe_plabt_dbfgcw.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774538302/WhatsApp_Image_2026-03-26_at_8.17.39_PM_asaavh.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774538307/WhatsApp_Image_2026-03-26_at_8.17.40_PM_e5tnoa.jpg'
]
  },
  {
    id:18, name:'Christmas cactus', category:'flowering', price:249, oldPrice:599,
    rating:4.7, reviews:88, size:'Small', badge:'New', badgeType:'new', isNew:true,
    desc:'Stunning bonsai-like succulent with swollen trunk and vivid pink-red blooms. Drought-tolerant showstopper.', light:'Full Sun',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774538473/christmas_cactus_xjoacq.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774538473/christmas_cactus_xjoacq.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774538537/WhatsApp_Image_2026-03-26_at_8.21.50_PM_1_obmc1u.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774538541/WhatsApp_Image_2026-03-26_at_8.21.50_PM_tpkpuv.jpg'
]
  },
  {
    id:19, name:'Agloonema Snow', category:'hanging', price:1049, oldPrice:1499,
    rating:4.8, reviews:56, size:'Small', badge:'Sale', badgeType:'sale', isNew:false,
    desc:'Mistletoe Cactus — a jungle cactus with pencil-thin trailing stems. Unique, waterfall-like texture. No spines!', light:'Indirect Light',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539163/agloonema_snow_kdkvn2.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539163/agloonema_snow_kdkvn2.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539203/WhatsApp_Image_2026-03-26_at_8.32.26_PM_1_lov4xz.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539208/WhatsApp_Image_2026-03-26_at_8.32.26_PM_c5zuhp.jpg'
]
  },
  {
    id:20, name:'Haworthia coarctata plant', category:'flowering', price:299, oldPrice:349,
    rating:4.7, reviews:92, size:'Medium', badge:'Sale', badgeType:'sale', isNew:false,
    desc:'One of the best air-purifying houseplants. Elegant white blooms and glossy leaves. Thrives in low-light spaces.', light:'Indirect Light',
    img:'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539664/haworthia_coarctata_mk55o5.jpg',
    imgs:['https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539664/haworthia_coarctata_mk55o5.jpg',
    'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539677/WhatsApp_Image_2026-03-26_at_8.39.49_PM_lgymf8.jpg',
  'https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539683/WhatsApp_Image_2026-03-26_at_8.39.49_PM_1_p478nj.jpg']
  },
];

// ─── BLOG POSTS DATA ───
const blogPosts = [
  {
    id: 0,
    title: "The Beginner's Guide to Succulent Care",
    category: "Care Guide",
    date: "April 12, 2024",
    readTime: "5 min read",
    img: "https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539801/vertical-green-wall-maintenance-1067x800_qpwhqe.jpg",
    content: `
      <p>Succulents are among the most popular houseplants in the world — and for good reason. They're beautiful, diverse, and incredibly easy to care for once you understand their basic needs.</p>
      <h2>Why Succulents Are Special</h2>
      <p>Succulents store water in their thick, fleshy leaves, stems, or roots. This unique adaptation means they can survive long periods without water — making them perfect for busy plant parents.</p>
      <h2>1. Watering — The Most Common Mistake</h2>
      <p>The number one killer of succulents is <strong>overwatering</strong>. Unlike most houseplants, succulents need their soil to dry out completely between waterings.</p>
      <ul>
        <li>In summer: Water once every 7–10 days</li>
        <li>In winter: Water once every 3–4 weeks</li>
        <li>Always check the soil — if it's still slightly damp, wait!</li>
      </ul>
      <div class="tip-box"><strong>💡 Pro Tip:</strong> The "soak and dry" method works best. Water thoroughly until it drains from the bottom, then don't water again until the top 2 inches of soil are completely dry.</div>
      <h2>2. Sunlight Requirements</h2>
      <p>Most succulents love bright, direct sunlight for at least 4–6 hours a day. A south or east-facing windowsill is ideal indoors.</p>
      <h2>3. The Right Soil</h2>
      <p>Always use <strong>well-draining soil</strong>. Mix standard potting soil with coarse sand or perlite in a 1:1 ratio, or simply buy cactus/succulent mix.</p>
      <p>With just a little attention to watering and light, succulents will reward you with years of easy, gorgeous growth. Happy planting! 🌵</p>
    `
  },
  {
    id: 1,
    title: "Top 10 Air-Purifying Plants for Your Home",
    category: "Indoor Plants",
    date: "March 28, 2024",
    readTime: "7 min read",
    img: "https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539814/bird_of_paradise_suquy1.jpg",
    content: `
      <p>We spend nearly 90% of our time indoors — and the air we breathe inside can actually be 2–5 times more polluted than outdoor air. The good news? Certain houseplants are natural air purifiers.</p>
      <h2>The Top 10 Air-Purifying Plants</h2>
      <h3>1. Peace Lily</h3><p>Removes ammonia, benzene, formaldehyde, and trichloroethylene. Thrives in low light — ideal for bedrooms.</p>
      <h3>2. Snake Plant</h3><p>Releases oxygen at night. Removes benzene, formaldehyde, and xylene. Almost indestructible.</p>
      <h3>3. Spider Plant</h3><p>Safe for pets and children. Removes carbon monoxide and formaldehyde.</p>
      <h3>4. Areca Palm</h3><p>Acts as a natural humidifier. Excellent for dry climates. Elegant, tropical look.</p>
      <h3>5. Monstera Deliciosa</h3><p>Effectively removes formaldehyde. Its large leaves have a massive surface area for gas exchange.</p>
      <div class="tip-box"><strong>💡 Placement Tip:</strong> NASA recommends at least one plant per 9 square metres of floor space for maximum air purification.</div>
      <p>Bringing even a few of these plants into your home can measurably improve indoor air quality. Your lungs will thank you! 🌿</p>
    `
  },
  {
    id: 2,
    title: "How to Water Your Plants Perfectly",
    category: "Watering Tips",
    date: "March 15, 2024",
    readTime: "4 min read",
    img: "https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539884/plant_care_service_480x480_cbzvml.webp",
    content: `
      <p>Watering sounds simple, but it's actually the area where most plant parents go wrong. Both overwatering and underwatering are deadly.</p>
      <h2>The Golden Rule</h2>
      <p><strong>Water the soil, not the schedule.</strong> Most plants don't need water every day, or even every week.</p>
      <div class="tip-box"><strong>💡 The Finger Test:</strong> Insert your finger 2–3 cm into the soil. If it feels moist, wait. If it's dry, water. It's that simple.</div>
      <h2>Signs of Overwatering</h2>
      <ul>
        <li>Yellowing leaves (especially lower leaves)</li>
        <li>Mushy, brown leaf tips</li>
        <li>Wilting despite moist soil</li>
        <li>Mouldy soil surface or fungus gnats</li>
      </ul>
      <h2>Signs of Underwatering</h2>
      <ul>
        <li>Dry, crispy brown leaf edges</li>
        <li>Leaves curling inward</li>
        <li>Drooping or wilting</li>
      </ul>
      <p>Master the art of watering, and you've solved 80% of common plant problems. Trust your soil, not your calendar! 💧</p>
    `
  },
  {
    id: 3,
    title: "Spring Repotting: When and How",
    category: "Seasonal",
    date: "March 5, 2024",
    readTime: "6 min read",
    img: "https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539828/kWFy8U2P2Kc8gPrdxfYt2T_xrwg7s.jpg",
    content: `
      <p>Spring (February–April in India) is the best time to repot your plants. Plants enter their active growth phase — making them resilient enough to handle the stress of repotting.</p>
      <h2>Signs It's Time to Repot</h2>
      <ul>
        <li>Roots growing out of drainage holes</li>
        <li>Plant dries out within 1–2 days of watering</li>
        <li>Soil has become very compacted</li>
        <li>Slow or stopped growth despite good care</li>
      </ul>
      <div class="tip-box"><strong>💡 Pot Size Tip:</strong> Don't upsize too dramatically! Go up one pot size at a time.</div>
      <h2>Step-by-Step Guide</h2>
      <p><strong>Step 1:</strong> Water your plant 24 hours before repotting.</p>
      <p><strong>Step 2:</strong> Gently slide the plant out. Trim any dead or circling roots.</p>
      <p><strong>Step 3:</strong> Add fresh potting mix and position your plant. Fill around the sides.</p>
      <p><strong>Step 4:</strong> Water thoroughly and place in bright, indirect light for 2–3 weeks to recover.</p>
      <p>Happy repotting season! A fresh pot of soil is like a birthday gift for your plant. 🪴</p>
    `
  },
  {
    id: 4,
    title: "Best Plants to Gift This Season",
    category: "Gifting",
    date: "February 22, 2024",
    readTime: "5 min read",
    img: "https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539834/15310bcc75453575afe0a77332dcfda2_hgfaub.jpg",
    content: `
      <p>Plants make the most thoughtful, lasting gifts — they grow with the person, purify their air, and brighten their space every single day.</p>
      <h2>For the Busy Professional</h2>
      <p><strong>Snake Plant</strong> — Virtually indestructible. Can survive weeks without water and low light. Perfect for frequent travellers.</p>
      <h2>For the Home Decorator</h2>
      <p><strong>Monstera Deliciosa</strong> — The most iconic statement plant. Instantly elevates any room's aesthetic.</p>
      <div class="tip-box"><strong>🎁 Gift Tip:</strong> Always include a small care card with basic watering and light instructions!</div>
      <h2>For Someone Who Loves Flowers</h2>
      <p><strong>Orchid Phalaenopsis</strong> — Blooms last 3–6 months and the plant can rebloom for years. The ultimate floral gift.</p>
      <h2>Presentation Tips</h2>
      <ul>
        <li>Choose a beautiful pot that matches the recipient's home aesthetic</li>
        <li>Wrap the pot in kraft paper and twine for a natural, elegant look</li>
        <li>Add a personalised care card from B.L. Verdantix</li>
      </ul>
      <p>At B.L. Verdantix, all our plants come beautifully gift-wrapped on request! 🌸</p>
    `
  },
  {
    id: 5,
    title: "Creating a Thriving Balcony Garden",
    category: "Balcony Garden",
    date: "February 10, 2024",
    readTime: "8 min read",
    img: "https://res.cloudinary.com/dpnplxgjo/image/upload/v1774539843/poinsettia_pink_xt4x5f.jpg",
    content: `
      <p>Even the smallest balcony can become a lush, green retreat. Whether you have a tiny 4x6 foot space or a generous wrap-around terrace, container gardening can transform it.</p>
      <h2>Best Plants by Sunlight</h2>
      <h3>Full Sun Balconies (5+ hours direct sun)</h3>
      <ul>
        <li>Bougainvillea — spectacular colour, drought-tolerant</li>
        <li>Marigolds, Zinnias, Petunias — cheerful seasonal flowers</li>
        <li>Tomatoes, Chillies, Herbs (basil, mint, coriander)</li>
      </ul>
      <h3>Shaded Balcony</h3>
      <ul>
        <li>Calathea, Peace Lily — dramatic foliage, love shade</li>
        <li>Snake Plant, ZZ Plant — nearly indestructible</li>
      </ul>
      <div class="tip-box"><strong>💡 Space Hack:</strong> Use vertical space! Wall-mounted planters, hanging baskets, and tiered plant stands multiply your planting area.</div>
      <p>A balcony garden is one of the most rewarding projects you can take on. Start small, observe what thrives, and expand from there. 🌿</p>
    `
  }
];

let cart     = JSON.parse(localStorage.getItem('blv_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('blv_wish') || '[]');
let filteredProducts = [...products];
let currentProduct = null;

// ─── NAVIGATION ───
function goPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const el  = document.getElementById('page-' + page);
  if (el) el.classList.add('active');
  const nav = document.getElementById('nav-' + page);
  if (nav) nav.classList.add('active');
  window.scrollTo(0, 0);
  if (page === 'home')     { renderBestSellers(); renderNewLaunches(); }
  if (page === 'shop')     renderShop();
  if (page === 'cart')     renderCart();
  if (page === 'wishlist') renderWishlist();
}

// ─── CARD BUILDER ───
function createProductCard(p, showNewBadge) {
  const inWL = wishlist.includes(p.id);
  const newBadgeHTML = showNewBadge && p.isNew
    ? `<div class="new-launch-badge">🆕 Just Arrived</div>`
    : '';
  return `
  <div class="product-card">
    <div class="product-img-wrap">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      ${newBadgeHTML}
      <div class="product-badges"><span class="product-badge badge-${p.badgeType}">${p.badge}</span></div>
      <div class="product-actions">
        <button class="action-btn ${inWL?'wishlisted':''}" onclick="toggleWishlist(${p.id},this)" title="${inWL?'Remove':'Add to Wishlist'}">
          <i class="${inWL?'fas':'far'} fa-heart"></i>
        </button>
        <button class="action-btn" onclick="viewProduct(${p.id})" title="Quick View"><i class="fas fa-eye"></i></button>
        <button class="action-btn" onclick="addToCart(${p.id})" title="Add to Cart"><i class="fas fa-shopping-bag"></i></button>
      </div>
    </div>
    <div class="product-body">
      <span class="product-category">${p.category === 'succulents' ? 'Succulents' : p.category === 'flowering' ? 'Flowering' : p.category === 'hanging' ? 'Hanging' : p.category === 'outdoor' ? 'Outdoor' : 'Indoor'}</span>
      <h3 style="cursor:pointer" onclick="viewProduct(${p.id})">${p.name}</h3>
      <div class="product-meta">
        <span class="product-size">${p.size} · ${p.light}</span>
        <div class="stars">★★★★★ <span>(${p.reviews})</span></div>
      </div>
      <div class="product-price-row">
        <div class="product-price">₹${p.price} <span class="old-price">₹${p.oldPrice}</span></div>
        <button class="wa-order-btn" onclick="orderOnWA(${p.id})" title="Order on WhatsApp"><i class="fab fa-whatsapp"></i></button>
      </div>
    </div>
  </div>`;
}

function renderBestSellers() {
  const best = products.filter(p => p.badge === 'Bestseller').slice(0, 4);
  document.getElementById('homeBestSellers').innerHTML = best.map(p => createProductCard(p, false)).join('');
}

function renderNewLaunches() {
  const newPlants = products.filter(p => p.isNew).slice(0, 4);
  document.getElementById('newLaunchesGrid').innerHTML = newPlants.map(p => createProductCard(p, true)).join('');
}

function renderShop() {
  document.getElementById('shopGrid').innerHTML = filteredProducts.map(p => createProductCard(p, false)).join('');
  document.getElementById('shopCount').textContent = `Showing ${filteredProducts.length} plant${filteredProducts.length !== 1 ? 's' : ''}`;
}

// ─── PRODUCT DETAIL ───
function viewProduct(id) {
  const p = products.find(x => x.id === id);
  currentProduct = p;
  document.getElementById('pdName').textContent     = p.name;
  document.getElementById('pdPrice').textContent    = `₹${p.price}`;
  document.getElementById('pdOldPrice').textContent = `₹${p.oldPrice}`;
  document.getElementById('pdDesc').textContent     = p.desc;
  document.getElementById('pdCategory').textContent = p.category;
  document.getElementById('pdReviews').textContent  = `(${p.reviews} verified buyers)`;
  document.getElementById('pdMainImgEl').src        = p.imgs[0] || p.img;
  document.getElementById('pdMainImgEl').alt        = p.name;
  document.getElementById('pdQty').value = 1;

  const imgList = p.imgs && p.imgs.length > 0 ? p.imgs : [p.img];
  document.getElementById('pdThumbs').innerHTML = imgList.map((imgUrl, i) =>
    `<div class="product-thumb ${i===0?'active':''}"
      onclick="this.closest('.product-thumbs').querySelectorAll('.product-thumb').forEach(t=>t.classList.remove('active'));this.classList.add('active');document.getElementById('pdMainImgEl').src='${imgUrl}'">
      <img src="${imgUrl}" alt="Plant view ${i+1}" loading="lazy">
    </div>`
  ).join('');

  const related = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  document.getElementById('relatedProducts').innerHTML = related.map(r => createProductCard(r, false)).join('');
  goPage('product');
}

function changeQty(d) {
  const el = document.getElementById('pdQty');
  el.value = Math.max(1, Math.min(20, parseInt(el.value) + d));
}

function selectSize(btn) {
  btn.closest('.size-options').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ─── BLOG ───
function openBlogPost(index) {
  const post = blogPosts[index];
  if (!post) return;
  document.getElementById('bpTitle').textContent    = post.title;
  document.getElementById('bpDate').textContent     = post.date;
  document.getElementById('bpReadTime').textContent = post.readTime;
  document.getElementById('bpCategory').textContent = post.category;
  document.getElementById('bpTag').textContent      = post.category;
  document.getElementById('bpHeroImg').src          = post.img;
  document.getElementById('bpHeroImg').alt          = post.title;
  document.getElementById('bpContent').innerHTML    = post.content;
  goPage('blogpost');
}

// ─── WHATSAPP ───
const WA_NUMBER = '9058545076';

function openWhatsApp(msg) {
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

function orderOnWA(id) {
  const p = products.find(x => x.id === id);
  const msg = `🌿 *B.L. Verdantix Order*\n\nHello! I'd like to order:\n\n*Plant:* ${p.name}\n*Price:* ₹${p.price}\n*Quantity:* 1\n\nPlease confirm availability and share delivery details.`;
  openWhatsApp(msg);
}

function orderProductOnWA() {
  if (!currentProduct) return;
  const qty  = parseInt(document.getElementById('pdQty').value);
  const size = document.querySelector('.size-btn.active')?.textContent || 'Medium';
  const msg  = `🌿 *B.L. Verdantix Order*\n\nHello! I'd like to order:\n\n*Plant:* ${currentProduct.name}\n*Size:* ${size}\n*Price:* ₹${currentProduct.price} × ${qty} = ₹${currentProduct.price * qty}\n\nPlease confirm availability and guide me for delivery.`;
  openWhatsApp(msg);
}

function checkoutOnWhatsApp() {
  if (cart.length === 0) { showToast('🌿 Your cart is empty!'); return; }
  const name    = document.getElementById('checkoutName').value || 'Customer';
  const phone   = document.getElementById('checkoutPhone').value || '';
  const city    = document.getElementById('checkoutCity').value || '';
  const address = document.getElementById('checkoutAddress').value || '';
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal >= 999 ? 0 : 79;
  const total    = subtotal + delivery;
  const items = cart.map(i => `• ${i.name} × ${i.qty} = ₹${i.price * i.qty}`).join('\n');
  const msg = `🌿 *B.L. Verdantix — New Order*\n\n*Customer:* ${name}\n*Phone:* ${phone}\n*City:* ${city}\n*Address:* ${address}\n\n*Order Items:*\n${items}\n\n*Subtotal:* ₹${subtotal}\n*Delivery:* ${delivery === 0 ? 'FREE' : '₹' + delivery}\n*Total:* ₹${total}\n\nPlease confirm this order. Thank you! 🙏`;
  openWhatsApp(msg);
}

// ─── CART ───
function addToCart(id) {
  const p = products.find(x => x.id === id);
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++;
  else cart.push({ id, name:p.name, img:p.img, price:p.price, qty:1 });
  saveCart();
  showToast(`🛒 ${p.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); renderCart();
}

function changeCartQty(id, d) {
  const item = cart.find(i => i.id === id);
  if (item) { item.qty = Math.max(1, item.qty + d); saveCart(); renderCart(); }
}

function saveCart() {
  localStorage.setItem('blv_cart', JSON.stringify(cart));
  updateBadges();
}

function renderCart() {
  const list  = document.getElementById('cartItemsList');
  const empty = document.getElementById('emptyCartMsg');
  const count = document.getElementById('cartItemCount');
  const total = cart.reduce((s, i) => s + i.qty, 0);
  count.textContent = `${total} item${total !== 1 ? 's' : ''}`;
  if (cart.length === 0) {
    list.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    list.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${item.img}" alt="${item.name}"></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-variant">Medium · Healthy Plant</div>
          <div class="cart-item-controls">
            <div class="qty-control">
              <button class="qty-btn" onclick="changeCartQty(${item.id},-1)">−</button>
              <input class="qty-num" value="${item.qty}" readonly>
              <button class="qty-btn" onclick="changeCartQty(${item.id},1)">+</button>
            </div>
            <div class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i> Remove</div>
          </div>
        </div>
        <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString('en-IN')}</div>
      </div>`).join('');
  }
  updateSummary();
}

function updateSummary() {
  const sub  = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const del  = sub >= 999 ? 0 : 79;
  document.getElementById('subtotal').textContent = `₹${sub.toLocaleString('en-IN')}`;
  document.getElementById('delivery').textContent = del === 0 ? 'FREE 🎉' : `₹${del}`;
  document.getElementById('totalAmt').textContent = `₹${(sub + del).toLocaleString('en-IN')}`;
}

// ─── WISHLIST ───
function toggleWishlist(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    if (btn) { btn.classList.remove('wishlisted'); btn.innerHTML = '<i class="far fa-heart"></i>'; }
    showToast('💔 Removed from wishlist');
  } else {
    wishlist.push(id);
    if (btn) { btn.classList.add('wishlisted'); btn.innerHTML = '<i class="fas fa-heart"></i>'; }
    showToast(`💚 ${products.find(x=>x.id===id).name} added to wishlist!`);
  }
  localStorage.setItem('blv_wish', JSON.stringify(wishlist));
  updateBadges();
}

function toggleWishlistCurrent(btn) {
  if (!currentProduct) return;
  toggleWishlist(currentProduct.id, btn);
}

function renderWishlist() {
  const grid  = document.getElementById('wishlistGrid');
  const empty = document.getElementById('emptyWishlist');
  const items = products.filter(p => wishlist.includes(p.id));
  if (items.length === 0) { grid.innerHTML = ''; empty.style.display = 'block'; }
  else { empty.style.display = 'none'; grid.innerHTML = items.map(p => createProductCard(p, false)).join(''); }
}

// ─── FILTERS ───
function filterCategory(cat) {
  filteredProducts = products.filter(p => p.category === cat);
  goPage('shop');
}

function applyFilters() {
  const checked = [...document.querySelectorAll('.filter-sidebar input[type=checkbox]:checked')].map(c => c.value).filter(Boolean);
  const maxP = parseInt(document.getElementById('priceRange').value);
  filteredProducts = products.filter(p => {
    if (p.price > maxP) return false;
    if (checked.length === 0) return true;
    return checked.includes(p.category);
  });
  renderShop();
}

function clearFilters() {
  document.querySelectorAll('.filter-sidebar input[type=checkbox]').forEach(c => c.checked = false);
  document.getElementById('priceRange').value = 2000;
  document.getElementById('maxPrice').textContent = '₹2000';
  filteredProducts = [...products];
  renderShop();
}

function updatePrice(v) {
  document.getElementById('maxPrice').textContent = `₹${v}`;
}

function sortProducts(v) {
  const ids  = filteredProducts.map(x => x.id);
  let pool   = products.filter(p => ids.includes(p.id));
  if (v === 'price-asc')  pool.sort((a,b) => a.price - b.price);
  if (v === 'price-desc') pool.sort((a,b) => b.price - a.price);
  if (v === 'rating')     pool.sort((a,b) => b.rating - a.rating);
  if (v === 'new')        pool.sort((a,b) => b.id - a.id);
  filteredProducts = pool;
  renderShop();
}

function setView(v) {
  const grid = document.getElementById('shopGrid');
  const gBtn = document.getElementById('gridViewBtn');
  const lBtn = document.getElementById('listViewBtn');
  if (v === 'list') { grid.classList.add('list-view'); lBtn.classList.add('active'); gBtn.classList.remove('active'); }
  else              { grid.classList.remove('list-view'); gBtn.classList.add('active'); lBtn.classList.remove('active'); }
}

function handleSearch(e) {
  const q = e.target.value.toLowerCase().trim();
  filteredProducts = q ? products.filter(p => p.name.toLowerCase().includes(q) || p.category.includes(q) || p.desc.toLowerCase().includes(q)) : [...products];
  goPage('shop');
}

// ─── BADGES ───
function updateBadges() {
  const ct  = cart.reduce((s,i) => s + i.qty, 0);
  const cEl = document.getElementById('cartCount');
  cEl.textContent = ct; cEl.style.display = ct > 0 ? 'flex' : 'none';
  const wEl = document.getElementById('wishlistCount');
  wEl.textContent = wishlist.length; wEl.style.display = wishlist.length > 0 ? 'flex' : 'none';
}

// ─── TOAST ───
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ─── MOBILE MENU ───
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ─── INIT ───
updateBadges();
renderBestSellers();
renderNewLaunches();