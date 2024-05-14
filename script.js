$(document).ready(function(){
 $('.navbar-toggler').click(function(){
    $(this).parent().toggleClass("bg-body-tertiary");
  });


  $('.dots-click1').click(function(){
    // console.log("clicked on dots");
    $(this).addClass("swiper-pagination-bullet-active");
    $('.dots-click2').removeClass("swiper-pagination-bullet-active");
    $('.dots-click3').removeClass("swiper-pagination-bullet-active");
    $('#individual-heading').text("Jenny Wilson");
    $("#Container9-individuals-img").attr("src","../Photos/Container9-individuals-img1.png");



 
    $("#Container9-individuals-img").addClass("individual-anim");
    setTimeout(function() {
      $('#Container9-individuals-img').removeClass('individual-anim');
  },500);

    $("#individual-heading").addClass("individual-anim");

    setTimeout(function() {
      $('#individual-heading').removeClass('individual-anim');
  },500);
    

  });

  $('.dots-click2').click(function(){
    // console.log("clicked on dots");
    $(this).addClass("swiper-pagination-bullet-active");
    $('.dots-click1').removeClass("swiper-pagination-bullet-active");
    $('.dots-click3').removeClass("swiper-pagination-bullet-active");
    $('#individual-heading').text("Monica Bellucci");
    $("#Container9-individuals-img").attr("src","../Photos/Container9-individuals-img2.png");


    $("#Container9-individuals-img").addClass("individual-anim");
    setTimeout(function() {
      $('#Container9-individuals-img').removeClass('individual-anim');
  },500);

    $("#individual-heading").addClass("individual-anim");

    setTimeout(function() {
      $('#individual-heading').removeClass('individual-anim');
  },500);
  });

  $('.dots-click3').click(function(){
    // console.log("clicked on dots");
    $(this).addClass("swiper-pagination-bullet-active");
    $('.dots-click1').removeClass("swiper-pagination-bullet-active");
    $('.dots-click2').removeClass("swiper-pagination-bullet-active");
    $('#individual-heading').text("Javier Bardem");
    $("#Container9-individuals-img").attr("src","../Photos/Container9-individuals-img3.png");

    $("#Container9-individuals-img").addClass("individual-anim");
    setTimeout(function() {
      $('#Container9-individuals-img').removeClass('individual-anim');
  },500);

    $("#individual-heading").addClass("individual-anim");

    setTimeout(function() {
      $('#individual-heading').removeClass('individual-anim');
  },500);
  });


// Number Increament

const workSection = document.querySelector(".container3");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    // console.log(entries);
const counterNum = document.querySelectorAll(".counter-numbers");
// console.log(counterNum);
const speed = 10;

counterNum.forEach((curNumber) => {
    const updateNumber = () => {
        const targetNumber = parseInt(curNumber.dataset.number);
        // console.log(targetNumber);
        const initialNumber = parseInt(curNumber.innerText);
        // console.log(initialNumber);
        const incrementNumber = Math.trunc(targetNumber / speed);
        // i am adding the value to the main number
        console.log(incrementNumber);

        if (initialNumber < targetNumber) {
            curNumber.innerText = `${initialNumber + incrementNumber}k`;
            setTimeout(updateNumber, 120);
        } else {
            curNumber.innerText = `${targetNumber}k`;
        }

    };
    updateNumber();
});

};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);

});


