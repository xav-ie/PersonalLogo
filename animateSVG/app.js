var svg = document.getElementById("animation");
var s = Snap(svg);

var simpleCup = Snap.select('#path1');
var fancyCup = Snap.select('#pathEnd');

var simpleCupPoints = simpleCup.node.getAttribute('d');
var fancyCupPoints = fancyCup.node.getAttribute('d');


function start(){
  simpleCup.animate({ d: fancyCupPoints }, 2000, mina.linear, toSimple);  
}

function middle() {
    
}

function toSimple(){
  simpleCup.animate({ d: simpleCupPoints }, 2000, mina.linear, start); 
}


toSimple();