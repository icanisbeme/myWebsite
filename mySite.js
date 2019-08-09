// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// function showMyInfo() {
//   // if (document.getElementById("factsMasterDiv").style.display == "block"){
//   //   document.getElementById("factsMasterDiv").style.display = "none";
//   // }

//   document.getElementById("factsMasterDiv").style.display = "block";
//   // window.scrollBy(0, 750);
// //   var timerID = setInterval(function() {
// //     // window.scrollBy(0, 5);

// //     if( window.pageYOffset >= 800 )
// //         clearInterval(timerID);
// // }, 13);


// var timerID = setInterval(function() {
//   if( window.pageYOffset <= 1000 )
//       window.scrollBy(0, 5);

//   else
//       clearInterval(timerID);
      
// }, 1);

//   // var div = document.getElementById("factsMasterDiv");
//   // div.style.display = div.style.display == "none" ? "block" : "none";
//   // if(document.getElementById("factsMasterDiv").style.display == "none" ){
//   //   document.getElementById("factsMasterDiv").style.display = "block";
//   // }

// }




window.smoothScroll = function(target) {
  var scrollContainer = target;

  document.getElementById("factsMasterDiv").style.display = "block";

  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);
  
  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);
  
  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}