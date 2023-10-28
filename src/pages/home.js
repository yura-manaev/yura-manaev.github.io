import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import M from '../components/Markdown';
import Img from '../components/Image';

var imgPath = './img/';

const TITLE = 'yura-manaev.github.io'

function img(imgName) {
	var path = require(imgPath + imgName + '.jpg')
	return path
}

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
 	  
		<M text="Manaev Iurii tattoo artist and professional photographer"/>
		<Img s={img('DSC_0438')} w={"100%"}/>
		<Img s={img('DSC_0625')} w={"100%"}/>
		<Img s={img('DSC_0436')} w={"100%"}/>
		<Img s={img('DVV_1192')} w={"100%"}/>
		<Img s={img('DVV_0456')} w={"100%"}/>
		
   </motion.div>
	);
};
  
export default Home;
