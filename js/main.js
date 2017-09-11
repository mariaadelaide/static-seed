
$(document).on('ready', function() {

  /* --- MENU HAMBURGER --- */
  var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

  var hamburgers = document.querySelectorAll(".navbar-toggle"); /* .navbar-toggle - bootstrap class */
  if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
        this.querySelector('.hamburger').classList.toggle("is-active");
      }, false);
    });
  }
  
});


function slick_count(sliderClass, sliderText) {
  var sliders= sliderClass.slick("getSlick").slideCount;
  sliderText.text(1 + '/' + sliders);

  sliderClass.find(".slick-slide").on("click", function(){
    sliderClass.slick("slickNext");
  });

  sliderClass.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    sliderText.text(i + '/' + slick.slideCount);
  });
}
