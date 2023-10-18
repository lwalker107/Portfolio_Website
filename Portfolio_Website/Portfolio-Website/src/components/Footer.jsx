import React,  { useEffect, useState } from 'react';
import { styles } from '../style';
import { footerLinks } from '../constants';
import { youtubeicon, linkedIn, github } from '../assets';

const Footer = () => {
    
  const [active, setActive] = useState('');
  
  return (
    <nav className={`${styles.paddingX} w-full flex
    items-center py-5 absolute inset-x-0 h-16 bottom-0 z-20 bg-primary`}>
        <div className="w-full flex justify-between
      items-center max-w-7xl mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {footerLinks.map((link) => (
            <li
            key={link.id}
            className={`${
              active === link.title
              ? "text-white"
              : "text-secondary"
            } hover:text-white text-[18px]
            font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        Footer
        </div>
      
    </nav>
  )
}

export default Footer
