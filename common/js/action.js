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
