import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Zoom from 'react-medium-image-zoom'
import 'animate.css/animate.min.css';  
  
const Img = ({ s, w="100%" }) => {
  return (
    <center>
    	<AnimationOnScroll offset="300" duration="1.2" animateIn="animate__fadeIn" animateOnce="true">
    		<Zoom>
    			<img alt="img" src={s} width={w} />
    		</Zoom>
    	</AnimationOnScroll>
    </center>
  );
};
export default Img;
