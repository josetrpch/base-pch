import React, {useState, useEffect} from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';

import InformeRessult from './InformeRessult';
import ImagenesLoading from '.././Imagenesloading/ImagenesLoading'


const ViewInforme = () => {
  
  const [ImgLoading, setImgLoading] = useState(false);

    useEffect(() => {
      console.log('cargo imagen',ImgLoading);
        const timer = setTimeout(() => {
            setImgLoading(true);
        }, 3000);
        
      }, []);
  return (

      
        <Grid Container maxWidth="xl"  >
          <Grid 
          item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
            >
              {ImgLoading==true ? <InformeRessult  /> : < ImagenesLoading />};
              
          </Grid>

  
      
        </Grid>
      
   
  );
};

export default ViewInforme;