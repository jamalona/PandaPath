import img1 from '../assets/images/village.png'
import img2 from '../assets/images/GreatWallChina.jpg'
import img3 from '../assets/images/tsokaSouth.jpg'
import img4 from '../assets/images/china-Xian.jpg'
import img5 from '../assets/images/xiandaming.webp'
import img6 from '../assets/images/guilin.jpg'
import img7 from '../assets/images/yellow-mountains.jpg'
import img8 from '../assets/images/hongkong.jpg'
import img9 from '../assets/images/ancient-town2.jpg'



export const itinerary = [
  {
    link: img1,
    location: "Guiyang",
    day: 1,
    title: "Arrive in Guiyang - Gateway to Guizhou",
    description: "Welcome to Guiyang! Upon arrival, you'll be greeted by your local guide and transferred to your hotel. In the afternoon, visit Qianling Park, famous for its natural beauty and tranquil environment. Explore the historic Hongfu Temple, a peaceful site nestled in the park.",
    meals: ["Dinner"],
    hotels: "Guiyang Regal Hotel",
  },
  {
    link: img2,
    location: "Guiyang - Kaili",
    day: 2,
    title: "Travel to Kaili - Meet the Miao People",
    description: "Drive to Kaili, a town rich in Miao culture. Visit Qingman, a Miao village known for its exquisite silk and folded felt traditions. Take a scenic hike through the countryside and experience traditional Miao paper-making.",
    meals: ["Breakfast", "Lunch", "Dinner"],
    hotels: "Kaili Hotel",
  },
  {
    link: img3,
    location: "Kaili - Langde - Rongjiang",
    day: 3,
    title: "Discover Langde and Datang Villages",
    description: "Drive along the Bala River to the Miao village of Langde, renowned for its wooden houses and waterwheels. Later, visit Datang, home to the Miao women’s distinctive mini-skirt tradition. After lunch, continue to Rongjiang and explore Shui culture.",
    meals: ["Breakfast", "Lunch", "Dinner"],
    hotels: "Rongjiang Hotel",
  },
  {
    link: img4,
    location: "Rongjiang - Congjiang - Zhaoxing",
    day: 4,
    title: "Venture to Zhaoxing, Home of the Dong People",
    description: "Visit the secluded village of Basha, where Miao traditions remain largely untouched by modernity. Continue to Zhaoxing, a large Dong village known for its unique drum towers and wind-and-rain bridges. Enjoy a cultural Dong song performance in the evening.",
    meals: ["Breakfast", "Lunch", "Dinner"],
    hotels: "Zhaoxing Hotel",
  },
  {
    link: img5,
    location: "Zhaoxing - Sanjiang",
    day: 5,
    title: "Explore Chengyangqiao Dong Village",
    description: "Spend a leisurely morning hiking through local villages or join in a special celebration if available. Later, drive to Sanjiang to visit Chengyangqiao, famous for its stunning wind and rain bridges, key architectural landmarks of the Dong people.",
    meals: ["Breakfast", "Lunch", "Dinner"],
    hotels: "Sanjiang Hotel",
  },
  {
    link:img6,
    location: "Sanjiang - Longsheng",
    day: 6,
    title: "Hike the Longji Terraced Fields",
    description: "Journey to Longsheng and hike the famous Longji terraced fields. Enjoy breathtaking views of rice paddies carved into the mountainside and visit local villages along the way.",
    meals: ["Breakfast", "Lunch", "Dinner"],
    hotels: "Longsheng Guesthouse",
  },
  {
    link: img7,
    location: "Longsheng - Guilin",
    day: 7,
    title: "Discover the Scenic City of Guilin",
    description: "Drive to Guilin and explore the city’s iconic limestone hills, rivers, and caves. Take a city tour to immerse yourself in the natural beauty and cultural heritage of Guilin.",
    meals: ["Breakfast", "Lunch", "Dinner"],
    hotels: "Guilin Hotel",
  },
  {
    link: img8,
    location: "Hong Kong",
    day: 8,
    title: "Victoria Harbour Cruise & Explore Kowloon",
    description: "Embark on a scenic cruise across Victoria Harbour, taking in the stunning skyline of Hong Kong Island and Kowloon. Marvel at the iconic skyscrapers and traditional junks sailing along the harbor. Afterward, explore the vibrant streets of Kowloon, including the bustling markets of Mong Kok and the peaceful Nan Lian Garden. In the evening, witness the dazzling Symphony of Lights show from the Tsim Sha Tsui promenade.",
    meals: ["Breakfast", "Lunch", "Dinner"],
    hotels: "The Peninsula Hong Kong",
  },
  {
    link: img9,
    location: "Yangshuo - Guilin",
    day: 9,
    title: "Farewell Guilin",
    description: "After a leisurely morning in Yangshuo, transfer back to Guilin for your departure flight. Take home unforgettable memories of your authentic China journey.",
    meals: ["Breakfast"],
    hotels: "N/A (Departure)",
  }
]

