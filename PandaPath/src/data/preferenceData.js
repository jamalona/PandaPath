import beijingImg from '../assets/images/tiantianpark.jpg'
import SouthImg from '../assets/images/tsokaSouth.jpg'
import NorthImg from '../assets/images/china-Xian.jpg'
import shanghaiImg from '../assets/images/shanghai.jpg'
import KongImg from '../assets/images/hongKong.jpg'
import tibetImg from '../assets/images/tibet.jpg'
import tourguide from '../assets/images/tourguide.jpg'
import dayguide from '../assets/images/dayguide.jpg'
import driving from '../assets/images/driving.jpg'
import noguide from '../assets/images/hotel.jpg'
import culture from '../assets/images/culture.jpg'
import nature from '../assets/images/nature.jpg'
import wildlife from '../assets/images/wildlife.jpg'
import relaxation from '../assets/images/relaxation.jpg'
import luxury from '../assets/images/luxury.webp'
import adventure from '../assets/images/adventure.jpg'




export const choices = [
  {
    part: "Which regions would you like to visit?",
    note:"Select as many as you wish.",
    name:"regions",
    card: [{
      imglink: beijingImg,
      title: "Beijing and Northern China",
    },
    {
      imglink: SouthImg,
      title: "Southwestern China (Chengdu, Yangshou, Guilin, Kunming)",
    },
    {
      imglink: NorthImg,
      title: "Xi'an and the Northwest Region",
    },
    {
      imglink: shanghaiImg,
      title: "The City of Shanghai",
    },
    {
      imglink: KongImg,
      title: "Hong Kong & the Pearl River Delta",
    },
    {
      imglink: tibetImg,
      title: "Tibetan Highlands",
    },
    ]
  },
  {
    part: "What's your preferred travel style?",
    note:"please select one",
    name:"travelStyle",
    card: [{
      imglink: tourguide,
      title: "Private tour with dedicated guide",
    },
    {
      imglink: dayguide,
      title: "Private transfer, guide for day trips"
    },
    {
      imglink: driving,
      title: "Self-drive adventure",
    },
    {
      imglink: noguide,
      title: "Pre-arranged Hotels/Transfer, no guide",
    },
    ]
  },
  {
    part: "What experiences are you looking for in China?",
    note:"Select as many as you wish.",
    name:'interest',
    card: [{
      imglink: culture,
      title: "Cultural explorations",
    },
    {
      imglink: nature,
      title: "Natural scenery and landscapes",
    },
    {
      imglink: wildlife,
      title: "Wildlife and animal encounters",
    },
    {
      imglink: relaxation,
      title: "Relaxation & leisure",
    },
    {
      imglink: luxury,
      title: "High-end luxury experiences",
    },

    {
      imglink: adventure,
      title: "Soft adventure & exploration",
    },
    ]
  },
]
