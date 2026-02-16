//anchorスクロール
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - 60;
    $("body,html").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing",
    );
    return false;
  });
});

//スクロールでヘッダーの背景
$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});

// ナビ
$(function () {
  $(".nav-btn").click(function () {
    $(this).toggleClass("active");
    $(".nav-menu").toggleClass("active");
    $(".nav-menu-bg").toggleClass("active");
  });
});
$(function () {
  $(".nav-links a").click(function () {
    $(".nav-btn").removeClass("active");
    $(".nav-menu").removeClass("active");
    $(".nav-menu-bg").removeClass("active");
  });
});

const modal = document.getElementById("worksModal");
const overlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".modal-close");
const worksItems = document.querySelectorAll(".works-img");

let scrollPosition = 0;
if (modal && worksItems.length) {
  worksItems.forEach((item) => {
    item.addEventListener("click", () => {
      scrollPosition = window.scrollY;

      modal.classList.add("active");

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";

      const slideIndex = Number(item.dataset.slide);
      worksSwiper.slideTo(slideIndex, 0);
    });
  });
}

function closeModal() {
  modal.classList.remove("active");

  // 固定解除
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";

  // 元の位置に戻す
  window.scrollTo(0, scrollPosition);
}
// overlay.addEventListener("click", closeModal);
if (closeBtn) {
  closeBtn.addEventListener("click", closeModal);
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
