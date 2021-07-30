import './main.scss';
import '@fortawesome/fontawesome-free/js/all.js';


import Teaser from './components/teaser.html';
import FewShotMethods from './components/fewShotMethods.html';
import FewShotVenn from './components/fewShotVenn.html';
import MetaGradient from './components/metaGradient.html'
import FitSinePretrained from './components/fitSinePretrained.html'
import FitSineMaml from './components/fitSineMaml.html'
import IMAMLLoss from './components/imamlLoss.html'
import IMAMLGradient from './components/imamlGradient.html'
import TwoLossSpaces from './components/twoLossSpaces.html'
import ReptileInterpolation from './components/reptileInterpolation.html'
import CurvatureDemo from './components/curvatureDemo.html'
import MetaLossSpace from './components/metaLossSpace.html'

import Menu from './components/menu.html'

const componentMap = {
  '#menu': Menu,
  '#teaser': Teaser,
  '#fewShotMethods': FewShotMethods,
  '#fewShotVenn': FewShotVenn,
  '#metaGradient': MetaGradient,
  '#fitSinePretrained': FitSinePretrained,
  '#fitSineMaml': FitSineMaml,
  '#imamlLoss': IMAMLLoss,
  '#twoLossSpaces' : TwoLossSpaces,
  '#reptileInterpolation' : ReptileInterpolation,
  '#curvatureDemo' : CurvatureDemo,
  '#imamlGradient': IMAMLGradient,
  '#metaLossSpace': MetaLossSpace
}


let element

for (let target in componentMap) {
  element = document.querySelector(target)
  if (element) {
    element.innerHTML = '';
    new componentMap[target]({
      target: element
    })
  } /*else {
    console.log(`Element ${target} not found.`)
  }*/
}

// All components monted, reexecute mathjax
MathJax.typesetPromise()
