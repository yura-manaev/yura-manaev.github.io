import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import M from '../components/Markdown';

const TITLE = 'yura-manaev.github.io'

const Home = () => {
	
	useEffect(() => {
  		window.scrollTo(0, 0)
	}, [])	
	
  return (
	<motion.div
		initial={{opacity: 0 }}
		animate={{opacity: 1 }}
		exit={{opacity: 0 }}
		transition={{ duration: 0.15 }}>
		
		<Helmet>
			<title>{ TITLE }</title>
      </Helmet>
 	  
		Я еблан	
		
   </motion.div>
	);
};
  
export default Home;
