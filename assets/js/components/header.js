if(document.querySelector(".hero.slideshow-slideshow")){
  var header = document.querySelector(".site-header__inner");
  var sticky = document.querySelector(".hero.slideshow-slideshow").clientHeight;
  window.onscroll = function() {headerScrollFix()};

  function headerScrollFix() {
    if (window.pageYOffset > sticky) {
      header.classList.add("white");
    } else {
      header.classList.remove("white");
    }
  }
}

if(document.querySelector(".collection_categories")){
  var collection_header = document.querySelector(".collection_categories");
  var collection_sticky = document.querySelector(".action-bar-secondary").offsetTop + document.querySelector(".site-header").clientHeight;
  window.onscroll = function() {collectionScrollFix()};

  function collectionScrollFix() {
    if (window.pageYOffset > collection_sticky) {
      collection_header.classList.add("fixed");
    } else {
      collection_header.classList.remove("fixed");
    }
  }
}