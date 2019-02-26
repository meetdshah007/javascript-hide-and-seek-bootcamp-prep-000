function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const nestedEl = getFirstSelector('#nested'),
    el = nestedEl.getFirstSelector('.target');
  return selectors;
}

function increaseRankBy(n) {
  const els = document.querySelectorAll('.ranked-list');
  for(let i=0;i<els.length; i++) {
    els[i].innerHtml = parseInt(els[i].innerHtml) + n;
  }
}

function deepesChild() {
  const els = document.querySelectorAll('div#grand-node');
}