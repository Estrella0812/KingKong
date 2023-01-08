// var noAnimation = false;

// window.onload = function onLoad(){
//     window.scrollTo(0,0);
// }

// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
//     if(!noAnimation){
//         for (var i = 0; i < reveals.length; i++) {
//             var windowHeight = window.innerHeight;
//             var elementTop = reveals[i].getBoundingClientRect().top;
//             var elementVisible = 0;
        
//             if (elementTop < windowHeight - elementVisible) {
//               reveals[i].classList.add("bounceInUp");
//             }
//         }
//     }
// }
  
// function buttonClicked(){
//     noAnimation = true;
//     var reveals = document.querySelectorAll(".reveal");
//     for (var i = 0; i < reveals.length; i++) {
//         reveals[i].classList.add("noAnimation");
//     }
// }


window.addEventListener("scroll", reveal);

