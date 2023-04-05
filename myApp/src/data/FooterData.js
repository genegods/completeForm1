
import facebook from "../asserts/media/facebook.png";
import twitter from "../asserts/media/twitter.png";
import instagram from "../asserts/media/instagram.png";
import whatsapp from "../asserts/media/whatsapp.png";
import youtube from "../asserts/media/youtube.png";

import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'

export const MediaData = [
    {
        id: 1,
        img: youtube,
        title: "youtube",
        href: "https://www.youtube.com/@gooddomicroprojects/",
      },
      {
        id: 2,
        img: facebook,
        title: "facebook",
        href: "https://www.facebook.com",
      },
      {
        id: 3,
        img: instagram,
        title: "instagram",
        href: "https://www.instagram.com",
      },
      {
        id: 4,
        img: twitter,
        title: "twitter",
        href: "https://twitter.com",
      },
    
      {
        id: 5,
        img: whatsapp,
        title: "whatsapp",
        href: "https://whatsapp.com",
      },
]


export const QuickLinksData = [
    {
        id: 1,
        myLink: 'About',
        path: "/about",
      },
      {
        id: 2,
        myLink: 'FAQ',
        path: "/faq",
      },
      {
        id: 3,
        myLink: 'Privacy & Policy',
        path: "/privacy",
      },
      {
        id: 4,
        myLink: 'Help',
        path: "/help",
      },
      
      {
        id: 5,
        myLink: 'Terms & Conditions',
        path: "/terms",
      },
      {
        id: 6,
        myLink: 'Contact',
        path: "/contact",
        
      },
]


export const ContactUsData = [
  {
    id: 1,
    icon: <BiIcons.BiMap />,
    info:'647 Linda Street'
  },
  {
    id: 2,
    icon: <BiIcons.BiPhone />,
    info:'+1 234 5696'
  },
  {
    id: 3,
    icon: <BiIcons.BiEnvelope />,
    info:'gooddomicroprojects@gmail.com'
  },
]