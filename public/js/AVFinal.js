//  Top Image Viewer Code - The code below blurs the BG image, and transitions in the text when the Scrollbar becomes active

var viewTextBox = document.querySelector('.view-text-box')
var viewImg = document.querySelector('.view-img');

window.addEventListener('scroll', function () {
   viewImg.style.filter = 'blur(6px)';
   viewImg.style.transition = '4s'
   viewTextBox.style.opacity = '1.0';
   viewTextBox.style.transition = '4s';
});

// END----------------------------------------------------------- //


var top = document.querySelector('#to-top').style.display = 'none'


function fixNav() {
   if (window.scrollY > 200) {
      var top = document.querySelector('#to-top').style.display = 'block'
   } else {
      var top = document.querySelector('#to-top').style.display = 'none'
   }
}

window.addEventListener('scroll', fixNav)


// Image Slider Logic ------------------------------------------------------------------------------------- //

var forward = document.querySelector('#next')       // Move Forward button
var backward = document.querySelector('#prev')      // Move Backwards button

var image = [
   '../images/images/boardroom1.jpg',
   '../images/images/boardroom2.png',
   '../images/images/boardroom3.jpg',
   '../images/images/boardroom5.jpg',
   '../images/images/boardroom6.jpg',
   '../images/images/boardroom7.jpg'
]


var imageSlider = document.querySelector('#imageBox')

var i = 0                                                           // Array count manager

imageSlider.setAttribute('src', image[0])                           // Set initial image on page load

forward.addEventListener('click', function () {
   if (i < image.length - 1) {
      i++
      imageSlider.setAttribute('src', image[i])
   } else {
      i = 0
      imageSlider.setAttribute('src', image[i])
   }
});

backward.addEventListener('click', function () {
   if (i == 0) {
      i = image.length - 1
      imageSlider.setAttribute('src', image[i])
   }
   else if (i <= image.length - 1) {
      i--
      imageSlider.setAttribute('src', image[i])
   }
});
