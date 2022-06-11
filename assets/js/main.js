"use strict";
$(document).ready(function () {
  //Select box
  $(".niceSelect").niceSelect();

  //Countdown TimeZone
  $("#offerCountdown1").countdown({
    year: 2022, // YYYY Format
    month: 7, // 1-12
    day: 1, // 1-31
    hour: 0, // 24 hour format 0-23
    minute: 0, // 0-59
    second: 0, // 0-59
  });
  $("#offerCountdown2").countdown({
    year: 2032, // YYYY Format
    month: 7, // 1-12
    day: 1, // 1-31
    hour: 0, // 24 hour format 0-23
    minute: 0, // 0-59
    second: 0, // 0-59
  });
});

//Header

//Sticky Navbar
function stickyHeader(stickyTag, stickyClass) {
  let stickyWrapper = document.querySelector(`#${stickyTag}`);
  stickyWrapper.classList.toggle(stickyClass, scrollY > 0);
}
window.addEventListener("scroll", () => {
  if (window.innerWidth >= 992) {
    stickyHeader("topbarWrapper", "navbar_fixed_desktop");
  } else if (window.innerWidth <= 991) {
    stickyHeader("navbarWrapper", "navbar_fixed_mobile");
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    stickyHeader("topbarWrapper", "navbar_fixed_desktop");
  } else if (window.innerWidth <= 991) {
    stickyHeader("navbarWrapper", "navbar_fixed_mobile");
  }
});

let topbarWrapperScroll = document.querySelector("#topbarWrapper");
let navbarWrapperScroll = document.querySelector("#navbarWrapper");

if (topbarWrapperScroll || navbarWrapperScroll) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      topbarWrapperScroll.style.cssText = "top:0px; opacity:1;";
      navbarWrapperScroll.style.cssText = "top:0px; opacity:1;";
    } else {
      topbarWrapperScroll.style.cssText = "top:-200px; opacity:0;";
      navbarWrapperScroll.style.cssText = "top:-200px; opacity:0;";
    }
    prevScrollpos = currentScrollPos;
  };
}

//Mobile Menu
let mobileMenuList = document.querySelectorAll(
  "#mobileMenuList .mobile_dropdown"
);
mobileMenuList.forEach((addClass) => {
  addClass.addEventListener("click", (e) => {
    mobileMenuList.forEach((removeClass) => {
      removeClass.classList.remove("mobile_menu_active");
    });
    addClass.classList.add("mobile_menu_active");
  });
});

//Add Class
function displayItem(addID, addClass, ovlerlayID) {
  let addDiv = document.querySelector(`#${addID}`);
  let ovlerlayDiv = document.querySelector(`#${ovlerlayID}`);
  addDiv.classList.toggle(addClass);
  ovlerlayDiv.style.cssText = "  display: block;";
}
//Remove Class
function removeDisplayItem(removeID, removeClass, ovlerlayID) {
  let addDiv = document.querySelector(`#${removeID}`);
  let ovlerlayDiv = document.querySelector(`#${ovlerlayID}`);
  addDiv.classList.toggle(removeClass);
  ovlerlayDiv.style.cssText = "  display: none;";
}

//OutSide Scroll Hidden
function scrollOutsideHidden() {
  let htmlTag = document.querySelector("html");
  htmlTag.style.cssText = "overflow:hidden;";
}
//OutSide Scroll Scroll
function scrollOutsideScroll() {
  let htmlTag = document.querySelector("html");
  htmlTag.style.cssText = "overflow:auto;";
}

let HamburgerIcon = document.querySelector("#HamburgerIcon");
let mobileMenuCloseIcon = document.querySelector("#mobileMenuCloseIcon");
let mobileNavbarArea = document.querySelector("#mobileNavbarArea");
let mobileMenuOverlay = document.querySelector("#mobileMenuOverlay");
if (HamburgerIcon) {
  HamburgerIcon.addEventListener("click", () => {
    displayItem("mobileNavbarArea", "mobile_menu_active", "mobileMenuOverlay");
    scrollOutsideHidden();
  });
}
if (mobileMenuCloseIcon) {
  mobileMenuCloseIcon.addEventListener("click", () => {
    removeDisplayItem(
      "mobileNavbarArea",
      "mobile_menu_active",
      "mobileMenuOverlay"
    );
    scrollOutsideScroll();
  });
}
if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener("click", () => {
    removeDisplayItem(
      "mobileNavbarArea",
      "mobile_menu_active",
      "mobileMenuOverlay"
    );
    scrollOutsideScroll();
  });
}

