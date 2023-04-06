(function(){
   const listAll = document.getElementsByClassName('list-all')[0];
   const cart = document.getElementById('cart');
   const close = document.getElementById('close');
   const changeImg = document.querySelectorAll('.simg');
   const size = document.shopform.size;
   
   changeImg.forEach( function(el){
      el.addEventListener('mouseenter', function(event){
          const src = event.target.src;
          document.getElementById('bimg').src=src;
      });
   });

   //본문 주문 폼
   size.forEach( function(sz){
       sz.addEventListener('change', function(e){
          const selectTitle = document.getElementById("title").value;
          const selectPrice = document.getElementById("price").value;
          const selectColor = document.querySelector('.color:checked').value;
          const selectSize = document.querySelector('.size:checked').value;
          console.log(selectTitle, selectPrice, selectColor, selectSize);
       });
   });


   /*
   changeImg.forEach( el => el.addEventListener('mouseenter', event=>{
       console.log(event);
   }));
   */
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

   const btnRight = document.getElementById("btn-right");
   const btnLeft = document.getElementById("btn-left");
   const ptIn = document.getElementById("ptIn");
   let ps = 0;
   btnRight.onclick = function(){
     ps = ptIn.offsetLeft;
     if(ps < 0) {
       ps += 50;
       ptIn.style.left = ps + "px";
     }  
   }
   btnLeft.onclick = function(){
      ps = ptIn.offsetLeft;
      if(ps > -200) {
         ps -= 50;
         //console.log(ps);
         ptIn.style.left = ps + "px";
      }
   }

}());




function updn(i, n) {
   var ct = parseInt(document.getElementsByClassName('ct')[i].value);
   if(n > 0) {
      if(ct <= 11) {
          ct = ct + 1;
      }
   }else{
      if(ct > 0) {
         ct = ct - 1;
      }
   }
   document.getElementsByClassName('ctv')[i].innerHTML = ct;
   document.getElementsByClassName('ct')[i].value = ct;
}


function viewQuick(){
   document.getElementsByClassName('quick')[0].classList.toggle('action'); 
}

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