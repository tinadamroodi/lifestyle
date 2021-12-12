window.addEventListener("scroll",function(){
  var header = document.getElementById('header');
  if(window.pageYOffset>100){
    header.classList.add('sticky-header');
  }
  else{
    header.classList.remove('sticky-header');
  }
});
window.addEventListener("scroll",function(){
  if(window.pageYOffset>2141){
    let c3 = document.querySelector('.blue-circle-3');
    let c4 = document.querySelector('.blue-circle-4');
    let c5 = document.querySelector('.blue-circle-5');
    let c6 = document.querySelector('.blue-circle-6');
    c3.classList.add('fadein');
    c4.classList.add('delay-circle-2');
    c4.classList.add('fadein');
    c5.classList.add('delay-circle-3');
    c5.classList.add('fadein');
    c6.classList.add('delay-circle-4');
    c6.classList.add('fadein');
  }
});
