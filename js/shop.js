(function(){
   const listAll = document.getElementsByClassName('list-all')[0];
   const cart = document.getElementById('cart');
   const close = document.getElementById('close');

   listAll.addEventListener("click", changeNav);
   cart.addEventListener('click', cartBoxView);
   close.addEventListener('click', cartBoxView);

   function changeNav(){
      const nav = document.getElementsByTagName('nav')[0].offsetTop + 52;
      const sitemap = document.getElementById('sitemap');
      listAll.classList.toggle('close');
      listAll.classList.toggle('newlist');
      console.log(listAll.className);
      if(listAll.className == 'list-all close'){
        sitemap.style.top = nav+"px";
        sitemap.style.display="block";
      }else{
         sitemap.style.display="none";
      }
   }

 
   function cartBoxView(){
      document.getElementsByClassName('cart-view')[0].classList.toggle('none');
   }

  // const bx = document.getElementById("ct");
   // console.log(bx.dataset);

//    window.onload = function(){
//    }
  

//// 슬라이드쇼 
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName('img-slide');
   if( n > slides.length ) { slideIndex = 1}
   if( n < 1) { slideIndex = slides.length }
   for( i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   slides[slideIndex -1].style.display = "block";
}

}());



function viewTab(e){
   const tabcontent = document.getElementsByClassName('tabcontent');
   const tabs  = document.getElementsByClassName('tab')[0];
   console.log(tabs.children[0]);

   for( let i =0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove('active');
   }
 
   for( let i = 0; i < tabcontent.length; i++) {
      tabs.children[i].classList.remove('active');
   }

   tabcontent[e].classList.add('active');
   tabs.children[e].classList.add('active');
}   

