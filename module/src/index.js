'use strict';
import '@babel/polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import replaceImg from './modules/replaceImg';
import calc from './modules/calc';
import formHandler from './modules/formHandler';
//Timer
countTimer('20 dec 2019');
//Menu
toggleMenu();
//popup
togglePopUp();
// ТАБЫ
tabs();
// Слайдер
slider();
//Наша команда
replaceImg () ;
//калькулятор
calc(100);
// send-ajax-form
formHandler();