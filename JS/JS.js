let navbar = $(".navbar");
$(window).scroll(function () {
  console.log(window.innerHeight);
  if ($(window).scrollTop() > $(".main").offset().top) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

let count = function (selector) {
  $(selector).each(function () {
    $(this).animate(
      {
        counter: $(this).text(),
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (value) {
          $(this).text(Math.ceil(value));
        },
      }
    );
  });
};
let a = 0;
$(window).scroll(function () {
  if (a == 0 && $(window).scrollTop() >= $(".numbers").offset().top) {
    a++;
    count(".rect > h2");
  }
});
