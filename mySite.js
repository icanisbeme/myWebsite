function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.smoothScroll = function(target) {
  var scrollContainer = target;

  document.getElementById("factsMasterDiv").style.display = "block";

  do { 
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  do {
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}