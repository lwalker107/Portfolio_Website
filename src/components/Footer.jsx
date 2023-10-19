import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { footerLinks } from '../constants';
import { youtubeicon, linkedIn, github } from '../assets';
import { fadeIn } from '../utils/motion'

const Footer = ({ index, id, icon, url }) => {
  
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <nav className={`${styles.paddingX} w-full flex
        items-center py-5 absolute inset-x-0 h-16 bottom-0 z-20 bg-primary`}>
            <div className="w-full flex justify-between
        items-center max-w-7xl mx-auto">
                <div className="absolute inset-0 flex 
                    justify-end m-3 card-img_hover">
                    <div
                        onClick={() => window.open 
                        (url, "_blank")} 
                        className="black-gradient w-10 h-10 
                        rounded-full flex justify-center items-center 
                        cursor-pointer">
                            <img 
                            src={github} 
                            alt="github" 
                            className="w-1/2 h-1/2 object-contain"/>
                    </div>
                    <div
                        onClick={() => window.open 
                        (url, "_blank")} 
                        className="black-gradient w-10 h-10 
                        rounded-full flex justify-center items-center 
                        cursor-pointer">
                            <img 
                            src={linkedIn} 
                            alt="linkedIn" 
                            className="w-1/2 h-1/2 object-contain"/>
                    </div>
                    <div
                        onClick={() => window.open 
                        (url, "_blank")} 
                        className="black-gradient w-10 h-10 
                        rounded-full flex justify-center items-center 
                        cursor-pointer">
                            <img 
                            src={youtubeicon} 
                            alt="youtubeicon" 
                            className="w-1/2 h-1/2 object-contain"/>
                    </div>
                    </div>
                </div>
      
            </nav>
        </motion.div>
    )
 }

export default Footer
