import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import axios from 'axios'

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#f58220'
    },
    secondary:{
      main:'#ffffff'
    }
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#ffffff",
      },
    },
  }
});

axios.defaults.baseURL = "http://a8bd1045c8dc.ngrok.io/";

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