let headerCategory = document.querySelector("#headerCategory");
let headerCategoryIndex = document.querySelector("#headerCategoryIndex");
let headerCategoryMenu = document.querySelector("#headerCategoryMenu");
if (headerCategory) {
  headerCategory.addEventListener("click", () => {
    headerCategoryMenu.classList.toggle("category_active");
  });

  outSideDetect(
    "headerCategory",
    "headerCategoryMenu",
    "headerCategoryMenu",
    "category_active"
  );
}
if (headerCategoryIndex) {
  headerCategoryIndex.addEventListener("click", () => {
    if (window.innerWidth < 1200) {
      headerCategoryMenu.classList.toggle("category_active");
    }
  });

  outSideDetect(
    "headerCategoryIndex",
    "headerCategoryMenu",
    "headerCategoryMenu",
    "category_active"
  );
}

//Search For Mobile
let suggestSearchForm = document.querySelectorAll("#suggestSearchForm");
for (let x of suggestSearchForm) {
  x.addEventListener("click", () => {
    x.classList.toggle("suggestActive");
  });
}

//Cart Button
let cartDesktop = document.querySelector("#cartDesktop");
let cartButtonDesk = document.querySelector("#cartButtonDesk");
let cartMobile = document.querySelector("#cartMobile");
let cartButtonMobile = document.querySelector("#cartButtonMobile");

if (cartButtonDesk) {
  cartButtonDesk.addEventListener("click", () => {
    cartDesktop.classList.toggle("cart_dropdown_active");
  });

  if (window.innerWidth >= 1200) {
    cartButtonDesk.addEventListener("mouseenter", () => {
      cartDesktop.classList.add("cart_dropdown_active");
    });
    cartButtonDesk.addEventListener("mouseleave", () => {
      cartDesktop.classList.remove("cart_dropdown_active");
    });
  }
  outSideDetect(
    "cartButtonDesk",
    "cartDesktop",
    "cartDesktop",
    "cart_dropdown_active"
  );
}

if (cartButtonMobile) {
  cartButtonMobile.addEventListener("click", () => {
    cartMobile.classList.toggle("cart_dropdown_active");
  });

  outSideDetect(
    "cartButtonMobile",
    "cartMobile",
    "cartMobile",
    "cart_dropdown_active"
  );
}

//Profile Icon
let profileIcon = document.querySelector("#profileIcon");
let profileIconDesktop = document.querySelector("#profileIconDesktop");
let profileDropdownArea = document.querySelector("#profileDropdownArea");
let profileDropdownAreaDesktop = document.querySelector(
  "#profileDropdownAreaDesktop"
);
if (profileIcon) {
  profileIcon.addEventListener("click", () => {
    profileDropdownArea.classList.toggle("profile_dropdown_active");
  });

  outSideDetect(
    "profileIcon",
    "profileDropdownArea",
    "profileDropdownArea",
    "profile_dropdown_active"
  );
}
if (profileIconDesktop) {
  profileIconDesktop.addEventListener("click", () => {
    profileDropdownAreaDesktop.classList.toggle("profile_dropdown_active");
  });
  if (window.innerWidth >= 1200) {
    profileIconDesktop.addEventListener("mouseenter", () => {
      profileDropdownAreaDesktop.classList.add("profile_dropdown_active");
    });
    profileIconDesktop.addEventListener("mouseleave", () => {
      profileDropdownAreaDesktop.classList.remove("profile_dropdown_active");
    });
  }
  outSideDetect(
    "profileIconDesktop",
    "profileDropdownAreaDesktop",
    "profileDropdownAreaDesktop",
    "profile_dropdown_active"
  );
}
//Preloader
let preLoader = document.querySelector("#preLoader");
if (preLoader) {
  window.addEventListener("load", () => {
    preLoader.style.cssText = "display:none;";
  });
}

//For Each Loop Function
function forEachLoop(addClass, selector, activeClass) {
  let selectItems = document.querySelectorAll(selector);
  addClass.addEventListener("click", (e) => {
    selectItems.forEach((removeClass) => {
      removeClass.classList.remove(activeClass);
    });
    addClass.classList.add(activeClass);
  });
}

//Hero Slider
let swiperHero = new Swiper(".hero_slider_area .swiper", {
  // Default parameters
  speed: 1050,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Popular Product Slider
let swiperPopular = new Swiper(".popular_product_slider_area .swiper", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 15,
  speed: 1050,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
  },
  navigation: {
    nextEl: ".popular_slider_next_arrow",
    prevEl: ".popular_slider_prev_arrow",
  },
});

//Popular Product Slider
let swiperDeals = new Swiper(".deals_day_product_slider_area .swiper", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 15,
  speed: 1050,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
      spaceBetween: 37,
    },
  },
  navigation: {
    nextEl: ".deals_of_day_slider_next_arrow",
    prevEl: ".deals_of_day_slider_prev_arrow",
  },
});

