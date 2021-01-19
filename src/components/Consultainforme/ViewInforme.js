import React from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';



import InformeRessult from './InformeRessult';



const ViewInforme = () => {
  

  return (

      
        <Grid
          container                    
        >
          <Grid 
          item={true}
            lg={false}
            sm={12}
            xl={12}
            xs={12}>
          </Grid>
          <Grid
            item={true}
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          >
          <InformeRessult />
          </Grid>
      
        </Grid>
      
   
  );
};

export default ViewInforme;