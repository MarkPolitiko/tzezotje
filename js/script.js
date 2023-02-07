const swiper = new Swiper(".customSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".customSwiper-new", {
  centeredSlides: true,
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        enabled: true,
        el: ".swiper-pagination",
        type: "bullets",
      },
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const popup = document.querySelector(".popup");
const popupWindow = document.querySelector(".popup__window");
const popupCloseButton = document.querySelector(".popup__close");
const popupButton = document.querySelector(".popup__button");
const button = document.querySelector(".header__button");

function closePopup(item, itemToClose, classToRemove) {
  item.addEventListener("click", (target) => {
    itemToClose.forEach((evt, i) => {
      evt.classList.remove(classToRemove[i]);
    });
  });
}
function openPopup(item, itemToOpen, classToAdd) {
  item.addEventListener("click", () => {
    itemToOpen.forEach((evt, i) => {
      evt.classList.add(classToAdd[i]);
    });
  });
}

openPopup(
  button,
  [popup, popupWindow],
  ["popup_opened", "popup__window_opened"]
);
closePopup(
  popupCloseButton,
  [popup, popupWindow],
  ["popup_opened", "popup__window_opened"]
);
