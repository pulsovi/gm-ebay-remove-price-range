// ==UserScript==
// @name        RemovePriceRange
// @namespace   David
// @description Retire les offres dont le prix est une fourchette du resultat des recherches ebay
// @include     https://www.ebay.com/sch/i.html?*
// @version     1
// @grant       none
// ==/UserScript==
var removeBtn = document.createElement('button');
removeBtn.onclick = function () {
  var e,
  li,
  ul;
  while (e = document.getElementsByClassName('DEFAULT') [0]) {
    li = e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    ul = li.parentElement;
    console.log('e', e, 'li', li, 'ul', ul);
    ul.removeChild(li);
  }
};
removeBtn.style.position = 'fixed';
removeBtn.style.width = '20px';
removeBtn.style.height = '20px';
removeBtn.style.backgroundColor = 'rgb(150,0,0)';
removeBtn.style.top = 0;
removeBtn.style.left = 0;
document.body.appendChild(removeBtn);
