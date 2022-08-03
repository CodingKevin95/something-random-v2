import '../stylingpage/Kevin.css'
import Particle from "../stylingpage/Particles";
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Kevin() {
const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="background">
        <h1 className="intro">Hello everyone, my name is Kevin and I like particle effects</h1>
        <Particle/>
        <motion.div transition={{layout: {duration: 1, type: "spring"}}} layout onClick={ () => setIsOpen(!isOpen)} className='card'>
          <motion.h2 layout='position'>About Me</motion.h2>
          {isOpen && 
          <motion.div>
            <p>Language: <br/> HTML || CSS || JavaScript || React.js</p>
            <p>Additional information can be added here in the future. Additional information can be added here in the future.<br/>Additional information can be added here in the future. Additional information can be added here in the future</p>
          </motion.div>  
          }
        </motion.div>

      </div>
    );
  };
  