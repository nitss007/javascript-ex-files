
const FEATURED = document.querySelector(".featured-image  ");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figcaption");
var  captonText = document.createTextNode(altText);

captionElement.appendChild(captonText);

FEATURED.appendChild(captionElement);

THEIMAGE.setAttribute("alt","")
console.log( captionElement.getAttribute);
