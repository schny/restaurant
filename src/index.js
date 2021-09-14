//alert("my restaurant");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    // document.getElementById("topnav").style.padding = "10px 10px";
    document.getElementById("topnav").classList.add('nav-scrolled');
    document.getElementById("topnav").classList.remove('nav-top');
    document.getElementById("logo").classList.add('logo-scrolled');
    document.getElementById("logo").classList.remove('logo-top');
  } else {
    // document.getElementById("topnav").style.padding = "30px 10px";
    document.getElementById("topnav").classList.add('nav-top');
    document.getElementById("topnav").classList.remove('nav-scrolled');
    document.getElementById("logo").classList.add('logo-top');
    document.getElementById("logo").classList.remove('logo-scrolled');
  }

}


// $(document).ready(changeImage);

// function changeImage() {
//   var imgList = ['\"../src/2.jpg\"', '\"../src/1.jpg\"', '\"../src/3.jpg\"', '\"../src/4.jpg\"',
//    '\"../src/7.jpg\"' ];
//   var content = $('#content');
//   var under = $('.under-bg');
//   var count = 0;
//   var underCount = 1;

//   content.css('background-image', `url(${imgList[0]})`);
//   under.css('background-image', `url('${imgList[1]})`);
//   setInterval(function() {
//     content.css('background-image', `url(${imgList[count]})`);
//     count == imgList.length - 1 ? count = 0 : count++;
//   }, 4000);
//   // setInterval(function() {
//   //   under.css('background-image', `url(${imgList[underCount]})`);
//   //   underCount == imgList.length - 1 ? underCount = 0 : underCount++;
//   // }, 5000);
  
// }
