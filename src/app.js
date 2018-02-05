import { myVar } from './scipts/app.ts'
import './styles/base.less'

var App = function(apiUrl) {

  this.apiUrl = apiUrl;

};

App.prototype.getApiUrl = () => this.apiUrl;

var app = new App(myVar);

console.log(app.getApiUrl());