//New Arrival Product Slider
let swiperNewArrival = new Swiper(".arrival_slider_area .swiper", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 10,
  speed: 1050,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".arrival_slider_next_arrow",
    prevEl: ".arrival_slider_prev_arrow",
  },
});
//Top Category Product Slider
let swiperTopCategory = new Swiper(".top_category_slider_area .swiper", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 10,
  speed: 1050,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".top_category_slider_next_arrow",
    prevEl: ".top_category_slider_prev_arrow",
  },
});
//Foodstuffs Product Slider
let swiperFoodstuffs = new Swiper(".foodstuffs_slider_area .swiper", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 10,
  speed: 1050,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".foodstuffs_slider_next_arrow",
    prevEl: ".foodstuffs_slider_prev_arrow",
  },
});

//Apparel Product Slider
let swiperApparel = new Swiper(".apparel_slider_area .swiper", {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 10,
  speed: 1050,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".apparel_slider_next_arrow",
    prevEl: ".apparel_slider_prev_arrow",
  },
});

//Electronic Slider
let swiperElectronics = new Swiper(".electronic_slider_area .swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1050,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: ".electronic_slider_next_arrow",
    prevEl: ".electronic_slider_prev_arrow",
  },
});

//Popular Product Slider
let swiperDiscountOffer = new Swiper(
  ".discount_offer_product_slider_area .swiper",
  {
    // Default parameters
    slidesPerView: 2,
    spaceBetween: 15,
    speed: 1050,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 4,
        spaceBetween: 37,
      },
    },
    navigation: {
      nextEl: ".discount_offer_slider_next_arrow",
      prevEl: ".discount_offer_slider_prev_arrow",
    },
  }
);
//Report Slider
let swiperReport = new Swiper(".repot_slider_area .swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1050,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 992px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".report_slider_next",
    prevEl: ".report_slider_prev",
  },
});
//Report TAb Slider
let swiperReportTab = new Swiper(".report_tab_slider_area .swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 1050,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Responsive breakpoints
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  navigation: {
    nextEl: ".report_tab_slider_next",
    prevEl: ".report_tab_slider_prev",
  },
});

//Mobile Button Tab Slider
let swiperMobileButtonTab = new Swiper(".mobile_slider_button_area .swiper", {
  // Default parameters
  slidesPerView: "auto",
  spaceBetween: 16,
  speed: 1050,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
//Mobile  Tab Slider
let swiperMobileTab = new Swiper(".mobile_slider_tab_area .swiper", {
  // Default parameters
  slidesPerView: "auto",
  spaceBetween: 16,
  speed: 1050,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

//Category Tab
function openTab(evt, id) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab_item");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " tabActiveButton",
      ""
    );
  }
  document.getElementById(id).style.display = "block";
  evt.currentTarget.className += " tabActiveButton";
}
function openTab2(evt, id) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab_item2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(
      " tabActiveButton",
      ""
    );
  }
  document.getElementById(id).style.display = "block";
  evt.currentTarget.className += " tabActiveButton";
}

// Get the element with id="defaultOpen" and click on it
if (document.getElementById("defaultOpen")) {
  document.getElementById("defaultOpen").click();
}
if (document.getElementById("defaultOpen2")) {
  document.getElementById("defaultOpen2").click();
}

//Porduct Gallery
let bookmarkHeart = document.getElementById("bookmarkHeart");
if (bookmarkHeart) {
  bookmarkHeart.addEventListener("click", () => {
    bookmarkHeart.classList.toggle("bookmarked");
  });
}

//Cart Heart Icon
let cartHeartIcon = document.querySelector("#cartHeartIcon");
if (cartHeartIcon) {
  cartHeartIcon.addEventListener("click", () => {
    console.log("click");
    cartHeartIcon.classList.toggle("cart_active");
  });
}

//Deals Cart
let dealsCartButton = document.querySelectorAll("#dealsCartButton");
for (let x of dealsCartButton) {
  x.addEventListener("click", () => {
    x.classList.toggle("dealsBookarkActive");
  });
}

//Outside Click Detect
function outSideDetect(
  clickId,
  dropdownId,
  dropdownRemoveId,
  dropdownRemoveClass
) {
  document.addEventListener("click", function (event) {
    let clickDiv = document.querySelector(`#${clickId}`);
    let dropdownDiv = document.querySelector(`#${dropdownId}`);
    let dropdownRemoveDiv = document.querySelector(`#${dropdownRemoveId}`);
    let isClickInside = clickDiv.contains(event.target);
    let isClickOutside = dropdownDiv.contains(event.target);
    if (!isClickInside && !isClickOutside) {
      dropdownRemoveDiv.classList.remove(dropdownRemoveClass);
    }
  });
}

// ScrollToUp
let scroll = document.querySelector("#scrollTop");
window.addEventListener("scroll", function () {
  scroll.classList.toggle("scroll_active", window.scrollY > 500);
});
function scrollUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
if (scroll) {
  scroll.addEventListener("click", () => {
    scrollUp();
  });
}
