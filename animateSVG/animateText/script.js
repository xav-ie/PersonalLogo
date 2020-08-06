var sources = document.querySelectorAll(".source");
var fills = document.querySelectorAll(".fill");

function typeWriter() {
  var speed = 40;
  var i = sources.length -1;
  (function startWriting(i) {
    setTimeout(function() {
      var index = sources.length - i - 1;
      console.log("index:", index);
      var chars = sources[index].innerHTML.length-1;
      var fill = fills[index];
      var source = sources[index];
      (function fillEmUp(chars, fill, source){
          setTimeout(function() { 
              var char =  source.innerHTML.charAt(source.innerHTML-chars)
              fill.innerHTML = fill.innerHTML.substring(0,fill.innerHTML.length-1)+char+"|";    
              source.innerHTML = source.innerHTML.substring(1,source.innerHTML.length);  
              if(chars--) {
                  fillEmUp(chars, fill, source);
              } else {
                fill.innerHTML = fill.innerHTML.substring(0,fill.innerHTML.length-1);
              }
            }, speed);
        })(chars, fill, source);
      if (i--) startWriting(i);
    }, 2000);
  })(i);
}

setTimeout(typeWriter, 200);
