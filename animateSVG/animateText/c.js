var sources=document.querySelectorAll(".source"),fills=document.querySelectorAll(".fill");function typeWriter(){!function e(r){setTimeout(function(){var n=sources.length-r-1;console.log("index:",n),function e(r,i,t){setTimeout(function(){var n=t.innerHTML.charAt(t.innerHTML-r);i.innerHTML=i.innerHTML.substring(0,i.innerHTML.length-1)+n+"|",t.innerHTML=t.innerHTML.substring(1,t.innerHTML.length),r--?e(r,i,t):i.innerHTML=i.innerHTML.substring(0,i.innerHTML.length-1)},40)}(sources[n].innerHTML.length-1,fills[n],sources[n]),r--&&e(r)},2e3)}(sources.length-1)}setTimeout(typeWriter,200);