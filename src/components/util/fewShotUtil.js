import * as d3 from 'd3';

export const jumpTo = (target) => {
  target = document.getElementById(target)
  if (target != null){
    let offset = 0;
    while (target) {
      offset += target.offsetTop;
      target = target.offsetParent
    }
    window.scrollTo(0, offset - 30)
  }

}

export const highlight_caption = (ref, active=true) => {
  d3.select(`.fewShotMethods-reference#${ref}`)
    .attr('class', (active ? 'active fewShotMethods-reference' : 'fewShotMethods-reference'));
}
