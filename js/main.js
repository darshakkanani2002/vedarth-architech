// Import-Components

$(document).ready(function () {
  $('#navbar').load('navbar.html');
  $('#footer').load('footer.html');
});

//Scrool To Top Button

function scrollTop() {
  if ($(window).scrollTop() > 500) {
    $(".backtotopbtn").addClass("active");
  } else {
    $(".backtotopbtn").removeClass("active");
  }
}
$(function () {
  scrollTop();
  $(window).on("scroll", scrollTop);

  $(".backtotopbtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1);
    return false;
  });
});

// hero section js
AOS.init();
var swiperOptions = {
  effect: 'fade',
  loop: true,
  // speed: 2000,
  parallax: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.hero-button-next',
    prevEl: '.hero-button-prev',
  },
  on: {
    slideChangeTransitionStart: function () {
      $('.ani').hide(0);
      $('.ani').removeClass('aos-init').removeClass('aos-animate');
    },
    slideChangeTransitionEnd: function () {
      $('.ani').show(0);
      AOS.init();
    },
  },
};

var swiper = new Swiper(".hero-swiper", swiperOptions);

// testimonial js
var swiper = new Swiper(".testimonial-swiper", {
  loop: true,
  watchSlidesProgress: true,
  spaceBetween: 15,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".testimonial-swiper-button-next",
    prevEl: ".testimonial-swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
  allowTouchMove: true,
});

// var swiper = new Swiper(".testimonial-swiper", {
//   loop: true,
//   spaceBetween: 10,
//   slidesPerView: 1,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });
// var swiper2 = new Swiper(".testimonial-swiper-2", {
//   loop: true,
//   spaceBetween: 10,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   navigation: {
//     nextEl: ".testimonial-swiper-button-next",
//     prevEl: ".testimonial-swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });

// Image-Gallery

let currentImageIndex = 0;
let imagePaths = [];

function openFullScreen(img) {
  document.getElementById('fullscreenImage').src = img.src;
  currentImageIndex = imagePaths.findIndex(item => item.path === img.src);
  document.getElementById('fullscreenContainer').style.display = "flex";
}

function closeFullScreen() {
  document.getElementById('fullscreenContainer').style.display = "none";
}

function navigateImage(direction) {
  currentImageIndex = (currentImageIndex + direction + imagePaths.length) % imagePaths.length;
  document.getElementById('fullscreenImage').src = imagePaths[currentImageIndex].path;
}

document.addEventListener('DOMContentLoaded', function () {
  let galleryImages = document.querySelectorAll('.gallery img');
  galleryImages.forEach((img, index) => {
    imagePaths.push({ index: index, path: img.src });
    img.addEventListener('click', function () {
      openFullScreen(img);
    });
  });
});

$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      slideChange: function () {
        var activeIndex = this.activeIndex;
        var firstSlideIndex = 0;
        if (activeIndex === firstSlideIndex) {
          // Get the URL of the image in the first slide and display it
          var firstSlideImageSrc = $('.swiper-slide').eq(firstSlideIndex).find('img').attr('src');
          $('#firstSlideImage').attr('src', firstSlideImageSrc);
        }
      }
    }
  });
});

// news and blog section js
var swiper = new Swiper(".blog-swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 150,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  on: {
    slideChange: function () {
      var activeSlideIndex = this.realIndex;
      $(".swiper-slide").removeClass("active-slide");
      $(".swiper-slide").eq(activeSlideIndex).addClass("active-slide");
    }
  }
});


// For product detail page progressbar

$(document).ready(function () {
  $(window).scroll(testScroll);
  var viewed = false;

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  function testScroll() {
    if (isScrolledIntoView($(".progress-div")) && !viewed) {
      viewed = true;
      progress_bar();
    }
  }
});

function progress_bar() {
  var speed = 25;
  var items = $('.project-bar').find('.project-detail-value');

  items.each(function () {
    var item = $(this).find('.project-progress');
    var itemValue = item.data('progress');
    var i = 0;
    var value = $(this);

    var count = setInterval(function () {
      if (i <= itemValue) {
        updateProgressBar(item, value, i);
      } else {
        clearInterval(count);
      }
      i++;
    }, speed);
  });
}

function updateProgressBar(item, value, progress) {
  var progressString = progress.toString();
  item.css({
    'width': progressString + '%'
  });
  value.find('.project-value').html(progressString + '%');
}



