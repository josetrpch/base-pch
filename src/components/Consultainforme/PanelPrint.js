import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PrintIcon from '@material-ui/icons/Print';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 1500,
  },
});

const PanelPrint=()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
        
      >
        <Tab icon={<PrintIcon />} aria-label="Print" />
        <Tab icon={<PictureAsPdfIcon />} aria-label="pdf" />
        <Tab icon={<CloudDownloadIcon />} aria-label="download" />
      </Tabs>
    </Paper>
  );
}
export default PanelPrint;