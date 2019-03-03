//commonJS 모듈 가져오기
//var _ = require('lodash');
//es6
import _ from 'lodash';
import './style.css';
import './hello.scss';

//named import {}안에 export한것과 동일한 이름 사용
import {area, circumference} from  './js/circle';

//default import {}없고 이름을 마음대로 지정
import xxx from './js/cube';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

// console.log('hello webpack dev server');

console.log(area(10));
console.log(xxx(5));