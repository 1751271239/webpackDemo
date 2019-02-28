import React from 'react';
import {render} from 'react-dom';
import Geeter from './Greeter';
// require('!style-loader!css-loader!./main.css')
import './main.css';//使用require导入css文件

render(<Geeter />,document.getElementById('root'));

// const greeter = require('./Greeter.js');
// document.querySelector('#root').appendChild(greeter());