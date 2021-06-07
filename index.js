


let imgHeader = $('.img_header');
console.log(imgHeader);

let yesNo = $('.yes_no');
console.log(yesNo); 

let quotes = $('.p_quotes');
console.log(quotes);




window.addEventListener("scroll", function(){

    scrollValue=(window.innerHeight + window.scrollY) / (document.body.offsetHeight);
    console.log(scrollValue);

    

  if(scrollValue > 0.4){
      yesNo.css("opacity" , 1);
      yesNo.css("transform", "none")
  }

}); 




