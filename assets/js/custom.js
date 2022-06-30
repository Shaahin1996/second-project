// swipers
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    570: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

$("#filterResultNovelties").hide();
$("#filterCheckboxNovelties").click(function () {
  if ($(this).is(":checked")) {
    $("#filterResultNovelties").show(100);
  } else {
    $("#filterResultNovelties").hide(100);
  }
});

$("#filterResultDiscounted").hide();
$("#filterCheckboxDiscounted").click(function () {
  if ($(this).is(":checked")) {
    $("#filterResultDiscounted").show(100);
  } else {
    $("#filterResultDiscounted").hide(100);
  }
});

function handleSwitcherNovelties() {
  $('#filterCheckboxNovelties').attr('checked', false);
  $("#filterResultNovelties").hide(100);
};

function handleSwitcherDiscounted() {
  $('#filterCheckboxDiscounted').attr('checked', false);
  $("#filterResultDiscounted").hide(100);
}

$('#productHamburgerMenu').click(function () {
  $('#sidebar').toggleClass('product__toggleSidebar');
})

$('#productHamburgerMenu').click(function () {
  $('#toggleWrapper').toggleClass('toggleWrapper');
})

$('#navbarHamburgerMenu').click(function () {
  $('#toggleNavbar').toggleClass('navbar__toggleNav');
})
