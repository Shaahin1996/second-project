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

$('#navbarHamburgerMenu').click(function () {
  $('#toggleNavbar').toggleClass('navbar__toggleNav');
})

//   var rangeOne = document.querySelector('input[name="rangeOne"]'),
//   rangeTwo = document.querySelector('input[name="rangeTwo"]'),
//   outputOne = document.querySelector('.outputOne'),
//   outputTwo = document.querySelector('.outputTwo'),
//   inclRange = document.querySelector('.incl-range'),
//   updateView = function () {
//     if (this.getAttribute('name') === 'rangeOne') {
//       outputOne.innerHTML = this.value;
//       outputOne.style.left = this.value / this.getAttribute('max') * 100 + '%';
//     } else {
//       outputTwo.style.left = this.value / this.getAttribute('max') * 100 + '%';
//       outputTwo.innerHTML = this.value
//     }
//     if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
//       inclRange.style.width = (rangeOne.value - rangeTwo.value) / this.getAttribute('max') * 100 + '%';
//       inclRange.style.left = rangeTwo.value / this.getAttribute('max') * 100 + '%';
//     } else {
//       inclRange.style.width = (rangeTwo.value - rangeOne.value) / this.getAttribute('max') * 100 + '%';
//       inclRange.style.left = rangeOne.value / this.getAttribute('max') * 100 + '%';
//     }
//   };

// document.addEventListener('DOMContentLoaded', function () {
//   updateView.call(rangeOne);
//   updateView.call(rangeTwo);
//   $('input[type="range"]').on('mouseup', function() {
//     this.blur();
//   }).on('mousedown input', function () {
//     updateView.call(this);
//   });
// });