/*
export const itineraries = [
  {
    name: "Guiyang Cultural Journey",
    link:"",
    itinerary: [
      {
        img: 2,
        location: "Guiyang",
        day: 1,
        title: "Arrive in Guiyang - Gateway to Guizhou",
        description: "Welcome to Guiyang! Upon arrival, you'll be greeted by your local guide and transferred to your hotel. In the afternoon, visit Qianling Park, famous for its natural beauty and tranquil environment. Explore the historic Hongfu Temple, a peaceful site nestled in the park.",
        meals: ["Dinner"],
        hotels: "Guiyang Regal Hotel",
      },
      {
        img: 3,
        location: "Guiyang - Kaili",
        day: 2,
        title: "Travel to Kaili - Meet the Miao People",
        description: "Drive to Kaili, a town rich in Miao culture. Visit Qingman, a Miao village known for its exquisite silk and folded felt traditions. Take a scenic hike through the countryside and experience traditional Miao paper-making.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        hotels: "Kaili Hotel",
      },
      {
        img: 3,
        location: "Kaili - Langde - Rongjiang",
        day: 3,
        title: "Discover Langde and Datang Villages",
        description: "Drive along the Bala River to the Miao village of Langde, renowned for its wooden houses and waterwheels. Later, visit Datang, home to the Miao women’s distinctive mini-skirt tradition. After lunch, continue to Rongjiang and explore Shui culture.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        hotels: "Rongjiang Hotel",
      },
      {
        img: 3,
        location: "Rongjiang - Congjiang - Zhaoxing",
        day: 4,
        title: "Venture to Zhaoxing, Home of the Dong People",
        description: "Visit the secluded village of Basha, where Miao traditions remain largely untouched by modernity. Continue to Zhaoxing, a large Dong village known for its unique drum towers and wind-and-rain bridges. Enjoy a cultural Dong song performance in the evening.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        hotels: "Zhaoxing Hotel",
      },
      {
        img: 3,
        location: "Zhaoxing - Sanjiang",
        day: 5,
        title: "Explore Chengyangqiao Dong Village",
        description: "Spend a leisurely morning hiking through local villages or join in a special celebration if available. Later, drive to Sanjiang to visit Chengyangqiao, famous for its stunning wind and rain bridges, key architectural landmarks of the Dong people.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        hotels: "Sanjiang Hotel",
      },
      {
        img: 3,
        location: "Sanjiang - Longsheng",
        day: 6,
        title: "Hike the Longji Terraced Fields",
        description: "Journey to Longsheng and hike the famous Longji terraced fields. Enjoy breathtaking views of rice paddies carved into the mountainside and visit local villages along the way.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        hotels: "Longsheng Guesthouse",
      },
      {
        img: 3,
        location: "Longsheng - Guilin",
        day: 7,
        title: "Discover the Scenic City of Guilin",
        description: "Drive to Guilin and explore the city’s iconic limestone hills, rivers, and caves. Take a city tour to immerse yourself in the natural beauty and cultural heritage of Guilin.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        hotels: "Guilin Hotel",
      },
      {
        img: 3,
        location: "Guilin - Yangshuo",
        day: 8,
        title: "Li River Cruise to Yangshuo",
        description: "Embark on a scenic Li River Cruise to Yangshuo. Marvel at the picturesque mountains and traditional villages along the riverbanks. Disembark in Yangshuo, where you can explore the ancient town or enjoy the famous Liu Sanjie light show in the evening.",
        meals: ["Breakfast", "Lunch", "Dinner"],
        hotels: "Yangshuo Mountain Retreat",
      },
      {
        img: 2,
        location: "Yangshuo - Guilin",
        day: 9,
        title: "Farewell Guilin",
        description: "After a leisurely morning in Yangshuo, transfer back to Guilin for your departure flight. Take home unforgettable memories of your authentic China journey.",
        meals: ["Breakfast"],
        hotels: "N/A (Departure)",
      }
    ]
  },
  {
    name: "China Expedition",
    link:"Expedition",
    itinerary: [
      {
        location: "Beijing",
        day: 1,
        title: "Arrival in Beijing - The Heart of China",
        description: "Welcome to Beijing! After arriving, meet your guide and transfer to your hotel. Spend the afternoon visiting Tiananmen Square and the Forbidden City, where you'll explore the history of Chinese emperors. Enjoy a traditional Peking duck dinner in the evening.",
        meals: ["Dinner"],
        hotels: "Beijing Wangfujing Hotel",
      },
      {
        location: "Beijing",
        day: 2,
        title: "Great Wall Adventure",
        description: "Today, venture to the Great Wall of China. Visit the less crowded Jinshanling section, where you can hike and take in breathtaking views. Enjoy a picnic lunch on the wall. Return to Beijing in the evening for some leisure time.",
        meals: ["Breakfast", "Lunch"],
        hotels: "Beijing Wangfujing Hotel",
      },
      {
        location: "Chengdu",
        day: 3,
        title: "Travel to Chengdu - Home of the Giant Pandas",
        description: "Fly to Chengdu in the morning. After checking into your hotel, visit the Chengdu Research Base of Giant Panda Breeding to see these adorable creatures up close. Enjoy a local Sichuan hot pot dinner in the evening.",
        meals: ["Breakfast", "Dinner"],
        hotels: "Chengdu Tibetan Hotel",
      },
      {
        location: "Xi'an",
        day: 4,
        title: "Journey to Xi'an - Home of the Terracotta Army",
        description: "Travel by high-speed train to Xi'an. Upon arrival, check into your hotel. Spend the afternoon exploring the ancient City Wall and the Muslim Quarter, where you can try local delicacies. In the evening, enjoy a Tang Dynasty dinner show.",
        meals: ["Breakfast", "Dinner"],
        hotels: "Xi'an Bell Tower Hotel",
      },
      {
        location: "Xi'an",
        day: 5,
        title: "Terracotta Army Exploration",
        description: "Visit the iconic Terracotta Army, one of the greatest archaeological discoveries. Spend the afternoon at the Shaanxi History Museum to learn about the region's rich history. Optional evening walk along the City Wall.",
        meals: ["Breakfast", "Lunch"],
        hotels: "Xi'an Bell Tower Hotel",
      },
      {
        location: "Guilin",
        day: 6,
        title: "Scenic Guilin - Nature’s Wonderland",
        description: "Fly to Guilin in the morning. Enjoy a cruise on the Li River, taking in stunning karst landscapes and picturesque villages. Visit Yangshuo, where you can explore the local markets and try your hand at bamboo rafting.",
        meals: ["Breakfast", "Lunch"],
        hotels: "Guilin Shangri-La Hotel",
      },
      {
        location: "Shanghai",
        day: 7,
        title: "Arrival in Shanghai - A Modern Marvel",
        description: "Fly to Shanghai and check into your hotel. Visit the historic Bund for stunning views of the skyline. Spend the evening at Nanjing Road for shopping and enjoy a local dinner.",
        meals: ["Breakfast", "Dinner"],
        hotels: "Shanghai Grand Hotel",
      },
    ]
  }
];
*/