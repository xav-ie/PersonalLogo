
let sources = document.querySelectorAll(".source");
let fills = document.querySelectorAll(".fill");

function typeWriter() {
  let speed = 40;
  let i = sources.length -1;
  (function startWriting(i) {
    setTimeout(function() {
      let index = sources.length - i - 1;
      console.log("index:", index);
      let chars = sources[index].innerHTML.length-1;
      let fill = fills[index];
      let source = sources[index];
      (function fillEmUp(chars, fill, source){
          setTimeout(function() { 
              let char =  source.innerHTML.charAt(source.innerHTML-chars)
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
