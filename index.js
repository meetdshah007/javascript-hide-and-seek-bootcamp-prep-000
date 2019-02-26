function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  const nestedEl = getFirstSelector('#nested'),
    el = nestedEl.querySelector('.target');
  return el;
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list'),
    firstList = rankedLists[0],
    secondList = rankedLists[1];
    
    let children = firstList.children;
    let start = 1;
    for (let i = 0, l = children.length; i < l; i++) {
        children[i].innerHTML = start + i + 3;
    }
    children = secondList.children;
    start = 12;

    for (let i = 0, l = children.length; i < l; i++) {
      children[i].innerHTML = start - i + 3;
    }
}

function deepestChild() {
  const el = getFirstSelector('div#grand-node'),
  deepChild = (element)=>{
    if(!element.children.length){
      return element;
    }
    return deepChild(element.children[0]);
  };
  
  return deepChild(el);
}