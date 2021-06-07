

/* let imgHeader = document.getElementsByClassName("img_header");
console.log(imgHeader ); */


let imgHeader = $('.img_header');
console.log(imgHeader);

let yesNo = $('.yes_no');
console.log(yesNo); 

let quotes = $('.p_quotes');
console.log(quotes);




window.addEventListener("scroll", function(){

    scrollValue=(window.innerHeight + window.scrollY) / (document.body.offsetHeight);
    console.log(scrollValue);

    

    //image appear 
  /* if(scrollValue > 0.0001){
    imgHeader.css("opacity" , 1);
    imgHeader.css("transform", "none"); 
  }*/

  if(scrollValue > 0.4){
      yesNo.css("opacity" , 1);
      yesNo.css("transform", "none")
  }



}); 




