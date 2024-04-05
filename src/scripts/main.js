// slider

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  skipBtn: false,
  autoplayHoverPause: false,
  swipe: false,
  customPaging: function (index, a11ySlider) {
    return '<button class="slider-number"></button>';
  },
  responsive: {
    800: {
      dots: false,
      centerMode: true,
    },
  },
});

// Navigation Menu Toggle

const mobileNavToggle = document.querySelector(".mobiile-nav-toggle");
const mobileNavMenu = document.querySelector("#primary-navigation");
const primaryHeader = document.querySelector(".primary-header");

mobileNavToggle.addEventListener("click", () => {
  mobileNavMenu.toggleAttribute("data-visible");

  const visible = mobileNavMenu.getAttribute("data-visible");
  primaryHeader.setAttribute("aria-expanded", visible == "" ? "true" : "false");
});
