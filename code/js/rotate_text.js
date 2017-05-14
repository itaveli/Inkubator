// function Rotator(start_from){
//     var phrases = ["ДИЗАЙН","РАЗРАБОТКА","SEO ОПТИМИЗАЦИЯ","SMM","КОПИРАЙТИНГ","КОНТЕКСТНАЯ РЕКЛАМА"];
//     var total = phrases.length;
//     var interval = 5000;
//     if(void 0 === start_from){
//         start_from = 0;
//     }
//
//     $(".slider_banner").text(phrases[start_from]).animate({"opacity":"1"}, 1000, function(){
//                 if(start_from >= (total-1)){
//                     setTimeout(function(){
//                         $(".slider_banner").animate({"opacity":"0"}, 1000, function(){
//                             Rotator();
//                         });
//                     }, interval);
//                 }else{
//                     start_from++;
//                     setTimeout(function(){
//                         $(".slider_banner").animate({"opacity":"0"}, 1000,function(){
//                             Rotator(start_from);
//                         });
//                     }, interval);
//
//                 }
//
//     })
// }
let slider = document.querySelector('.slidertext');
let sliders = document.querySelectorAll('.slidertext li');
let i = 0;


setInterval(nextSl, 3000);

function nextSl() {
  sliders[i].className = '';
  i++;
  if(i == sliders.length){
    i = 0;
  }
  sliders[i].className = 'shown';

}
