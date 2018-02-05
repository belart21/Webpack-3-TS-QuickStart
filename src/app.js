import { Slider } from 'slider';

import { myVar } from './scripts/app.ts'
import './styles/base.less'

console.log('Slider = ', Slider);

var App = function(apiUrl) {

  this.apiUrl = apiUrl;

};

App.prototype.getApiUrl = () => this.apiUrl;

var app = new App(myVar);

console.log(app.getApiUrl());