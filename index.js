function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const nestedEl = getFirstSelector('#nested'),
    el = nestedEl.querySelector('.target');
  return el;
}

function increaseRankBy(n) {
  const els = document.querySelectorAll('.ranked-list');
  for(let i=0;i<els.length; i++) {
    els[i].innerHtml = parseInt(els[i].innerHtml) + n;
  }
}

function deepesChild() {
  const el = getFirstSelector('div#grand-node'),
  deepChild = (element)=>{
    if(!element.hasChildNodes()){
      return element;
    }
    return deepChild(element.children[0]);
  };
  
  return deepChild(el)
}