import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';



const theme = createMuiTheme({
    palette: {
        primary: {
          main: blue[800]
          
        },
        secondary: {
          main: red[400]
        },
      },
});

export default theme;