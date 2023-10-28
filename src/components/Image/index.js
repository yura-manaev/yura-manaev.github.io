import React from "react";
import Zoom from 'react-medium-image-zoom'
  
const Img = ({ s, w="100%" }) => {
  return (
    <center>
    		<Zoom>
    			<img alt="img" src={s} width={w} />
    		</Zoom>
    </center>
  );
};
export default Img;
